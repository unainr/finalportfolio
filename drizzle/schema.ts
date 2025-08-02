import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const form = pgTable("form", {
  id: uuid("id").defaultRandom().primaryKey(), 
  name: varchar("name", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull(),
  message: varchar("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
