export interface ListAbsenSiswaType {
  name: string,
  hadir: number,
  izin: number,
  sakit: number
}

export interface AbsenType {
  date: string,
  day: string
  absensiSiswa: ListAbsenSiswaType[]
}

export interface AbsenForSiswaType {
  absensiSiswa: ListAbsenSiswaType[]
}

export interface CreateAbsenTypeResponse {
  name: string
}

export interface ListAbsenType {
  absen: AbsenType[]
}