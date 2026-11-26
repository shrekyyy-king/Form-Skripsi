import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["id", "en"],
  defaultLocale: "id",
  localePrefix: "as-needed", // /dashboard = Indonesia, /en/dashboard = Inggris
});

export type Locale = (typeof routing.locales)[number];
