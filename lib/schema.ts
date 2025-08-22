// lib/schema.ts
import { z } from "zod"

// Schema for a single file in the registry
export const registryItemFileSchema = z.object({
  path: z.string(),
  type: z.string().optional(),
  target: z.string().optional(),
  content: z.string().optional(),
})

// Schema for the full registry item
export const registryItemSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  files: z.array(registryItemFileSchema),
})