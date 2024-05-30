/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { DataMateri, soalPretest } from '../../../interface/evaluasi/pretest.interface'
import { usePagination } from '../../materi/context/materiProvider'
import { soalPosttest } from '../../../interface/evaluasi/posttest.interface'
import { soalLogic } from '../../../interface/evaluasi/logical.interface'
import { penilaianMedia } from '../../../interface/evaluasi/media.interface'
import { useLocation } from 'react-router-dom'
import { HasilSoalType } from '../../../interface/materi/materi.interface'
import Lottie from 'lottie-react'
import animLoading from '../../../../_molekul/assets/loading/animLoading.json'
import { getProfileSiswa } from '../../../api/Request/profile.siswa.api'
import { CreateProfileSiswaType } from '../../../interface/profile.siswa.interface'

type Props = {
  className: string,
  hasilSoal: HasilSoalType[]
  setHasilSoal: (hasilSoal: HasilSoalType[]) => void,
  finalHasilSoal: HasilSoalType[]
  setFinalHasilSoal: (setFinalHasilSoal: HasilSoalType[]) => void,
  loading: boolean
  setLoading: (setLoading: boolean) => void
}

const Soal: React.FC<Props> = ({
  className,
  hasilSoal,
  finalHasilSoal,
  loading,
  setLoading
}) => {
  const [materi, setMateri] = useState<DataMateri[]>(soalPretest)
  const page = usePagination()
  const [materiParent, setMateriParent] = useState<string>("")
  // @ts-ignore
  const location = useLocation<data>()
  const [selectedOptions, setSelectedOptions] = useState<string>("");
  const [profile, setProfile] = useState<CreateProfileSiswaType>()

  useEffect(() => {
    //@ts-ignore
    if (location.state.uid) {
      //@ts-ignore
      handleGetProfile(location.state.uid ? location.state.uid : e.uid)
    }
  }, [profile])

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


  const handleGetProfile = async (uid: string | undefined) => {
    setLoading(true)
    if (uid) {
      const getIdPoin = await getProfileSiswa(uid)
      const la = Object.entries(getIdPoin)
      setProfile(la[0][1])
      // setLoading(false)
    }
  }


  const handleRadioChange = (index: number, value: HTMLInputElement["value"]) => {
    console.log(value);

    if (index >= 0 && value) {
      setSelectedOptions(value)
      const body: HasilSoalType = {
        name: materi[0].materi.isiMateri[page.currentPage - 1].judulMateri,
        jawaban: index,
        hasil: materi[0].materi.isiMateri[page.currentPage - 1].kunjawSoal === index,
        textJawaban: value
      }
      handlePushAndDeleteMood(body)
    }
  };

  const handlePushAndDeleteMood = (key: HasilSoalType) => {
    if (key) {
      const found = hasilSoal.find((obj) => {
        return obj.name === key.name
      })

      if (!found) {
        hasilSoal.push(key)
      } else {
        for (let i = 0; i < hasilSoal.length; i++) {
          if (hasilSoal[i].name === key.name) {
            hasilSoal.splice(i, 1, key)
          }
        }
      }
    }
  }

  const cekStatus = (nama: string) => {
    if (finalHasilSoal.length !== 0) {
      for (let i = 0; i < finalHasilSoal.length; i++) {
        if (finalHasilSoal[i].textJawaban === nama) {
          return true
          break
        }
      }
      return false
    } if (nama && hasilSoal) {
      for (let i = 0; i < hasilSoal.length; i++) {
        if (hasilSoal[i].textJawaban === nama) {
          return true
          break
        }
      }
      return false
    }
  }

  return (
    <div className={`pe-10 ${className}`}>
      {
        loading ? (
          <div className='d-flex'
            style={{ width: '100%', height: '100%', justifyContent: 'center', justifyItems: 'center' }}
          >
            <Lottie style={{ width: '55%', height: '55%' }} animationData={animLoading} />
          </div>
        ) :
          // materiParent === "preLogic" || materiParent === "postLogic" || materiParent === "penilaianMedia" ?
          //   <>
          //     {
          //       materi[0].materi.isiMateri.map((e, i) => {
          //         return (
          //           <div className='card shadow-sm p-7 mb-5'>
          //             <div className='d-flex mb-10'>
          //               <span className='me-5 fs-2'>{i + 1}.</span>
          //               <div dangerouslySetInnerHTML={{ __html: e.soal ? e.soal! : "" }} />
          //             </div>

          //             <div className='d-flex'>
          //               {
          //                 e.pilihanSoal?.map((_soal, j) => {
          //                   return (
          //                     <>
          //                       <div key={j} className={`form-check mb-5 ms-12 ${materiParent === "preLogic" || materiParent === "postLogic" || materiParent === "penilaianMedia" ? "me-20" : ""}`}>
          //                         <input
          //                           className="form-check-input"
          //                           type="radio"
          //                           name="flexRadioDefault"
          //                           id={`flexRadioDefault${j}`}
          //                           value={_soal}
          //                           checked={cekStatus(_soal)}
          //                           disabled={finalHasilSoal && finalHasilSoal.length !== 0 ? true : false}
          //                           onChange={(e) => handleRadioChange(j, e.target.value)}
          //                         />
          //                         <div className='mb-10'>
          //                           <div dangerouslySetInnerHTML={{ __html: _soal }} />
          //                         </div>
          //                       </div>
          //                     </>
          //                   )
          //                 })
          //               }
          //             </div>
          //           </div>
          //         )
          //       })
          //     }
          //   </>
          //   :

          profile && profile?.type.toLowerCase() === "guru"
            ?
            <>
              {
                <div>
                  {
                    <>
                      {
                        finalHasilSoal.length !== 0 && finalHasilSoal.map((e, i) => {
                          return (
                            e.name === materi[0].materi.isiMateri[i].judulMateri ?
                              <div className='card shadow-sm p-7 mb-5'>
                                <div className='d-flex mb-10'>
                                  <span className='me-5 fs-2'>{i + 1}.</span>
                                  <div dangerouslySetInnerHTML={{ __html: materi[0].materi.isiMateri[i].soal ? materi[0].materi.isiMateri[i].soal! : "" }} />
                                </div>
                                {
                                  materi[0].materi.isiMateri[i].pilihanSoal?.map((_soal, j) => {
                                    return (
                                      <>
                                        <div key={j} className="form-check mb-5">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id={`flexRadioDefault${j}`}
                                            value={_soal}
                                            checked={finalHasilSoal[j].textJawaban === _soal ? true : false}
                                            disabled={finalHasilSoal.length !== 0 ? true : false}
                                            onChange={(e) => handleRadioChange(j, e.target.value)}
                                          />
                                          <div className='mb-10'>
                                            <div dangerouslySetInnerHTML={{ __html: _soal ? _soal : "" }} />
                                          </div>
                                        </div>
                                      </>
                                    )
                                  })
                                }
                                {
                                  materiParent === "preLogic" || materiParent === "postLogic" || materiParent === "penilaianMedia" ?
                                    <></>
                                    :
                                    <div className=''>
                                      {
                                        e.hasil ?
                                          <span className='fs-1 fw-bold'>
                                            Jawaban Benar 😍
                                          </span>
                                          :
                                          <span className='fs-1 fw-bold'>
                                            Jawaban Salah 😢
                                          </span>
                                      }

                                    </div>
                                }

                              </div>
                              :
                              <></>
                          )
                        })
                      }
                    </>
                  }
                </div>
              }
            </>
            :
            <>
              <div className='mb-10'>
                <div dangerouslySetInnerHTML={{ __html: materi[0].materi.isiMateri[page.currentPage - 1].soal ? materi[0].materi.isiMateri[page.currentPage - 1].soal! : "" }} />
              </div>
              {
                <div>
                  {
                    finalHasilSoal && finalHasilSoal.length !== 0 ?
                      <>
                        {
                          finalHasilSoal.map((e, i) => {
                            return (
                              e.name === materi[0].materi.isiMateri[page.currentPage - 1].judulMateri ?
                                <>
                                  {
                                    materi[0].materi.isiMateri[page.currentPage - 1].pilihanSoal?.map((_soal, i) => {
                                      return (
                                        <>
                                          <div key={i} className="form-check mb-5">
                                            <input
                                              className="form-check-input"
                                              type="radio"
                                              name="flexRadioDefault"
                                              id={`flexRadioDefault${i}`}
                                              value={_soal}
                                              checked={cekStatus(_soal)}
                                              disabled={finalHasilSoal.length !== 0 ? true : false}
                                              onChange={(e) => handleRadioChange(i, e.target.value)}
                                            />
                                            <div className='mb-10'>
                                              <div dangerouslySetInnerHTML={{ __html: _soal ? _soal : "" }} />
                                            </div>
                                          </div>
                                        </>
                                      )
                                    })
                                  }
                                  {
                                    materiParent === "preLogic" || materiParent === "postLogic" || materiParent === "penilaianMedia" ?
                                      <></>
                                      :
                                      <div className='mt-20'>
                                        {
                                          e.hasil ?
                                            <span className='fs-1 fw-bold'>
                                              Keren! Jawaban Kamu Benar 😍
                                            </span>
                                            :
                                            <span className='fs-1 fw-bold'>
                                              Yah, Jawaban Kamu Salah Nih 😢
                                            </span>
                                        }

                                      </div>
                                  }

                                </>
                                :
                                <></>
                            )
                          })
                        }
                      </>
                      :
                      <>
                        {
                          materi[0].materi.isiMateri[page.currentPage - 1].pilihanSoal?.map((_soal, i) => {
                            return (
                              <>
                                <div key={i} className="form-check mb-5">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id={`flexRadioDefault${i}`}
                                    value={_soal}
                                    checked={cekStatus(_soal)}
                                    disabled={finalHasilSoal && finalHasilSoal.length !== 0 ? true : false}
                                    onChange={(e) => handleRadioChange(i, e.target.value)}
                                  />
                                  <div className='mb-10'>
                                    <div dangerouslySetInnerHTML={{ __html: _soal }} />
                                  </div>
                                </div>
                              </>
                            )
                          })
                        }
                      </>
                  }
                </div>
              }
            </>
      }
    </div>
  )
}

export { Soal }
