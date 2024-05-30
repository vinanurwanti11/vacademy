export interface ProfileSiswaTypeResponse {
  materi: number
  name: string
  nomor_absen: string
  post_test: number
  pre_test: number
  submateri: number
  type: string
  kelompok: string
}

export interface CreateProfileSiswaType {
  name: string
  nomor_absen: string
  email: string
  imageProfile: string
  type: string
  kelompok: string
}

export interface ProfileSiswaType {
  name: string
  nomor_absen: string
  email: string
  imageProfile: string
  type: string
  kelompok: string
  uid: string
}


