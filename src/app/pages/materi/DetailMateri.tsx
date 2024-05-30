import { useEffect, useState } from 'react';
import { IsiMateri } from './components/IsiMateri';
import { Footer } from './components/Footer';
import { PaginationProvider, usePagination } from './context/materiProvider';
import { TitleModulProvider } from './context/titleModulProvider';
import { ExampleProvider } from './context/exampleProvider';
import { useLocation } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDetailMateriSiswaByID } from '../../api/Request/materi.siswa.api';
import { DetailMateriTypeResponse, HasilSoalType, PertanyaanType } from '../../interface/materi/materi.interface';

const DetailMateri = () => {
  const [materiParent, setMateriParent] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const { currentPage, setPage } = usePagination()
  // @ts-ignore
  const location = useLocation<data>()
  const auth = getAuth()
  const [idMateri, setIdMateri] = useState<string>("")
  const [uuid, setUuid] = useState<string | undefined>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [rangkuman, setRangkuman] = useState<string>("")
  const [resRangkuman, setResRangkuman] = useState<string>("")
  const [hasilSoal, setHasilSoal] = useState<HasilSoalType[]>([])
  const [finalHasilSoal, setFinalHasilSoal] = useState<HasilSoalType[]>([])
  const [detailMateri, setDetailMateri] = useState<DetailMateriTypeResponse>()
  const [pertanyaan, setPertanyaan] = useState<PertanyaanType[]>([])


  useEffect(() => {
    //@ts-ignore
    setIdMateri(location.state.idMateri)
    if (idMateri) {
      onAuthStateChanged(auth, e => {
        handleGetDetailMateri(e?.uid, idMateri)
        setUuid(e?.uid)
      })
    }
  }, [uuid, idMateri])

  useEffect(() => {
    setLoading(true)
    // @ts-ignore
    setMateriParent(location.state.materiParent)
    if (materiParent) {
      setLoading(false)
    }
    if (loading) {
      document.location.reload()
    }
  }, [])

  useEffect(() => {
    // Cek apakah halaman sudah pernah di-reload sebelumnya dari local storage
    const hasReloaded = localStorage.getItem('hasReloaded');
    const titleMateri = localStorage.getItem('titleMateri');
    let materis = ""
    //@ts-ignore
    const mat = location.state.materiParent

    if (mat) {
      if (mat === "m-k-a") {
        materis = "Operator Logika, Relasional, dan Kesaman"
      } else if (mat === "m-k-b") {
        materis = "Struktur Percabangan If"
      } else if (mat === "m-k-c") {
        materis = "Struktur Percabangan If - Else dan If - Else If"
      } else if (mat === "m-k-d") {
        materis = "Struktur Percabangan Depend On (Case)"
      } else if (mat === "m-k-e") {
        materis = "Struktur Percabangan If bersarang (Nested If)"
      }
    }

    // Jika belum di-reload sebelumnya, maka lakukan reload halaman
    if (hasReloaded === "false" || !hasReloaded && !titleMateri) {
      window.location.reload();
      localStorage.setItem('titleMateri', materis);
      localStorage.setItem('hasReloaded', 'true'); // Simpan status reload ke local storage agar tidak me-reload lagi
    }
  }, []);

  const handleGetDetailMateri = async (uid: string | undefined, id: string | undefined) => {
    try {
      if (uid && id) {
        const res = await getDetailMateriSiswaByID(uid, id)
        if (res && res.status.toLowerCase() !== "selesai") {
          setPage(res.step)
          setResRangkuman(res.rangkuman)
          setFinalHasilSoal(res.latihan)
          setDetailMateri(res)
        } else {
          setPage(1)
          setResRangkuman(res.rangkuman)
          setFinalHasilSoal(res.latihan)
          setDetailMateri(res)
        }
      }
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <TitleModulProvider>
      <PaginationProvider>
        <ExampleProvider>
          <div className='row p-0' style={{ justifyContent: 'center', alignItems: "center" }}>
            <div id="materi" className='col-xl-8 card-header'>
              {/* <h1>Tujuan Pembelajaran</h1> */}
              <IsiMateri className='card-xxl-stretch mb-xl-3 w-100'
                isLoading={isLoading}
                setRangkuman={setRangkuman}
                rangkuman={rangkuman}
                resRangkuman={resRangkuman}
                hasilSoal={hasilSoal}
                setHasilSoal={setHasilSoal}
                finalHasilSoal={finalHasilSoal}
                detailMateri={detailMateri}
                setPertanyaan={setPertanyaan}
                pertanyaan={pertanyaan}
              />
            </div>
            {/* <div id="progress" className='col-xl-3 position-fixed mb-xl-3 border border-secondary border-2 rounded'
              style={{ right: '40px', maxHeight: '75%', overflow: 'auto' }}>
              <div className='align-items-center border-0 mb-5 mt-5'>
                <h3 className='align-items-start flex-column'>
                  <span className='fw-bolder text-dark fs-3 ps-5'>Daftar Modul</span>
                </h3>
              </div>
              <div className='mb-10 border-secondary' style={{ borderTop: '2px solid', margin: '10px 0' }}></div>
              <AccordionMateri
                className='pt-10 pb-10'
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                rangkuman={rangkuman}
                setResRangkuman={setResRangkuman}
                resRangkuman={resRangkuman}
                hasilSoal={hasilSoal}
                setPertanyaan={setPertanyaan}
                pertanyaan={pertanyaan}
              />
            </div> */}
            {/* <Footer
              setIsLoading={setIsLoading}
              rangkuman={rangkuman}
              setResRangkuman={setResRangkuman}
              resRangkuman={resRangkuman}
              hasilSoal={hasilSoal}
              setPertanyaan={setPertanyaan}
              pertanyaan={pertanyaan}
            /> */}
          </div>
        </ExampleProvider>
      </PaginationProvider>
    </TitleModulProvider>
  );
};

export default DetailMateri;
