import { CreatePeringkatType } from '../../interface/peringkat.interface';
import BaseApi, { authKey } from '../BaseApi';

export const createPeringkatByUID = async (uid: string, props: CreatePeringkatType): Promise<CreatePeringkatType> => {
  const { data } = await BaseApi().request<CreatePeringkatType>({
    url: `peringkat/${uid}.json?auth=${authKey}`,
    method: 'POST',
    data: props
  })

  return data
}

export const getDetailPeringkatSiswaByUID = async (uid: string): Promise<CreatePeringkatType> => {
  const { data } = await BaseApi().request<CreatePeringkatType>({
    url: `peringkat/${uid}.json?auth=${authKey}`,
    method: 'GET',
  })

  return data
}

export const getDetailPeringkatSiswaByID = async (uid: string, id: string): Promise<CreatePeringkatType> => {
  const { data } = await BaseApi().request<CreatePeringkatType>({
    url: `peringkat/${uid}/${id}.json?auth=${authKey}`,
    method: 'GET',
  })

  return data
}

export const updatePoinByUD = async (uid: string, id: string, poin: number): Promise<CreatePeringkatType> => {
  const { data } = await BaseApi().request<CreatePeringkatType>({
    url: `peringkat/${uid}/${id}.json?auth=${authKey}`,
    method: 'PATCH',
    data: { poin }
  })

  return data
}

export const updateProgresByUD = async (uid: string, id: string, progressMateri: number): Promise<CreatePeringkatType> => {
  const { data } = await BaseApi().request<CreatePeringkatType>({
    url: `peringkat/${uid}/${id}.json?auth=${authKey}`,
    method: 'PATCH',
    data: { progressMateri }
  })

  return data
}

export const getAllPeringkatSiswa = async (): Promise<CreatePeringkatType[][]> => {
  const { data } = await BaseApi().request<CreatePeringkatType[][]>({
    url: `peringkat.json?auth=${authKey}`,
    method: 'GET',
  })
  return data
}