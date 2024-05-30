/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDetailPeringkatSiswaByUID } from '../../../api/Request/peringkat.siswa.api';

type Props = {
  className: string;
};

const ListsWidget1: React.FC<Props> = ({ className }) => {
  const [poin, setPoin] = useState<number>(0)
  const [uuid, setUuid] = useState<string | undefined>("")
  const auth = getAuth()

  useEffect(() => {
    //@ts-ignore
    onAuthStateChanged(auth, e => {
      handleGetPoin(e?.uid)
      setUuid(e?.uid)
    })
  }, [uuid])

  const handleGetPoin = async (uid: string | undefined) => {
    if (uid) {
      const getIdPoin = await getDetailPeringkatSiswaByUID(uid)
      const la = Object.entries(getIdPoin)
      setPoin(la[0][1].poin)
    }
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-dark'>Poin Kamu</span>
        </h3>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body d-flex' style={{ justifyContent: 'center' }}>
        <ProgressBar percentage={100} title={`${poin / 10}`} size={250} strokeWidth={25} />
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ListsWidget1 };
