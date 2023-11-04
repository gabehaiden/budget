import type { Config } from 'drizzle-kit'

export default {
  schema: "./lib/config/schema/index.ts",
  out: "./drizzle",
} satisfies Config