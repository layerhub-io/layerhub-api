import { Request } from "express"

// Facebook, google, github
export interface SocialAuth {
  clientId: string
  clientSecret: string
  redirectUrl: string
}

export interface AppConfig {
  proxyBase: string
  cdnBase: string
  authRedirectUrl: string
  googleAuth: SocialAuth
  facebookAuth: SocialAuth
  iconscout: {
    clientId: string
    secret: string
  }
  pixabay: {
    apiKey: string
  }
  pexels: {
    apiKey: string
  }
  mongo: {
    connString: string
    name: string
  }
  aws: {
    bucket: string
    credentials: {
      accessKeyId: string
      secretAccessKey: string
    }
  }
  appPort: number
  appHost: string
}

export interface Template {
  id: string
  name: string
  frame: Frame
  objects: any[]
  background: {
    type: string
    value: string
  }
  preview: string
}

interface Frame {
  width: number
  height: number
}

interface BaseOptions {
  id: string
  name: string
  top: number
  left: number
  angle: number
  width: number
  height: number
  originX: string
  originY: string
  scaleX: number
  scaleY: number
  fill: string
}

interface TextMetadata {
  textAlign: string
  fontFamily: string
  fontSize: number
  fontWeight: string
  charspacing: number
  lineheight: number
  value: string
}

interface ImageMetadata {
  value: string
}

interface PathMetadata {
  value: number[][]
}

export interface ShapeTemplate<T> extends BaseOptions {
  metadata: T
}

export type TextShape = ShapeTemplate<TextMetadata>
export type ImageShape = ShapeTemplate<ImageMetadata>
export type PathShape = ShapeTemplate<PathMetadata>
export type ShapeType = TextShape | ImageShape | PathShape

// HTTP Interfaces

export type HTTPRequest<T, V> = Request & {
  body: T
  query: V
}
