import { config as loadDotenv } from 'dotenv';
import { cleanEnv, port, str, url } from 'envalid';

export function loadConfig(): AppConfig {
  loadDotenv();
  const env = cleanEnv(process.env, {
    JWT_SECRET: str(),
    PORT: port({ default: 8080 }),
    AWS_ACCESS_KEY_ID: str(),
    AWS_SECRET_ACCESS_KEY: str(),
    AWS_EMAIL_SENDER: str(),
    AWS_REGION: str(),
    AWS_BUCKET: str(),
    DB_CONNECTION: url(),
    NODE_ENV: str<ENVIRONMENT>({
      default: 'development'
    }),
    APP_CDN_BASE: str()
  });

  const config: AppConfig = {
    port: env.PORT,
    jwtSecret: env.JWT_SECRET,
    aws: {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secrectAccessKey: env.AWS_SECRET_ACCESS_KEY,
      emailSender: env.AWS_EMAIL_SENDER,
      bucket: env.AWS_BUCKET,
      region: env.AWS_REGION
    },
    appCdnBase: env.APP_CDN_BASE,
    environment: env.NODE_ENV
  };
  return config;
}
