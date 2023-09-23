import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    REPLICATE_API_TOKEN: z.string().min(2),
  },
  client: {
    
  },
  runtimeEnv: {
    REPLICATE_API_TOKEN: process.env.REPLICATE_API_TOKEN,
  },
})