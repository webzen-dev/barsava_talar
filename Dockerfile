FROM node:20-alpine AS builder

WORKDIR /usr/src/app

ENV NODE_OPTIONS="--max-old-space-size=768"
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_IMAGE_OPTIMIZATION_DISABLED=1

RUN apk add --no-cache libc6-compat curl

COPY package*.json ./
COPY prisma ./prisma

RUN npm ci --prefer-offline --no-audit --progress=false

COPY . .

RUN npx prisma generate
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /usr/src/app

ENV NODE_ENV=production

RUN apk add --no-cache libc6-compat curl

COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/prisma ./prisma

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "start"]
