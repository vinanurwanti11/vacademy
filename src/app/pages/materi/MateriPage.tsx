import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../_molekul/helpers'
import { getDataMateri, setDataMateri } from '../../helpers/MateriHelpers'
import { createDetailMateriByUID, getMateriSiswaByUID } from '../../api/Request/materi.siswa.api'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { DetailMateriState, DetailMateriTypeResponse } from '../../interface/materi/materi.interface'
import Lottie from 'lottie-react'
import animLoading from '../../../_molekul/assets/loading/animLoading.json'
import { useIsMateri } from './context/isMateriProvider'
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import Swal from 'sweetalert2'
import { getAllSiswa, getProfileSiswa } from '../../api/Request/profile.siswa.api'
import { CreateProfileSiswaType } from '../../interface/profile.siswa.interface'
import { CreatePeringkatType } from '../../interface/peringkat.interface'
import { getAllPeringkatSiswa } from '../../api/Request/peringkat.siswa.api'

const MateriPage = () => {
  const navigate = useNavigate()
  const auth = getAuth()
  const [uuid, setUuid] = useState<string | undefined>("")
  const [detailMateri] = useState<DetailMateriState[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const [profile, setProfile] = useState<CreateProfileSiswaType>()
  const { setIsMateri } = useIsMateri()
  const [listPeringkat, setListPeringkat] = useState<CreatePeringkatType[]>([])

  useEffect(() => {
    // Cek apakah halaman sudah pernah di-reload sebelumnya dari local storage
    const hasReloaded = localStorage.getItem('hasReloaded');
    // Jika belum di-reload sebelumnya, maka lakukan reload halaman
    if (hasReloaded === "true") {
      window.location.reload();
      localStorage.removeItem("titleMateri")
      localStorage.setItem('hasReloaded', 'false'); // Simpan status reload ke local storage agar tidak me-reload lagi
    }
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      handleGetMateri(e?.uid)
      setUuid(e?.uid)
      handleGetProfile(e?.uid)
    })
  }, [uuid, detailMateri])

  const handleGetMateri = async (uid: string | undefined) => {
    setLoading(true)
    try {
      if (uid) {
        const res = await getMateriSiswaByUID(uid)
        const la = Object.entries(res)
        la.map((e, i) => {
          const body: DetailMateriState = {
            idMateri: e[0],
            name: e[1].name,
            status: e[1].status,
            fullname: e[1].fullname,
            step: e[1].step,
            latihan: e[1].latihan,
            rangkuman: e[1].rangkuman
          }
          setListMateri(body)
        })
      }
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }


  const setListMateri = (list: DetailMateriState) => {
    const found = detailMateri.find((obj) => {
      return obj.name === list.name
    })
    if (!found) {
      detailMateri.push(list)
    }
  }

  const handleNavigate = async (materi: string, nama: string, i?: number) => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'dd MMMM yyyy', { locale: id });

    if (profile?.type.toLowerCase() === "siswa" && uuid) {
      if (i && i > 1) {
        if (detailMateri[i - 2] && detailMateri[i - 2].status !== "On Progress") {
          if (detailMateri[i - 1]) {
            setDataMateri(materi)
            setIsMateri(true)
            navigate("/materi/details", { state: { materiParent: materi, idMateri: detailMateri[i - 1].idMateri } })
          } else {
            setLoading(true)
            try {
              const body: DetailMateriTypeResponse = {
                name: nama,
                status: "On Progress",
                fullname: '-',
                step: 1,
                latihan: [],
                pertanyaan: [],
                rangkuman: '',
                tanggalMulai: formattedDate
              }
              const res = await createDetailMateriByUID(uuid, body)
              if (res) {
                setLoading(false)
                setDataMateri(materi)
                setIsMateri(true)
                navigate("/materi/details", { state: { materiParent: materi, idMateri: res.name } })
              }
            } catch (error) {
              console.error(error);
              setLoading(false)
            }
          }
        } else {
          const swalSuccess = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-danger',
            },
            buttonsStyling: false
          })
          swalSuccess.fire({
            title: `Mohon Maaf anda harus menyelesaikan terlebih dahulu modul sebelumnya`,
            icon: 'error',
            confirmButtonText: 'Dismiss',
          })
        }
      } else if (i && i === 1) {
        if (detailMateri[i - 1]) {
          setDataMateri(materi)
          setIsMateri(true)
          navigate("/materi/details", { state: { materiParent: materi, idMateri: detailMateri[i - 1].idMateri } })
        } else {
          setLoading(true)
          try {
            const body: DetailMateriTypeResponse = {
              name: nama,
              status: "On Progress",
              fullname: '-',
              step: 1,
              latihan: [],
              pertanyaan: [],
              rangkuman: '',
              tanggalMulai: formattedDate
            }
            const res = await createDetailMateriByUID(uuid, body)
            if (res) {
              setLoading(false)
              setDataMateri(materi)
              setIsMateri(true)
              navigate("/materi/details", { state: { materiParent: materi, idMateri: res.name } })
            }
          } catch (error) {
            console.error(error);
            setLoading(false)
          }
        }
      }
    } else {
      if (i) {
        setDataMateri(materi)
        setIsMateri(true)
        navigate("/materi/details", { state: { materiParent: materi } })
      }
    }
  }


  const handleGetProfile = async (uid: string | undefined) => {
    if (uid) {
      const getIdPoin = await getProfileSiswa(uid)
      const la = Object.entries(getIdPoin)
      setProfile(la[0][1])
      if (uid) {
        const res = await getAllPeringkatSiswa();
        const ha = Object.entries(res);
        const sortedData = ha
          .map((e, i) => {
            const ha = Object.entries(e[1]);

            const body: CreatePeringkatType = {
              fullname: ha[0][1].fullname,
              email: ha[0][1].email,
              nomorAbsen: ha[0][1].nomorAbsen,
              poin: ha[0][1].poin,
              image_profile: ha[0][1].image_profile,
              type: ha[0][1].type,
              progressMateri: ha[0][1].progressMateri
            };
            return body;
          })
          .sort((a, b) => b.poin - a.poin) // Mengurutkan secara descending berdasarkan nilai poin

        setListPeringkat(sortedData);
      }
    }
  }

  return (
    <div className="d-flex row" style={{ justifyContent: `${isLoading ? "center" : ""}`, alignItems: `${isLoading ? "center" : ""}`, height: `${isLoading ? "100%" : ""}`, width: `${isLoading ? "100%" : ""}` }}>
      {
        isLoading ? (
          <div className='d-flex'
            style={{ width: '50%', height: '50%', justifyContent: 'center', justifyItems: 'center' }}
          >
            <Lottie style={{ width: '50%', height: '50%' }} animationData={animLoading} />
          </div>
        ) :
          <>
            {
              profile?.type.toLowerCase() === "siswa" ?
                <>
                  <h1 className='mb-10' style={{ fontSize: '30px' }}>Materi</h1>
                  <div className="d-flex row" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <div className="card col-sm-4 p-0 rounded shadow-sm ms-20"
                      onClick={() => handleNavigate("m-k-a", "Materi Percabangan If", 1)}
                      style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='d-flex rounded-top ' style={{ backgroundColor: '#E108B1', height: '50%', justifyContent: 'center' }}>
                          <div className='me-5'>
                            <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__Annual Report.svg')} alt='' />
                          </div>
                        </div>
                        <div className='p-5'>
                          <h3>Materi Percabangan If</h3>
                          <span className={`badge 
              ${detailMateri && detailMateri[0] && detailMateri[0].status === "Selesai" ? "badge-light-success" : detailMateri && detailMateri[0] && detailMateri[0].status === "On Progress" ? "badge-light-warning" : "badge-light-danger"}
              `}>
                            {detailMateri && detailMateri[0] && detailMateri[0].status ? `${detailMateri[0].status}` : "Belum Mulai"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="card col-sm-4 p-0 rounded shadow-sm ms-10 me-10"
                      onClick={() => handleNavigate("m-k-b", "Materi Percabangan If - Else", 2)}
                      style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='d-flex rounded-top ' style={{ backgroundColor: '#08E138', height: '50%', justifyContent: 'center' }}>
                          <div className='me-5'>
                            <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__goods.svg')} alt='' />
                          </div>
                        </div>
                        <div className='p-5'>
                          <h3>Materi Percabangan If - Else</h3>
                          <span className={`badge 
              ${detailMateri && detailMateri[1] && detailMateri[1].status === "Selesai" ? "badge-light-success" : detailMateri && detailMateri[1] && detailMateri[1].status === "On Progress" ? "badge-light-warning" : "badge-light-danger"}
              `}>
                            {detailMateri && detailMateri[1] && detailMateri[1].status ? `${detailMateri[1].status}` : "Belum Mulai"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex row mt-10" style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <div className="card col-sm-4 p-0 rounded shadow-sm ms-10 me-10"
                      onClick={() => handleNavigate("m-k-c", "Materi Percabangan Nested-If", 3)}
                      style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='d-flex rounded-top ' style={{ backgroundColor: '#0893E1', height: '50%', justifyContent: 'center' }}>
                          <div className='me-5'>
                            <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__moneybox.svg')} alt='' />
                          </div>
                        </div>
                        <div className='p-5'>
                          <h3>Materi Percabangan Nested-If</h3>
                          <span className={`badge 
              ${detailMateri && detailMateri[2] && detailMateri[2].status === "Selesai" ? "badge-light-success" : detailMateri && detailMateri[2] && detailMateri[2].status === "On Progress" ? "badge-light-warning" : "badge-light-danger"}
              `}>
                            {detailMateri && detailMateri[2] && detailMateri[2].status ? `${detailMateri[2].status}` : "Belum Mulai"}
                          </span>
                        </div>
                      </div>
                    </div>


                    <div className="card col-sm-4 p-0 rounded shadow-sm"
                      onClick={() => handleNavigate("m-k-d", "Materi Percabangan Switch-Case", 4)}
                      style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='d-flex rounded-top ' style={{ backgroundColor: '#E1D808', height: '50%', justifyContent: 'center' }}>
                          <div className='me-5'>
                            <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__telescope.svg')} alt='' />
                          </div>
                        </div>
                        <div className='p-5'>
                          <h3>Materi Percabangan Switch-Case</h3>
                          <span className={`badge 
              ${detailMateri && detailMateri[3] && detailMateri[3].status === "Selesai" ? "badge-light-success" : detailMateri && detailMateri[3] && detailMateri[3].status === "On Progress" ? "badge-light-warning" : "badge-light-danger"}
              `}>
                            {detailMateri && detailMateri[3] && detailMateri[3].status ? `${detailMateri[3].status}` : "Belum Mulai"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
                :
                <>
                  <h1 className='mb-10' style={{ fontSize: '30px' }}>Materi</h1>
                  <div className="d-flex row" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <div className="card col-sm-4 p-0 rounded shadow-sm ms-20"
                      onClick={() => handleNavigate("m-k-a", "Materi Percabangan If", 1)}
                      style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='d-flex rounded-top ' style={{ backgroundColor: '#E108B1', height: '50%', justifyContent: 'center' }}>
                          <div className='me-5'>
                            <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__Annual Report.svg')} alt='' />
                          </div>
                        </div>
                        <div className='p-5'>
                          <h3>Materi Percabangan If</h3>
                          <span className={`badge badge-light-info`}>Lihat Detail -{'>'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="card col-sm-4 p-0 rounded shadow-sm ms-10 me-10"
                      onClick={() => handleNavigate("m-k-b", "Materi Percabangan If - Else", 2)}
                      style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='d-flex rounded-top ' style={{ backgroundColor: '#08E138', height: '50%', justifyContent: 'center' }}>
                          <div className='me-5'>
                            <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__goods.svg')} alt='' />
                          </div>
                        </div>
                        <div className='p-5'>
                          <h3>Materi Percabangan If - Else</h3>
                          <span className={`badge badge-light-info`}>Lihat Detail -{'>'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex row mt-10" style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <div className="card col-sm-4 p-0 rounded shadow-sm ms-10 me-10"
                      onClick={() => handleNavigate("m-k-c", "Materi Percabangan Nested-If", 3)}
                      style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='d-flex rounded-top ' style={{ backgroundColor: '#0893E1', height: '50%', justifyContent: 'center' }}>
                          <div className='me-5'>
                            <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__moneybox.svg')} alt='' />
                          </div>
                        </div>
                        <div className='p-5'>
                          <h3>Materi Percabangan Nested-If</h3>
                          <span className={`badge badge-light-info`}>Lihat Detail -{'>'}</span>
                        </div>
                      </div>
                    </div>


                    <div className="card col-sm-4 p-0 rounded shadow-sm"
                      onClick={() => handleNavigate("m-k-d", "Materi Percabangan Switch-Case", 4)}
                      style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='d-flex rounded-top ' style={{ backgroundColor: '#E1D808', height: '50%', justifyContent: 'center' }}>
                          <div className='me-5'>
                            <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__telescope.svg')} alt='' />
                          </div>
                        </div>
                        <div className='p-5'>
                          <h3>Materi Percabangan Switch-Case</h3>
                          <span className={`badge badge-light-info`}>Lihat Detail -{'>'}</span>
                        </div>
                      </div>
                    </div>
                  </div>


                  <h1 className='mt-10 mb-10' style={{ fontSize: '30px' }}>Progres Siswa</h1>
                  <div className={`card card-xxl-stretch mb-xl-8 shadow-sm`}>
                    {/* begin::Header */}
                    <div className='card-header border-0 pt-5'>
                      <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>List Progress Siswa</span>
                      </h3>
                    </div>
                    {/* end::Header */}
                    {/* begin::Body */}
                    <div className='card-body py-3'>
                      {/* begin::Table container */}
                      <div className='table-responsive'>
                        {/* begin::Table */}
                        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                          {/* begin::Table head */}
                          <thead>
                            <tr className='fw-bold text-muted'>
                              <th className='min-w-150px'>Nama</th>
                              <th className='min-w-140px'>Nomor Absen</th>
                              <th className='min-w-120px'>Progres Materi</th>
                              {/* <th className='min-w-120px'>Poin</th> */}
                            </tr>
                          </thead>
                          {/* end::Table head */}
                          {/* begin::Table body */}
                          <tbody>
                            {
                              listPeringkat && listPeringkat.map((e, i) => {
                                return (
                                  <>
                                    {
                                      e.type === "guru" ?
                                        <></>
                                        :
                                        <tr key={i}>
                                          <td>
                                            <div className='d-flex align-items-center'>
                                              <div className='symbol symbol-45px me-5'>
                                                <img src={e.image_profile} alt='' />
                                              </div>
                                              <div className='d-flex justify-content-start flex-column'>
                                                <span className='text-dark fw-bold fs-4'>
                                                  {e.fullname} <span className='text-primary fw-bold fs-4'>{profile?.email === e.email && profile.type.toLowerCase() === "siswa" ? "(kamu)" : ""}</span>
                                                </span>
                                                <span className='text-muted fw-semibold text-muted d-block fs-5'>
                                                  {e.email}
                                                </span>
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <span className='text-dark fw-bold d-block fs-4'>
                                              {e.nomorAbsen}
                                            </span>
                                          </td>
                                          <td>
                                            <span className='text-dark fw-bold d-block fs-4'>
                                              {e.progressMateri}/4
                                            </span>
                                          </td>
                                          {/* <td className='text-end'>
                                            <div className='d-flex flex-column w-100 me-2'>
                                              <div className='d-flex flex-stack mb-2'>
                                                <span className='text-muted me-2 fs-4 fw-semibold'>{e.poin / 10}</span>
                                              </div>
                                              <div className='progress h-6px w-100'>
                                                <div
                                                  className='progress-bar bg-danger'
                                                  role='progressbar'
                                                  style={{ width: '100%' }}
                                                ></div>
                                              </div>
                                            </div>
                                          </td> */}
                                        </tr>
                                    }
                                  </>
                                )
                              })
                            }

                          </tbody>
                          {/* end::Table body */}
                        </table>
                        {/* end::Table */}
                      </div>
                      {/* end::Table container */}
                    </div>
                    {/* begin::Body */}
                  </div>
                </>
            }
          </>
      }
    </div>
  )
}

export default MateriPage