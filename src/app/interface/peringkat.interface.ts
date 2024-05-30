import { DetailMateriTypeResponse } from "./materi/materi.interface"

export interface CreatePeringkatType {
  fullname: string,
  email: string,
  nomorAbsen: string,
  poin: number
  image_profile: string
  type: string
  progressMateri: number
}

export interface ProgressMateri {
  fullname: string,
  email: string,
  nomorAbsen: string,
  poin: number
  image_profile: string
  type: string
  materi: DetailMateriTypeResponse[]
}