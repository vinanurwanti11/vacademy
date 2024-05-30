import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_molekul/layout/core'
import { StatisticsWidget5 } from './components/StatisticsWidget5'
import { Aktivitas } from './components/Aktivitas'
import { TablesWidget10 } from './components/TablesWidget10'
import { ListsWidget1 } from './components/ListsWidget1'
import { useNavigate } from 'react-router-dom'
import { getProfileSiswa } from '../../api/Request/profile.siswa.api'
import { useEffect, useState } from 'react'
import { ProfileSiswaTypeResponse } from '../../interface/profile.siswa.interface'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import Lottie from 'lottie-react'
import animLoading from '../../../_molekul/assets/loading/animLoading.json'
import { isEvaluasi } from '../../api/Request/materi.siswa.api'
import { getAllPeringkatSiswa, getDetailPeringkatSiswaByUID } from '../../api/Request/peringkat.siswa.api'
import { CreatePeringkatType } from '../../interface/peringkat.interface'

const DashboardPage = () => {
  const navigate = useNavigate()
  const [profileSiswa, setProfileSiswa] = useState<ProfileSiswaTypeResponse>()
  const auth = getAuth()
  const [loading, setLoading] = useState<boolean>(false)
  const [listPeringkat, setListPeringkat] = useState<CreatePeringkatType[]>([])
  const [peringkat, setPeringkat] = useState<string>("")

  useEffect(() => {
    // Cek apakah halaman sudah pernah di-reload sebelumnya dari local storage
    const hasReloaded = localStorage.getItem('hasReloaded');

    // Jika belum di-reload sebelumnya, maka lakukan reload halaman
    if (hasReloaded === "true") {
      window.location.reload();
      localStorage.setItem('hasReloaded', 'false'); // Simpan status reload ke local storage agar tidak me-reload lagi
    }
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      handleGetProfile(e?.uid)
    })
  }, [])

  const handleGetProfile = async (uid: string | undefined) => {
    setLoading(true)
    try {
      if (uid) {
        let resEmail = ""
        const ress = await getProfileSiswa(uid)
        const output = Object.entries(ress)
        output.map(e => {
          //@ts-ignore
          setProfileSiswa(e[1])
          resEmail = e[1].email
        });
        if (resEmail) {
          const res = await getAllPeringkatSiswa();
          const la = Object.entries(res);

          const sortedData = la
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
          setListMateri(sortedData, resEmail)
        }
      }
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }

  const setListMateri = (list: CreatePeringkatType[], resEmail: string) => {
    list.forEach((item) => {
      const found = listPeringkat.find((obj) => obj.fullname === item.fullname);
      if (!found) {
        listPeringkat.push(item);
      }
    });

    for (let i = 0; i < listPeringkat.length; i++) {
      if (listPeringkat[i].email === resEmail) {
        setPeringkat((i + 1).toString())
        break
      }
    }
  };

  return (
    <>
      {/* begin::Row */}

      {
        loading ? (
          <div className='d-flex'
            style={{ width: '100%', height: '100%', justifyContent: 'center', justifyItems: 'center' }}
          >
            <Lottie style={{ width: '55%', height: '55%' }} animationData={animLoading} />
          </div>
        ) : (
          <>
            {
              profileSiswa?.type.toLowerCase() === "siswa" ?
                <>
                  <div className='d-flex row mb-10'>
                    <span className='text-dark fw-bold mb-1 fs-1'>Hallo, {profileSiswa?.name}!</span>
                    <span className='text-gray-700 fs-4 fw-semibold d-block'>Selamat datang di V-Academy!
                      <br />
                      Di sini tempatnya belajar Algoritma dan Pemrograman materi Percabangan.
                    </span>
                  </div>
                  <div className='row g-5 g-xl-8'>
                    {/* <div className='col-xl-6'>
                      <StatisticsWidget5
                        className='card-xl-stretch mb-xl-4 shadow-sm'
                        svgIcon='award'
                        color='body-white'
                        iconColor='primary'
                        title='Peringkat'
                        description={`Peringkat ke ${peringkat ? peringkat : ""} dari 35`}
                        titleColor='gray-900'
                        descriptionColor='gray-400'
                      />
                    </div> */}
                    <div className='col-xl-4'
                      onClick={() => navigate('/materi')}
                      style={{ height: "50%" }}
                    >
                      <StatisticsWidget5
                        className='card-xl-stretch mb-xl-4 shadow-sm'
                        svgIcon='book-open'
                        color='body-white'
                        iconColor='primary'
                        title='Materi'
                        description='Lihat Selengkapnya ->'
                        titleColor='gray-900'
                        descriptionColor='gray-400 text-hover-primary'
                      />
                    </div>
                    <div className='col-xl-4' onClick={() => navigate('/forum')} style={{ height: "50%" }}>
                      <StatisticsWidget5
                        className='card-xl-stretch mb-xl-4 shadow-sm'
                        svgIcon='call'
                        color='body-white'
                        iconColor='primary'
                        title={`${profileSiswa?.type.toLowerCase() === "siswa" ? 'Diskusi' : 'Diskusi'}`}
                        description='Lihat Selengkapnya ->'
                        titleColor='gray-900'
                        descriptionColor='gray-400 text-hover-primary'
                      />
                    </div>
                    <div className='col-xl-4'
                      onClick={() => navigate('/evaluasi')}
                      style={{ height: "50%" }}
                    >
                      <StatisticsWidget5
                        className='card-xl-stretch mb-xl-4 shadow-sm'
                        svgIcon='question'
                        color='body-white'
                        iconColor='primary'
                        title='Evaluasi'
                        description='Lihat Selengkapnya ->'
                        titleColor='gray-900'
                        descriptionColor='gray-400 text-hover-primary'
                      />
                    </div>

                    {/* <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/VkcM4M4FKf4?si=HC0wTkOC4_91LrNe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div> */}
                  </div>
                  {/* end::Row */}

                  {/* <div className='col-xl-12'>
                    <Aktivitas className='card-xl-stretch mb-5 mb-xl-8 shadow-sm' />
                  </div> */}


                  {/* begin::Row */}
                  {/* <div className='row g-5 g-xl-8'>
                    <div className='col-xl-7'>
                      <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8 shadow-sm' title={'Papan Peringkat 6 Teratas'} />
                    </div>
                    <div className='col-xl-5'>
                      <ListsWidget1 className='card-xl-stretch mb-xl-8 shadow-sm' />
                    </div>
                  </div> */}
                  {/* end::Row */}
                </>
                :
                <>
                  <div className='d-flex row mb-10'>
                    <span className='text-dark fw-bold mb-1 fs-1'>Hallo, {profileSiswa?.type.toLowerCase() === "siswa" ? `${profileSiswa?.name}` : `${profileSiswa?.name}`}!</span>
                    <span className='text-gray-700 fs-4 fw-semibold d-block'>
                      Selamat datang di V-Academy!
                      <br />
                      Di sini tempatnya belajar Algoritma dan Pemrograman materi Percabangan.
                      {/* <br/> */}
                      {/* Kira-kira apa sih percabangan itu? Buat code percabangan yang benar tuh gimana sih? 
                      <br/>
                      Yuk, simak dan pelajari materi di v-academy untuk memahami materi percabangan! */}
                    </span>
                  </div>
                  <div className='row g-5 g-xl-8'>
                    <div className='col-xl-4'
                      onClick={() => navigate('/materi')}
                      style={{ height: "50%" }}
                    >
                      <StatisticsWidget5
                        className='card-xl-stretch mb-xl-4 shadow-sm'
                        svgIcon='book-open'
                        color='body-white'
                        iconColor='primary'
                        title='Materi'
                        description='Lihat Selengkapnya ->'
                        titleColor='gray-900'
                        descriptionColor='gray-400 text-hover-primary'
                      />
                    </div>
                    <div className='col-xl-4' onClick={() => navigate('/forum')} style={{ height: "50%" }}>
                      <StatisticsWidget5
                        className='card-xl-stretch mb-xl-4 shadow-sm'
                        svgIcon='call'
                        color='body-white'
                        iconColor='primary'
                        title={`${profileSiswa?.type.toLowerCase() === "siswa" ? 'Diskusi' : 'Diskusi'}`}
                        description='Lihat Selengkapnya ->'
                        titleColor='gray-900'
                        descriptionColor='gray-400 text-hover-primary'
                      />
                    </div>
                    <div className='col-xl-4'
                      onClick={() => navigate('/evaluasi')}
                      style={{ height: "50%" }}
                    >
                      <StatisticsWidget5
                        className='card-xl-stretch mb-xl-4 shadow-sm'
                        svgIcon='question'
                        color='body-white'
                        iconColor='primary'
                        title='Evaluasi'
                        description='Lihat Selengkapnya ->'
                        titleColor='gray-900'
                        descriptionColor='gray-400 text-hover-primary'
                      />
                    </div>
                  </div>
                  {/* end::Row */}

                  {/* <div className='col-xl-12'>
                    <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8 shadow-sm' title={'Papan Peringkat Siswa'} />
                  </div> */}
                </>
            }
          </>
        )
      }

    </>
  )
}

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  )
}

export { DashboardWrapper }
