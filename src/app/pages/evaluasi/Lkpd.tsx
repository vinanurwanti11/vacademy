/* eslint-disable jsx-a11y/anchor-is-valid */
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getProfileSiswa } from '../../api/Request/profile.siswa.api'

const Lkpd: FC = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const [uuid, setUuid] = useState<string>()
  //@ts-ignore
  const location = useLocation<data>()
  const [page, setPage] = useState<string>("")
  const [noAbsen, setNoAbsen] = useState<string>("")
  const [ke, setKe] = useState<string>("")

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      //@ts-ignore
      setPage(location.state.page)
      //@ts-ignore
      setKe(location.state.ke)
      setUuid(e?.uid)
      handleGetProfile(e?.uid)
    })
  }, [page, noAbsen, ke])

  const handleGetProfile = async (uid: string | undefined) => {
    try {
      if (uid) {
        const resGetPertanyaan = await getProfileSiswa(uid)
        const output = Object.entries(resGetPertanyaan)
        output.map(e => {
          // @ts-ignore
          setNoAbsen(e[1].nomor_absen.toString())
        });
      }

    } catch (error) {
      console.error(error);
    }
  }

  const handleNavigate = () => {
    const queryString = new URLSearchParams(ke).toString();
    const url = `/evaluasi/siswa/${ke}`
    window.open(url, '_blank');
  }

  console.log(page);


  return (
    <div className='d-flex flex-column flex-lg-row rounded pt-2' style={{ justifyContent: 'center', alignContent: 'center' }}>
      <div className="card col-xl-4 rounded shadow-sm mb-1 me-5"
      // style={{ width: '25%', height: '100%', cursor: 'pointer' }}
      >
        <span className='fw-bold p-3 ms-7 mt-2' style={{ fontSize: '20px' }}> Catatan :</span>
        <div className="card-body ms-1 mt-1 overflow-auto" style={{ maxHeight: '580px', maxWidth: '100%' }}>
          <div className=''>
            <span style={{ fontSize: '20px', textAlign: "justify" }} className='text-dark'>Setelah berdiskusi dengan teman kelompok, masukkan jawaban menggunakan kata-kata sendiri di sini ya!</span>
          </div>
        </div>
      </div>

      <div className="card col-xl-8 rounded shadow-sm p-2"
      // style={{ width: '25%', height: '180px', cursor: 'pointer' }}
      >
        <iframe width="100%" height="620" src={`https://dzik.my.id:9001/p/${noAbsen}`} title="Forum Diskusi" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; camera https://dzik.my.id:9001; microphone https://dzik.my.id:9001" allowFullScreen></iframe>
      </div>
    </div >
  )
}

export default Lkpd
