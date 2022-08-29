import axios from "axios"
import appConfig from "../../common/app-config"

interface AuthProps {
  code: string
  action: string
}
class FacebookService {
  private getAccessToken = async ({ code, action }: AuthProps) => {
    try {
      const { data } = await axios({
        url: "https://graph.facebook.com/v12.0/oauth/access_token",
        method: "get",
        params: {
          client_id: appConfig.facebookAuth.clientId,
          client_secret: appConfig.facebookAuth.clientSecret,
          redirect_uri: `${appConfig.facebookAuth.redirectUrl}?action=${action}`,
          code,
        },
      })
      return (data as any).access_token
    } catch (err) {
      throw Error("INVALID TOKEN")
    }
  }

  public getFacebookAuthURL = ({ action }: { action: string }) => {
    const appId = 1006547879906909
    const redirectURL = `${appConfig.facebookAuth.redirectUrl}?action=${action}`
    const url = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${appId}&scope=email&redirect_uri=${encodeURIComponent(
      redirectURL
    )}`
    return url
  }

  public getFacebookUser = async (props: AuthProps) => {
    try {
      const token = await this.getAccessToken(props)
      const { data } = (await axios({
        url: "https://graph.facebook.com/me",
        method: "get",
        params: {
          fields: ["id", "email", "first_name", "last_name", "picture"].join(","),
          access_token: token,
        },
      })) as any
      const user = {
        name: `${data.first_name} ${data.last_name}`,
        email: data.email,
      }
      return user
    } catch (err) {
      throw Error("INVALID TOKEN")
    }
  }
}

export default FacebookService
