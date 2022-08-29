import { Template } from "../interfaces/app"

export interface CreateTemplateDto {
  template: Template
}

export interface UpdateTempalteDto {
  id: string
  template: Template
}

export interface DeleteTempalteDto {
  id: string
}

export interface GetempalteDto {
  id: string
}
