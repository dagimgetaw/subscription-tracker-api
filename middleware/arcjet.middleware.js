import aj from "../config/arcjet.js";
import { ENV } from "../config/env.js";

const arcjetMiddleware = async (req, res, next) => {
  try {
    const result = await aj.protect(req, { requested: 1 });

    // Allow Postman in development
    if (result.isDenied()) {
      const isPostman = result.reason?.denied?.includes("POSTMAN");
      const isDev = ENV === "development";

      if (isPostman && isDev) {
        return next();
      }

      if (result.reason.isRateLimited()) {
        console.warn("Rate limit exceeded:", result.reason);
        return res.status(429).json({
          message: "Rate limit exceeded",
        });
      }

      if (result.reason.isBot()) {
        console.warn("Bot access denied:", result.reason);
        return res.status(403).json({
          message: "Access denied for bots",
        });
      }

      return res.status(403).json({
        message: "Access denied by Arcjet",
      });
    }

    next();
  } catch (error) {
    console.error("Arcjet middleware error:", error);
    next(error);
  }
};

export default arcjetMiddleware;
