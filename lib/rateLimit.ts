import { RateLimiterMemory } from "rate-limiter-flexible";

type RateLimitOptions = {
  interval?: number;
};

export function rateLimiter(options?: RateLimitOptions) {
  // We use a Map to lazily instantiate limiters for different limit values
  const limiters = new Map<number, RateLimiterMemory>();

  return {
    check: async (limit: number, token: string) => {
      let limiter = limiters.get(limit);
      
      if (!limiter) {
        limiter = new RateLimiterMemory({
          points: limit,
          duration: (options?.interval || 60000) / 1000, // duration is in seconds
        });
        limiters.set(limit, limiter);
      }

      try {
        await limiter.consume(token);
      } catch {
        throw new Error("Rate limit exceeded");
      }
    },
  };
}

export const apiLimiter = rateLimiter({
  interval: 60 * 1000, // 1 minute
});
