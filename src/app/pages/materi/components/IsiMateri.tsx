/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { usePagination } from '../context/materiProvider'
import { DataMateri, DetailMateriTypeResponse, HasilSoalType, PertanyaanType, materiCase, materiIfElse, materiIfThen, materiNestedIf, materiOperator } from '../../../interface/materi/materi.interface'
import { useTitleModul } from '../context/titleModulProvider'
import { KTSVG, toAbsoluteUrl } from '../../../../_molekul/helpers'
import Lottie from 'lottie-react'
import animLoading from '../../../../_molekul/assets/loading/animLoading.json'
import { useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { getProfileSiswa } from '../../../api/Request/profile.siswa.api'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { CreateProfileSiswaType } from '../../../interface/profile.siswa.interface'
import { getDetailMateriSiswaByID, getPertanyaan, sendPertanyaan, updateFinishModul, updatePertanyaan } from '../../../api/Request/materi.siswa.api'
import Swal from 'sweetalert2'
import { getDetailPeringkatSiswaByUID, updateProgresByUD } from '../../../api/Request/peringkat.siswa.api'

type Props = {
  className: string,
  setRangkuman: (rangkuman: string) => void,
  rangkuman: string,
  resRangkuman: string,
  hasilSoal: HasilSoalType[]
  setHasilSoal: (hasilSoal: HasilSoalType[]) => void,
  finalHasilSoal: HasilSoalType[]
  detailMateri?: DetailMateriTypeResponse
  isLoading?: boolean,
  setPertanyaan: (pertanyaan: PertanyaanType[]) => void,
  pertanyaan: PertanyaanType[]
}

const IsiMateri: React.FC<Props> = ({
  className,
  isLoading,
  setRangkuman,
  rangkuman,
  resRangkuman,
  hasilSoal,
  setHasilSoal,
  finalHasilSoal,
  detailMateri,
  setPertanyaan,
  pertanyaan }) => {
  const page = usePagination()
  const navigate = useNavigate()
  const currentPageTitleModul = useTitleModul()
  const [materi, setMateri] = useState<DataMateri[]>(materiOperator)
  const [materiParent, setMateriParent] = useState<string>("")
  // @ts-ignore
  const location = useLocation<data>()
  const [selectedOptions, setSelectedOptions] = useState<string>("");
  const [newPertanyaan, setNewPertanyaan] = useState<string>('')
  const [profileSiswa, setProfileSiswa] = useState<CreateProfileSiswaType>()
  const [idMateri, setIdMateri] = useState<string>("")
  const auth = getAuth()
  const [uuid, setUuid] = useState<string | undefined>("")

  useEffect(() => {
    //@ts-ignore
    setIdMateri(location.state.idMateri)
    onAuthStateChanged(auth, e => {
      handleGetProfile(e?.uid)
      setUuid(e?.uid)
    })
  }, [uuid])

  const handleGetProfile = async (uid: string | undefined) => {
    try {
      if (uid) {
        const ress = await getProfileSiswa(uid)
        const output = Object.entries(ress)
        output.map(e => {
          //@ts-ignore
          setProfileSiswa(e[1])
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // @ts-ignore
    setMateriParent(location.state.materiParent)
    if (materiParent) {
      if (materiParent === "m-k-a") {
        setMateri(materiOperator)
      } else if (materiParent === "m-k-b") {
        setMateri(materiIfThen)
      } else if (materiParent === "m-k-c") {
        setMateri(materiIfElse)
      } else if (materiParent === "m-k-d") {
        setMateri(materiCase)
      } else if (materiParent === "m-k-e") {
        setMateri(materiNestedIf)
      }
    }

    // if (detailMateri?.step === 1 && materiParent === "m-k-a") {
    //   const swalSuccess = Swal.mixin({
    //     customClass: {
    //       confirmButton: 'btn btn-success',
    //     },
    //     buttonsStyling: false
    //   })
    //   const title = `Selamat datang di pembelajaran menggunakan Model Reciprocal Teaching, Jika kalian merasa kesulitan dalam memahami materi kalian bisa mengirimkan pertanyaan yang ada di halaman paling bawah di setiap materinya dan terkait pertanyaan kalian nantinya akan di bahas di forum kelompok kalian. <br/><br/><p style="font-size: 16px; text-align: center;">Semangat Balajar💪</p>`
    //   swalSuccess.fire({
    //     title: `Hallo, Selamat Datang!`,
    //     html: `<p style="font-size: 16px; text-align: justify;">${title}</p>`,
    //     icon: 'success',
    //     confirmButtonText: 'Semangat!',
    //   })
    // }
  }, [materiParent, materi])

  useEffect(() => {
    if (materi[currentPageTitleModul.currentPageTitleModul - 1].materi.isiMateri[page.currentPage - 1].type !== "rangkuman") {
      window.scrollTo(0, 0);
    }
  }, [page]);

  const handleRadioChange = (index: number, value: HTMLInputElement["value"]) => {
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
    if (finalHasilSoal) {
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

  const handleSendPertanyaan = async (list: PertanyaanType) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-white'
      },
      buttonsStyling: false
    })
    const swalSuccess = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: `Kirimkan Jawaban kamu?`,
      icon: 'info',
      showCancelButton: true,
      cancelButtonText: 'Batalkan',
      confirmButtonText: 'Kirim!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          if (list && profileSiswa && uuid) {
            const resSendPertanyaan = await sendPertanyaan(profileSiswa?.kelompok, list)
            const res = await updateFinishModul(uuid, idMateri, "Selesai")
            const getIdPoin = await getDetailPeringkatSiswaByUID(uuid)
            const la = Object.entries(getIdPoin)
            let progressMateri = la[0][1].progressMateri
            const resUpdateProgress = await updateProgresByUD(uuid, la[0][0], progressMateri + 1)
            if (resSendPertanyaan) {
              swalSuccess.fire({
                title: `Jawaban Berhasil Dikirim`,
                icon: 'success',
                confirmButtonText: 'Dismiss',
              }).then(async (result) => {
                if (result.isConfirmed) {
                  navigate('/materi')
                } else if (result.isDismissed) {
                  navigate('/materi')
                }
              })
            }
            setNewPertanyaan('')
          }
        } catch (error) {
          console.error(error);
        }
      }
    })
  }

  return (
    <div className={`pe-10 ${className}`} style={{ textAlign: 'justify' }}>
      {
        isLoading ? (
          <div className='d-flex'
            style={{ width: '100%', height: '100%', justifyContent: 'center', justifyItems: 'center' }}
          >
            <Lottie style={{ width: '55%', height: '55%' }} animationData={animLoading} />
          </div>
        ) :
          materi[currentPageTitleModul.currentPageTitleModul - 1].materi.isiMateri[page.currentPage - 1].type === "materi" ?
            <>
              <div>
                <h1 className='mb-5' style={{ fontSize: '30px' }}>{materi[0].materi.isiMateri[page.currentPage - 1].judulMateri}</h1>
                <div dangerouslySetInnerHTML={{ __html: materi[currentPageTitleModul.currentPageTitleModul - 1].materi.isiMateri[page.currentPage - 1].htmlMateri ? materi[currentPageTitleModul.currentPageTitleModul - 1].materi.isiMateri[page.currentPage - 1].htmlMateri! : "" }} />

                {
                  detailMateri && detailMateri.status.toLowerCase() !== "selesai"
                    ?
                    <div>
                      <div style={{ justifyContent: "center", alignItems: "center", marginTop: "10px", marginBottom: "10px" }}>
                        <iframe width="800" height="600" src="https://www.programiz.com/c-programming/online-compiler/" title="Compiler Online"></iframe>
                      </div>

                      <h1 className='mb-5 mt-20' style={{ fontSize: '30px' }}>Form Jawaban</h1>
                      <span style={{ fontSize: '20px' }}>
                        Jika jawabannya sudah sesuai silahkan copy code dalam bahasa C yang sudah kamu kerjakan lalu klik button <strong>Jawab Pertanyaan</strong> dan paste kan jawaban kamu disana lalu kirim jawabannya!
                      </span>
                      <div className='d-flex mt-10' style={{ justifyContent: 'center' }}>
                        <button
                          className={clsx(
                            `btn btn-primary w-200px`
                          )}
                          onClick={() => setNewPertanyaan('')}
                          type={`button`}
                          data-bs-toggle='modal'
                          data-bs-target='#kt_modal_add_featuring'
                        >
                          Jawab Pertanyaan
                        </button>
                        <div
                          className='modal fade modal-lg'
                          tabIndex={-1}
                          id='kt_modal_add_featuring'
                        >
                          <div className='modal-dialog modal-dialog-centered'>
                            <div className='modal-content'>
                              <div className='p-8'>
                                <span className='fs-2 fw-bold text-gray-700'>
                                  Form Jawaban
                                </span>{' '}
                                <br />
                                <span className='text-gray-500'>
                                  Masukkan jawaban kamu pada form dibawah ya!
                                </span>
                              </div>
                              <div className='ps-8 pe-8'>
                                <textarea
                                  className='form-control'
                                  placeholder='Apa itu algoritma dan pemrograman?'
                                  onChange={(e) => setNewPertanyaan(e.target.value)}
                                />
                              </div>
                              <div
                                className='d-flex mt-10 modal-footer'
                                style={{ justifyContent: 'flex-end', width: '100%' }}
                              >
                                <div>
                                  <button
                                    type='button'
                                    data-bs-dismiss='modal'
                                    className='btn btn-outline btn-outline-primary btn-active-light-primary w-200px me-4'
                                  >
                                    Batalkan
                                  </button>
                                </div>
                                <div>
                                  <button
                                    className='btn btn-primary w-200px'
                                    data-bs-dismiss='modal'
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                      if (newPertanyaan !== '' && profileSiswa) {
                                        const listPertanyaan = {
                                          fullname: profileSiswa.name,
                                          pertanyaan: newPertanyaan
                                        }
                                        handleSendPertanyaan(listPertanyaan)
                                      }
                                    }}
                                    disabled={newPertanyaan ? false : true}
                                  >
                                    Kirim Jawaban
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    :
                    <></>
                }
              </div>
            </>
            :
            materi[currentPageTitleModul.currentPageTitleModul - 1].materi.isiMateri[page.currentPage - 1].type === "rangkuman" ?
              <div className='d-flex row' style={{ justifyContent: 'center' }}>
                <img
                  alt='Logo'
                  src={toAbsoluteUrl('/media/assetIsiMater/materi1/discus.jpg')}
                  className='logo-default mb-5'
                  style={{ height: "70%", width: '70%' }}
                />

                <h1>Selamat datang di sesi diskusi dengan Reciprocal Teaching!🎉</h1>
                <span style={{ fontSize: '20px', textAlign: 'justify', marginBottom: "20px" }}>
                  <br />
                  Setelah kamu mempelajari materi tentang <strong>"{materi[currentPageTitleModul.currentPageTitleModul - 1].materi.titleModul}"</strong> dan telah mengajukan pertanyaan kepada kelompok kamu,
                  selanjutnya adalah sesi diskusi bersama kelompok untuk membahas lebih lanjut terkait pertanyaan dari kamu dan teman-teman kelompok yang lain
                  <br />
                  <br />
                  Sebelum Masuk ke sesi diskusi ada poin-poin penting yang perlu kalian pahami terlebih dahulu :
                  <br />
                  <br />
                  <ul>
                    <li>
                      1. Pertama-tama, saya akan menjelaskan tujuan dari sesi diskusi ini. Tujuannya adalah agar setiap peserta dapat aktif berpartisipasi dalam diskusi dan saling membantu satu sama lain untuk memahami materi yang dibahas.
                    </li>
                    <br />
                    <li>
                      2. Setiap kelompok akan memiliki peran rotasi yang terdiri dari 4 peran, yaitu Leader, Predictor, Clarifier, dan Summarizer.
                    </li>
                    <br />
                    <li>
                      3. Leader: Leader akan memfasilitasi jalannya diskusi, memastikan setiap anggota kelompok memiliki kesempatan untuk berbicara, dan menjaga waktu agar sesi berjalan lancar.
                    </li>
                    <br />
                    <li>
                      4. Predictor: Predictor akan memprediksi apa yang akan dibahas dalam teks atau materi yang akan didiskusikan. Setiap anggota kelompok akan berusaha untuk mengidentifikasi hal-hal penting dan membuat pertanyaan terkait materi.
                    </li>
                    <br />
                    <li>
                      5. Clarifier: Clarifier bertanggung jawab untuk mencari dan memberikan penjelasan atas hal-hal yang kurang dipahami atau membingungkan dari materi yang dibahas.
                    </li>
                    <br />
                    <li>
                      6. Summarizer: Summarizer akan menyimpulkan inti dari diskusi dan materi yang telah dibahas oleh kelompok.
                    </li>
                    <br />
                  </ul>
                  Untuk sesi diskusi kalian bisa akses <a href='/forum' target="_blank">disini</a> ya.
                </span>

                <span style={{ fontSize: '20px', textAlign: 'justify', marginBottom: "20px" }}>
                  Setelah diskusi dalam kelompok selesai silahkan masukan rangkuman terkait materi yang telah kalian diskusikan pada form di bawah ini!
                </span>
                <div className="">
                  {
                    resRangkuman !== "" ?
                      <span className='form-control' style={{ fontSize: '20px' }}>
                        Rangkuman kamu :
                        <br />
                        <br />
                        <span className='text-dark'>{resRangkuman}</span>
                      </span>
                      :
                      <textarea
                        style={{ fontSize: '20px' }}
                        className='form-control'
                        id='exampleFormControlTextarea1'
                        rows={5}
                        placeholder='Masukan rangkuman hasil diskusi'
                        value={rangkuman}
                        onChange={(e) => {
                          setRangkuman(e.target.value)
                        }}
                      />
                  }
                </div>
              </div>
              :
              <div className={`pe-10 ${className}`}>
                <div className='mb-10'>
                  <div dangerouslySetInnerHTML={{ __html: materi[0].materi.isiMateri[page.currentPage - 1].soal ? materi[0].materi.isiMateri[page.currentPage - 1].soal! : "" }} />
                </div>
                {
                  detailMateri?.status.toLowerCase() === "selesai" ?
                    <>
                      {
                        detailMateri.latihan.map((e, i) => {
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
                                            disabled={finalHasilSoal.length !== null ? true : false}
                                            onChange={(e) => handleRadioChange(i, e.target.value)}
                                          />
                                          <span style={{ fontSize: '20px', textAlign: 'end' }}>
                                            {_soal}
                                          </span>
                                        </div>
                                      </>
                                    )
                                  })
                                }
                                {
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
                                  disabled={finalHasilSoal && finalHasilSoal.length !== null ? true : false}
                                  onChange={(e) => handleRadioChange(i, e.target.value)}
                                />
                                <span style={{ fontSize: '20px', textAlign: 'end' }}>
                                  {_soal}
                                </span>
                              </div>
                            </>
                          )
                        })
                      }
                    </>
                }
              </div>
      }
    </div>
  )
}

export { IsiMateri }
