import { AbsenForSiswaType, AbsenType, CreateAbsenTypeResponse, ListAbsenType } from "../../interface/absen.interface"
import BaseApi, { authKey } from "../BaseApi"

export const getAbsenSiswaForGuru = async (): Promise<ListAbsenType> => {
  const { data } = await BaseApi().request<ListAbsenType>({
    url: `absen.json?auth=${authKey}`,
    method: 'GET',
  })

  return data
}

export const getAbsenSiswaForSiswa = async (): Promise<AbsenForSiswaType> => {
  const { data } = await BaseApi().request<AbsenForSiswaType>({
    url: `absen.json?auth=${authKey}`,
    method: 'GET',
  })

  return data
}

export const createAbsenSiswaForGuru = async (props: ListAbsenType): Promise<CreateAbsenTypeResponse> => {
  const { data } = await BaseApi().request<CreateAbsenTypeResponse>({
    url: `absen.json?auth=${authKey}`,
    method: 'POST',
    data: props
  })

  return data
}

export const createAbsenSiswaForSiswa = async (props: AbsenForSiswaType): Promise<CreateAbsenTypeResponse> => {
  const { data } = await BaseApi().request<CreateAbsenTypeResponse>({
    url: `absenSiswa.json?auth=${authKey}`,
    method: 'POST',
    data: props
  })

  return data
}