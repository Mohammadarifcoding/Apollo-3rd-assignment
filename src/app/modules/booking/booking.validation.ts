import { z } from 'zod';

const BookingValidationSchema = z.object({
  body: z.object({
    date: z.string(),
    user: z.string(),
    car: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    totalCost: z.number().min(0),
  }),
});

export const BookingValidation = {
  BookingValidationSchema,
};
