import AWS from "aws-sdk"
import config from "../common/app-config"
import mime from "mime/lite"
import { uniqueFilename } from "../utils/unique"

class AWSService {
  client: AWS.S3

  constructor() {
    this.init()
  }

  uploadBase64Image = async ({ image }: { image: string }) => {
    const buffer = Buffer.from(image.replace(/^data:image\/\w+;base64,/, ""), "base64")
    const key = uniqueFilename("champ.png")
    const contentType = mime.getType(key) as string

    const params = {
      Bucket: config.aws.bucket,
      Key: key,
      Body: buffer,
      ContentType: contentType,
      ContentEncoding: "base64",
    }
    const url = await new Promise((resolve, reject) => {
      this.client.putObject(params, (err) => {
        if (err) reject(err)
        resolve(config.cdnBase + key)
      })
    })
    return url
  }

  getSignedUrlForDownload = async ({ fileName }: { fileName: string }) => {
    const { aws } = config
    const params = {
      Bucket: aws.bucket,
      Key: fileName,
      Expires: 60,
    }

    const url = await new Promise((resolve, reject) => {
      this.client.getSignedUrl("getObject", params, (err, url) => {
        if (err) reject(err)
        resolve(url)
      })
    })
    return url
  }

  getSignedUrlForUpload = async ({ fileName }: { fileName: string }) => {
    const { aws } = config
    const contentType = mime.getType(fileName) as string

    const params = {
      Bucket: aws.bucket,
      Key: fileName,
      Expires: 60,
      ContentType: contentType,
    }

    const url = await new Promise((resolve, reject) => {
      this.client.getSignedUrl("putObject", params, (err, url) => {
        if (err) reject(err)

        resolve(url)
      })
    })

    return url
  }

  init = () => {
    const { aws } = config
    AWS.config.update({
      accessKeyId: aws.credentials.accessKeyId,
      secretAccessKey: aws.credentials.secretAccessKey,
      region: "us-east-1",
    })
    this.client = new AWS.S3()
  }
}

export default new AWSService()
