import React, { useEffect, useState } from 'react'
import { Soal } from './components/Soal'
import { Footer } from './components/Footer'
import { usePagination } from '../materi/context/materiProvider'
import { DataMateri, soalPretest } from '../../interface/evaluasi/pretest.interface'
import { useLocation } from 'react-router-dom'
import { soalPosttest } from '../../interface/evaluasi/posttest.interface'
import { soalLogic } from '../../interface/evaluasi/logical.interface'
import { penilaianMedia } from '../../interface/evaluasi/media.interface'
import { BodySendEvaluasi, HasilEvaluasiType, HasilSoalType } from '../../interface/materi/materi.interface'
import { getEvaluasiByUUID } from '../../api/Request/evaluasi.siswa.api'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Lottie from 'lottie-react'
import animLoading from '../../../_molekul/assets/loading/animLoading.json'

const DetailEvaluasi = () => {
  const [materi, setMateri] = useState<DataMateri[]>(soalPretest)
  const page = usePagination()
  const [materiParent, setMateriParent] = useState<string>("")
  // @ts-ignore
  const location = useLocation<data>()
  const [hasilSoal, setHasilSoal] = useState<HasilSoalType[]>([])
  const [finalHasilSoal, setFinalHasilSoal] = useState<HasilSoalType[]>([])
  const [uuid, setUuid] = useState<string | undefined>("")
  const auth = getAuth()
  const [loading, setLoading] = useState<boolean>(false)


  useEffect(() => {
    //@ts-ignore
    onAuthStateChanged(auth, e => {
      //@ts-ignore
      if (e?.uid || location.state.uid) {
        setLoading(true)
        setUuid(e?.uid)
        //@ts-ignore
        handleGetDetailMateri(location.state.uid ? location.state.uid : e.uid)
      }
    })
  }, [uuid])

  useEffect(() => {
    // @ts-ignore
    setMateriParent(location.state.materiParent)
    if (materiParent) {
      if (materiParent === "pretest") {
        setMateri(soalPretest)
      } else if (materiParent === "posttest") {
        setMateri(soalPosttest)
      } else if (materiParent === "preLogic") {
        setMateri(soalLogic)
      } else if (materiParent === "postLogic") {
        setMateri(soalLogic)
      } else if (materiParent === "penilaianMedia") {
        setMateri(penilaianMedia)
      }
    }
  }, [materiParent, materi])

  const handleGetDetailMateri = async (uid: string) => {
    try {
      if (uid) {
        const res = await getEvaluasiByUUID(materiParent, uid)
        const ha = Object.entries(res);
        // if (res) {
        setFinalHasilSoal(ha[0][1].hasilSoal)
        setLoading(false)
        // }
      }
    } catch (error) {
      setLoading(false)
    }
  }


  return (
    <div className='row p-0'>
      {
        loading ? (
          <div className='d-flex'
            style={{ width: '100%', height: '100%', justifyContent: 'center', justifyItems: 'center' }}
          >
            <Lottie style={{ width: '55%', height: '55%' }} animationData={animLoading} />
          </div>
        ) :
          <>
            <div style={{ justifyContent: "space-between" }} className='d-flex row'>
              <div style={{ maxWidth: "85%" }} id="materi" className={`${materiParent === "preLogic" || materiParent === "postLogic" || materiParent === "penilaianMedia" ? "col-xl-10 card-header" : "col-xl-10 card-header"}`}>
                {/* <h1>Tujuan Pembelajaran</h1> */}
                <Soal
                  hasilSoal={hasilSoal}
                  setHasilSoal={setHasilSoal}
                  finalHasilSoal={finalHasilSoal}
                  setFinalHasilSoal={setFinalHasilSoal}
                  loading={loading}
                  setLoading={setLoading}
                  className='card-xxl-stretch mb-xl-3' />
              </div>
              {
                // materiParent === "preLogic" || materiParent === "postLogic" || materiParent === "penilaianMedia" ?
                //   // <div id="progress" className='card shadow-sm col-xxl-2 position-fixed mb-xl-3 border border-secondary border-2 rounded'
                //   //   style={{ right: '30px', maxHeight: '25%', height: '15%' }}>
                //   //   {/* begin::Header */}
                //   //   <div className='d-flex border-0 mb-5 mt-5' style={{ justifyContent: 'center', alignItems: 'center' }}>
                //   //     <span className='fw-bolder text-dark'></span>
                //   //   </div>
                //   //   {/* end::Header */}
                //   // </div>
                //   <></>
                //   :
                <div id="progress" className='position-fixed mb-xl-3 border border-secondary border-2 rounded'
                  style={{ right: '30px', maxHeight: '15%', height: '15%', maxWidth: "15%" }}>
                  {/* begin::Header */}
                  <div className='d-flex border-0 mb-5 mt-5' style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <span className='fw-bolder text-dark display-1' style={{ textAlign: 'center' }}>{page.currentPage}/{materi[0].materi.isiMateri.length}</span>
                  </div>
                  {/* end::Header */}
                </div>
              }
            </div>
            {
              // materiParent === "preLogic" || materiParent === "postLogic" || materiParent === "penilaianMedia" ?
              //   <div className='d-flex pe-10 mt-10' style={{ justifyContent: 'end' }}>
              //     <div className='btn btn-primary w-25'>
              //       <span style={{ textAlign: 'center' }}>Kirim Jawaban</span>
              //     </div>
              //   </div>
              //   :
              <Footer
                hasilSoal={hasilSoal}
                setHasilSoal={setHasilSoal}
                finalHasilSoal={finalHasilSoal}
                setFinalHasilSoal={setFinalHasilSoal}
              />
            }
          </>
      }
    </div>
  )
}

export default DetailEvaluasi