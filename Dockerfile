# 1️⃣ Base image
FROM node:20-alpine AS base
WORKDIR /app

# 2️⃣ Dependencies stage
FROM base AS deps
RUN apk add --no-cache libc6-compat openssl
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
COPY prisma ./prisma

RUN if [ -f yarn.lock ]; then \
        yarn install --frozen-lockfile --production=false; \
    elif [ -f package-lock.json ]; then \
        npm ci; \
    elif [ -f pnpm-lock.yaml ]; then \
        corepack enable pnpm && pnpm install --frozen-lockfile; \
    else \
        echo "Lockfile not found." && exit 1; \
    fi

# 3️⃣ Build stage
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN if [ -f yarn.lock ]; then \
        yarn build; \
    elif [ -f package-lock.json ]; then \
        npm run build; \
    elif [ -f pnpm-lock.yaml ]; then \
        corepack enable pnpm && pnpm run build; \
    else \
        echo "Lockfile not found." && exit 1; \
    fi

# 4️⃣ Production stage
FROM base AS runner
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN if [ -f yarn.lock ]; then \
        yarn install --frozen-lockfile --production=true; \
    elif [ -f package-lock.json ]; then \
        npm ci --omit=dev; \
    elif [ -f pnpm-lock.yaml ]; then \
        corepack enable pnpm && pnpm install --frozen-lockfile --prod; \
    fi

COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["node", "server.js"]
