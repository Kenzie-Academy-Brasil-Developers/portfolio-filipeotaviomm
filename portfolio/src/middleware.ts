import createMiddleware from "next-intl/middleware";
import { i18n } from "@/config/it8n.config";

export default createMiddleware(i18n);

export const config = {
  matcher: ["/", "/(de|en)/:path*"],
  // matcher: ["/((?!api|_next|.*\\..*).*)"],
};
