import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Preferensi bahasa disimpan otomatis oleh next-intl lewat cookie NEXT_LOCALE.
export default createMiddleware(routing);

export const config = { matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"] };
