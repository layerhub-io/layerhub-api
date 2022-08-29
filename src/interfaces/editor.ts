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

interface ShapeBaseOptions {
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

export interface ShapeTemplate<T> extends ShapeBaseOptions {
  metadata: T
}

export type TextShape = ShapeTemplate<TextMetadata>
export type ImageShape = ShapeTemplate<ImageMetadata>
export type PathShape = ShapeTemplate<PathMetadata>
export type ShapeType = TextShape | ImageShape | PathShape

type FontVariant = "300" | "regular" | "400" | "500" | "600" | "700" | "800"

type FontFile = Record<FontVariant, string>
export interface FontFamily {
  id: string
  family: string
  variants: FontVariant[]
  fontFiles: FontFile[]
  subsets: string[]
  version: string
  lastModified: string
  category: string
  kind: string
}
