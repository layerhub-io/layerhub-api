type ENVIRONMENT = 'development' | 'production' | 'test';

type AppConfig = {
  port: number;
  jwtSecret: string;
  aws: {
    accessKeyId: string;
    secrectAccessKey: string;
    emailSender: string;
    region: string;
    bucket: string;
  };
  appCdnBase: string;
  environment: ENVIRONMENT;
};
