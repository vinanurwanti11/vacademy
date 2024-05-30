import { CreateProfileSiswaType, ProfileSiswaTypeResponse } from '../../interface/profile.siswa.interface';
import BaseApi, { authKey } from '../BaseApi';

export const getProfileSiswa = async (uid: string): Promise<CreateProfileSiswaType[]> => {
  const { data } = await BaseApi().request<CreateProfileSiswaType[]>({
    url: `users/siswa/${uid}.json?auth=${authKey}`,
    method: 'GET',
  });

  return data;
};

export const createProfileSiswa = async (uid: string, props: CreateProfileSiswaType): Promise<any> => {
  const { data } = await BaseApi().request<any>({
    url: `users/siswa/${uid}.json?auth=${authKey}`,
    method: 'POST',
    data: props
  })

  return data
}


export const getAllSiswa = async (): Promise<CreateProfileSiswaType[][]> => {
  const { data } = await BaseApi().request<CreateProfileSiswaType[][]>({
    url: `users/siswa.json?auth=${authKey}`,
    method: 'GET',
  });

  return data;
};