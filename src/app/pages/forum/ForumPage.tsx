import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProfileSiswa } from '../../api/Request/profile.siswa.api'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { CreateProfileSiswaType } from '../../interface/profile.siswa.interface'
import Lottie from 'lottie-react'
import animLoading from '../../../_molekul/assets/loading/animLoading.json'

const Forum = () => {
  const navigate = useNavigate()
  const auth = getAuth()
  const [uuid, setUuid] = useState<string>()
  const [profileSiswa, setProfileSiswa] = useState<CreateProfileSiswaType>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      setUuid(e?.uid)
      handleGetProfile(e?.uid)
    })
  }, [uuid])

  const handleGetProfile = async (uid: string | undefined) => {
    setLoading(true)
    try {
      if (uid) {
        const resGetPertanyaan = await getProfileSiswa(uid)
        const output = Object.entries(resGetPertanyaan)
        output.map(e => {
          // @ts-ignore
          setProfileSiswa(e[1])
        });

        setLoading(false)
      }

    } catch (error) {
      console.error(error);
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
          <>
            <h1 className='mb-10 ms-20' style={{ fontSize: '30px' }}>Forum</h1>
            <div className="d-flex row mb-10">
              <div className="d-flex row" style={{ justifyContent: 'left', marginLeft: '9%' }}>
                <div className="card col-sm-4 p-0 rounded shadow-sm"
                  onClick={() => {
                    navigate('/group', { state: { page: "ajarkoding" } })
                    window.location.reload();
                  }}
                  style={{ width: '25%', height: '180px', cursor: 'pointer' }}>
                  <div className="card-body p-0">
                    <div className='rounded-top ' style={{ backgroundColor: 'black', height: '50%' }}>

                    </div>
                    <div className='p-5'>
                      <h3>Room Utama 🏆</h3>
                    </div>
                  </div>
                </div>

                {
                  profileSiswa?.type.toLowerCase() === "siswa" ?
                    <div className="card col-sm-4 p-0 ms-10 rounded shadow-sm"
                      onClick={() => {
                        navigate('/group', { state: { page: profileSiswa.kelompok } })
                        window.location.reload();
                      }}
                      style={{ width: '25%', height: '180px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='rounded-top ' style={{ backgroundColor: '#0893E1', height: '50%' }}>

                        </div>
                        <div className='p-5'>
                          <h3>Diskusi Kelompok Kecil 🙌</h3>
                        </div>
                      </div>
                    </div>
                    :
                    <></>
                }


              </div>
            </div>


            {
              profileSiswa?.type.toLowerCase() === "siswa" ?
                <></>
                :
                <div className="d-flex row">
                  <div className="d-flex row" style={{ justifyContent: 'center' }}>
                    <div className="card col-sm-4 p-0 rounded shadow-sm"
                      onClick={() => {
                        navigate('/group', { state: { page: "1" } })
                        window.location.reload();
                      }}
                      style={{ width: '25%', height: '180px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='rounded-top ' style={{ backgroundColor: '#E108B1', height: '50%' }}>

                        </div>
                        <div className='p-5'>
                          <h3>Kelompok 1</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card col-sm-4 p-0 rounded shadow-sm ms-10 me-10"
                      onClick={() => {
                        navigate('/group', { state: { page: "2" } })
                        window.location.reload();
                      }}
                      style={{ width: '25%', height: '180px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='rounded-top ' style={{ backgroundColor: '#08E138', height: '50%' }}>

                        </div>
                        <div className='p-5'>
                          <h3>Kelompok 2</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card col-sm-4 p-0 border rounded shadow-sm"
                      onClick={() => {
                        navigate('/group', { state: { page: "3" } })
                        window.location.reload();
                      }}
                      style={{ width: '25%', height: '180px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='rounded-top ' style={{ backgroundColor: '#0893E1', height: '50%' }}>

                        </div>
                        <div className='p-5'>
                          <h3>Kelompok 3</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex row mt-10" style={{ justifyContent: 'center' }}>
                    <div className="card col-sm-4 p-0 rounded shadow-sm"
                      onClick={() => {
                        navigate('/group', { state: { page: "4" } })
                        window.location.reload();
                      }}
                      style={{ width: '25%', height: '180px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='rounded-top ' style={{ backgroundColor: '#E1D808', height: '50%' }}>

                        </div>
                        <div className='p-5'>
                          <h3>Kelompok 4</h3>
                        </div>
                      </div>
                    </div>

                    <div className="card col-sm-4 p-0 rounded shadow-sm ms-10 me-10"
                      onClick={() => {
                        navigate('/group', { state: { page: "5" } })
                        window.location.reload();
                      }}
                      style={{ width: '25%', height: '180px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='rounded-top ' style={{ backgroundColor: '#E10856', height: '50%' }}>

                        </div>
                        <div className='p-5'>
                          <h3>Kelompok 5</h3>
                        </div>
                      </div>
                    </div>

                    <div className="card col-sm-4 p-0 rounded shadow-sm"
                      onClick={() => {
                        navigate('/group', { state: { page: "6" } })
                        window.location.reload();
                      }}
                      style={{ width: '25%', height: '180px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='rounded-top ' style={{ backgroundColor: '#A16876', height: '50%' }}>

                        </div>
                        <div className='p-5'>
                          <h3>Kelompok 6</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            }
          </>
        )
      }
    </>

  )
}

export default Forum