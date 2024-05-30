import { ArrayCreateMateri, CreateMateriTypeResponse, DetailMateriTypeResponse, HasilSoalType, IsEvaluasiTypeResponse, PertanyaanType, PertanyaanTypeResponse, UpdateRangkumanTypeResponse, UpdateSteptypeResponse } from '../../interface/materi/materi.interface';
import BaseApi, { authKey } from '../BaseApi';

export const getMateriSiswaByUID = async (uid: string): Promise<DetailMateriTypeResponse[]> => {
  const { data } = await BaseApi().request<DetailMateriTypeResponse[]>({
    url: `materi/${uid}.json?auth=${authKey}`,
    method: 'GET',
  })

  return data
}

export const getListAllMateri = async (): Promise<DetailMateriTypeResponse[][]> => {
  const { data } = await BaseApi().request<DetailMateriTypeResponse[][]>({
    url: `materi.json?auth=${authKey}`,
    method: 'GET',
  })

  return data
}

export const createDetailMateriByUID = async (uid: string, props: DetailMateriTypeResponse): Promise<CreateMateriTypeResponse> => {
  const { data } = await BaseApi().request<CreateMateriTypeResponse>({
    url: `materi/${uid}.json?auth=${authKey}`,
    method: 'POST',
    data: props
  })

  return data
}

export const getDetailMateriSiswaByID = async (uid: string, id: string): Promise<DetailMateriTypeResponse> => {
  const { data } = await BaseApi().request<DetailMateriTypeResponse>({
    url: `materi/${uid}/${id}.json?auth=${authKey}`,
    method: 'GET',
  })

  return data
}

export const updateStep = async (uid: string, id: string, step: number): Promise<UpdateSteptypeResponse> => {
  const { data } = await BaseApi().request<UpdateSteptypeResponse>({
    url: `materi/${uid}/${id}.json?auth=${authKey}`,
    method: 'PATCH',
    data: { step }
  })

  return data
}

export const updateRangkuman = async (uid: string, id: string, rangkuman: string): Promise<UpdateRangkumanTypeResponse> => {
  const { data } = await BaseApi().request<UpdateRangkumanTypeResponse>({
    url: `materi/${uid}/${id}.json?auth=${authKey}`,
    method: 'PATCH',
    data: { rangkuman }
  })

  return data
}

export const sendPertanyaan = async (kel: string, pertanyaan: PertanyaanType): Promise<any> => {
  const { data } = await BaseApi().request<any>({
    url: `/pertanyaanSiswa/${kel}.json?auth=${authKey}`,
    method: 'POST',
    data: { pertanyaan }
  })

  return data
}

export const sendPertanyaanToRoom = async (room: string, pertanyaan: PertanyaanType): Promise<any> => {
  const { data } = await BaseApi().request<any>({
    url: `/pertanyaanSiswa/${room}.json?auth=${authKey}`,
    method: 'POST',
    data: { pertanyaan }
  })

  return data
}

export const updatePertanyaan = async (kel: string, id: string, pertanyaan: PertanyaanType[]): Promise<PertanyaanType[]> => {
  const { data } = await BaseApi().request<PertanyaanType[]>({
    url: `/pertanyaanSiswa/${kel}/${id}.json?auth=${authKey}`,
    method: 'PATCH',
    data: { pertanyaan }
  })

  return data
}

export const getPertanyaan = async (kel: string): Promise<PertanyaanTypeResponse[]> => {
  const { data } = await BaseApi().request<PertanyaanTypeResponse[]>({
    url: `/pertanyaanSiswa/${kel}.json?auth=${authKey}`,
    method: 'GET',
  })

  return data
}

export const deletePertanyaan = async (kel: string, id: string): Promise<PertanyaanTypeResponse[]> => {
  const { data } = await BaseApi().request<PertanyaanTypeResponse[]>({
    url: `/pertanyaanSiswa/${kel}/${id}.json?auth=${authKey}`,
    method: 'DELETE',
  })

  return data
}

export const updateFinishModul = async (uid: string, id: string, status: string): Promise<DetailMateriTypeResponse> => {
  const { data } = await BaseApi().request<DetailMateriTypeResponse>({
    url: `materi/${uid}/${id}.json?auth=${authKey}`,
    method: 'PATCH',
    data: { status }
  })
  return data
}

export const updateSoal = async (uid: string, id: string, latihan: HasilSoalType[]): Promise<HasilSoalType> => {
  const { data } = await BaseApi().request<HasilSoalType>({
    url: `materi/${uid}/${id}.json?auth=${authKey}`,
    method: 'PATCH',
    data: { latihan }
  })
  return data
}

export const isEvaluasi = async (): Promise<IsEvaluasiTypeResponse> => {
  const { data } = await BaseApi().request<IsEvaluasiTypeResponse>({
    url: `evaluasi.json?auth=${authKey}`,
    method: 'GET',
  })
  return data
}