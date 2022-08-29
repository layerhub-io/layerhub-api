// import { OAuth2Client } from "google-auth-library"
import { google } from "googleapis"
import axios from "axios"
import appConfig from "../../common/app-config"
class GoogleService {
  private client: any
  // constructor() {
  //   console.log(appConfig.googleAuth.clientId, appConfig.googleAuth.clientSecret, appConfig.googleAuth.redirectUrl)
  //   this.client = new google.auth.OAuth2(
  //     appConfig.googleAuth.clientId,
  //     appConfig.googleAuth.clientSecret,
  //     appConfig.googleAuth.redirectUrl
  //   )
  // }
  constructor() {
    const GOOGLE_CLIENT_ID = "326673198293-l066212ppihmocqd7194n5bife4f3ise.apps.googleusercontent.com"
    const GOOGLE_CLIENT_SECRET = "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"
    const REDIRECT = "http://localhost:8080/auth/google/callback"
    this.client = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT)
  }
  public getGoogleAuthURL = ({ action }: { action: string }) => {
    const scopes = [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ]
    return this.client.generateAuthUrl({
      access_type: "offline",
      prompt: "consent",
      scope: scopes,
      state: JSON.stringify({ action: action }),
    })
  }

  public getGoogleUser = async ({ code }: { code: string }) => {
    const { tokens } = await this.client.getToken(code)
    const googleUser = await axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`, {
        headers: {
          Authorization: `Bearer ${tokens.id_token}`,
        },
      })
      .then(({ data }: any) => {
        const user = {
          name: data.name,
          email: data.email,
        }
        return user
      })
      .catch((error) => {
        throw new Error(error.message)
      })

    return googleUser
  }
}

export default GoogleService
