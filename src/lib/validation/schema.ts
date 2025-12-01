import { z } from "zod";

export const reservationSchema = z.object({
  first_name: z.string().min(2, "First name is too short"),
  last_name: z.string().min(2, "Last name is too short"),
  phone_number: z.string().regex(/^[0-9]{11}$/, "Invalid phone number"),
  description: z.string().min(5).max(500),
  guests: z.number().min(1).max(500),
  date:z.string(),
  memberId:z.number()
});
export type ReservationInput = z.infer<typeof reservationSchema>;
export const deleteReservationSchema = z.object({
  id: z.number().positive(),
});
const MAX_FILE_SIZE = 50000000;

const ACCEPTED_MEDIA_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "video/mp4",
  "video/gif",
  "video/webm",
];

export const imageGallerySchema = z.object({
  title: z.string().min(2, "title is too short"),
  media: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 50MB.`)
    .refine(
      (file) => ACCEPTED_MEDIA_TYPES.includes(file?.type),
      "Only image (jpg, jpeg, png, webp) and video (mp4, webm, gif) formats are supported."
    ),
  type: z
    .enum(["image" as string, "video" as string])
    .refine((val) => ["image", "video"].includes(val), {
      message: "Type must be either 'image' or 'video'",
    }),
});

export const ContactUsScheme = z.object({
  first_name: z.string().min(2, "First name is too short"),
  last_name: z.string().min(2, "Last name is too short"),
  phone_number: z.string().regex(/^[0-9]{11}$/, "Invalid phone number"),
  message: z.string().min(5).max(500),
});
