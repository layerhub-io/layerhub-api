import { AppConfig, SocialAuth } from "../interfaces/app";
import dotenv from "dotenv";

dotenv.config();

class Config implements AppConfig {
  public mongo: { connString: string; name: string };
  public cdnBase: string;
  public aws: {
    bucket: string;
    credentials: { accessKeyId: string; secretAccessKey: string };
  };
  public appPort: number;
  public appHost: string;
  public pixabay: { apiKey: string };
  public pexels: { apiKey: string };
  public iconscout: { clientId: string; secret: string };
  public googleAuth: SocialAuth;
  public facebookAuth: SocialAuth;
  public authRedirectUrl: string;
  public proxyBase: string;
  constructor() {
    this.proxyBase = process.env.PROXY_BASE as string;
    this.cdnBase = process.env.CDN_BASE as string;
    this.mongo = {
      name: process.env.MONGO_DB_NAME as string,
      connString: process.env.MONGO_DB_CONN_STRING as string,
    };
    this.aws = {
      bucket: process.env.AWS_BUCKET_NAME as string,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
    };
    this.pixabay = {
      apiKey: process.env.PIXABAY_KEY as string,
    };
    this.iconscout = {
      clientId: process.env.ICONSCOUT_CLIENT_ID as string,
      secret: process.env.ICONSCOUT_SECRET as string,
    };
    this.pexels = {
      apiKey: process.env.PEXELS_KEY as string,
    };
    this.appPort = parseInt((process.env.PORT as string) || "8080");
    this.googleAuth = {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      redirectUrl: process.env.GOOGLE_CLIENT_REDIRECT_URL as string,
    };
    this.facebookAuth = {
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
      redirectUrl: process.env.FACEBOOK_CLIENT_REDIRECT_URL as string,
    };
    this.authRedirectUrl = process.env.AUTH_REDIRECT_URL as string;
  }
}

export default new Config();
