import { BodySendEvaluasi, HasilSoalType } from '../../interface/materi/materi.interface';
import BaseApi, { authKey } from '../BaseApi';

export const sendEvaluasi = async (path: string, uid: string, props: BodySendEvaluasi): Promise<HasilSoalType> => {
  const { data } = await BaseApi().request<HasilSoalType>({
    url: `evaluasi/${path}/${uid}.json?auth=${authKey}`,
    method: 'POST',
    data: props
  })
  return data
}

export const getEvaluasiByUUID = async (path: string, uid: string): Promise<BodySendEvaluasi[]> => {
  const { data } = await BaseApi().request<BodySendEvaluasi[]>({
    url: `evaluasi/${path}/${uid}.json?auth=${authKey}`,
    method: 'GET',
  })

  return data
}