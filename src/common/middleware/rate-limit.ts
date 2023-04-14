import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  // windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  windowMs: 10 * 60 * 1000, // 15 minutes
  max: 20,
  message: 'You have exceeded the 20 requests in 15m limit!',
  headers: true
});
