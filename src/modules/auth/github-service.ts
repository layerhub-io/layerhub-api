import axios from "axios"

class GithubService {
  async getAccessToken(requestToken: string) {
    const clientID = "4dae9297c4e200fa6087"
    const clientSecret = "65c3eb1b729da1c23377bf092765e872252f548f"
    const { data } = await axios({
      method: "post",
      url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
      headers: {
        accept: "application/json",
      },
    })
    return (data as any).access_token
  }

  public getGithubUser = async ({ code }: { code: string }) => {
    const token = await this.getAccessToken(code)
    const { data: userInformation } = await axios({
      method: "get",
      url: `https://api.github.com/user`,
      headers: {
        Authorization: "token " + token,
      },
    })
    return userInformation
  }
}

export default GithubService
