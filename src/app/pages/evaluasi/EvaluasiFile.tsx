/* eslint-disable jsx-a11y/anchor-is-valid */
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getProfileSiswa } from '../../api/Request/profile.siswa.api'
import Lottie from 'lottie-react'
import animLoading from '../../../_molekul/assets/loading/animLoading.json'

const EvaluasiFile: FC = () => {
  const auth = getAuth()
  const [uuid, setUuid] = useState<string>()
  //@ts-ignore
  const location = useLocation<data>()
  const [page, setPage] = useState<string>("")
  const [noAbsen, setNoAbsen] = useState<string>("")
  const [absen, setAbsen] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [ke, setKe] = useState<string>("")

  useEffect(() => {
    //@ts-ignore
    if (location.state.noAbsen) {
      //@ts-ignore
      setNoAbsen(location.state.noAbsen)
    }
    //@ts-ignore
    setKe(location.state.ke)
    onAuthStateChanged(auth, e => {
      setUuid(e?.uid)
      handleGetProfile(e?.uid)
    })
  }, [page, noAbsen])


  const handleGetProfile = async (uid: string | undefined) => {
    try {
      if (uid) {
        const resGetPertanyaan = await getProfileSiswa(uid)
        const output = Object.entries(resGetPertanyaan)
        if (output[1][1].type.toLowerCase() === "siswa") {
          setAbsen(output[1][1].nomor_absen.toString())
          console.log(output[1][1].nomor_absen.toString());
          setLoading(false)
        } else {
          setLoading(false)
        }
      }
    } catch (error) {
      setLoading(false)
    }
  }


  return (
    <>
      {
        loading ? (
          <div className='d-flex'
            style={{ width: '100%', height: '100%', justifyContent: 'center', justifyItems: 'center' }}
          >
            <Lottie style={{ width: '55%', height: '55%' }} animationData={animLoading} />
          </div>
        ) : (
          <div className='d-flex flex-column flex-lg-row rounded pt-2 shadow-sm p-2' style={{ justifyContent: 'center', alignContent: 'center' }}>
            <iframe width="100%" height="620" src={`https://dzik.my.id:9001/p/${noAbsen}`} title="Forum Diskusi" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; camera https://dzik.my.id:9001; microphone https://dzik.my.id:9001" allowFullScreen></iframe>
          </div >
        )
      }
    </>

  )

}

export default EvaluasiFile
