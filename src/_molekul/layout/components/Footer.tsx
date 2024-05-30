/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from 'react'
import { useLayout } from '../core'
import { useLocation } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Footer: FC = () => {
  const { classes } = useLayout()
  const location = useLocation()
  const [isLocation, setIsLocation] = useState<boolean>(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if ((location.pathname === '/materi/details' && 'active') || (location.pathname === '/evaluasi/soal' && 'active')) {
      setIsLocation(true)
    } else {
      setIsLocation(false)
    }
  }, [])

  return (
    <>
      {
        isLocation ?
          <div style={{ marginTop: '100px' }}>

          </div>
          :
          <div className='footer py-4 d-flex flex-lg-column shadow-sm' id='kt_footer'
          // style={{ position: 'sticky', bottom: 0, backgroundColor: 'white', }}
          >
            {/* begin::Container */}
            <div
              className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center justify-content-between`}
            >
              {/* begin::Copyright */}
              <div className='text-dark order-2 order-md-1'>
                <span className='text-muted fw-bold me-2'>{new Date().getFullYear()} &copy;</span>
                <span className='text-gray-800 text-hover-primary'>
                  v-academy by vina nurwanti
                </span>
              </div>
              {/* end::Copyright */}

              {/* begin::Nav */}
              <ul className='menu menu-gray-600 menu-hover-primary fw-bold order-1'>
                <li onClick={handleOpen} className='menu-item'>
                  <span className='menu-link ps-0 pe-2'>
                    About
                  </span>
                </li>
                <li className='menu-item'>
                  <span className='menu-link pe-0 pe-2'>
                    Contact
                  </span>
                </li>
                <li className='menu-item'>
                  <span className='menu-link pe-0'>
                    Report
                  </span>
                </li>
              </ul>
              {/* end::Nav */}
            </div>
            {/* end::Container */}
          </div>
      }

      {
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box borderRadius={2} borderColor={"white"} sx={style}>
              <Typography style={{ fontWeight: 'bold' }} id="modal-modal-title" variant="h6" component="h2">
                APA ITU V ACADEMY ?
              </Typography>
              <Typography style={{ fontSize: '15px', textAlign: "justify" }} id="modal-modal-description" sx={{ mt: 2 }}>
                Hallo!
                <br />
                Selamat datang di V-Academy!
                <br />
                <br />
                V’Academy adalah sebuah website pembelajaran dengan menerapkan model Think-Talk-Write. Model tersebut dimulai dengan siswa mempelajadi materi, memahami latihan soal yang diberikan, dan menuliskannya di catatan kecil (Think). Setelah itu siswa berdiskusi dengan teman sekelompok dan membahas jawaban yang paling tepat dari jawaban masing-masing anggota kelompok (Talk). Terakhir siswa menuliskan jawaban berdasarkan hasil diskusi ke dalam lembar kerja (Write), lalu perwakilan dari setiap kelompok membagikan jawabannya dengan kelompok lain. Dengan diterapkannnya model pembelajaran ini, diharapkan dapat meningkatkan Logical Thinking siswa pada meteri Percabangan.
              </Typography>
              {/* <div style={{ marginTop: "50px", marginBottom: '50px' }}></div>
              <Typography style={{ fontWeight: 'bold' }} id="modal-modal-title" variant="h6" component="h2">
                APA ITU ROOM DISKUSI ?
              </Typography>
              <Typography style={{ fontSize: '15px' }} id="modal-modal-description" sx={{ mt: 2 }}>
                Setelah masing-masing individu mendapatkan hasil jawaban dari latihan soal sebelumnya, dari jawaban-jawaban tersebut diskusikan dan tentukan jawaban yang paling tepat lalu bagikan dengan teman kelompok lain. Semangat!!
              </Typography> */}
            </Box>
          </Modal>
        </div >

      }
    </>

  )
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #ffff',
  // boxShadow: 24,
  p: 4,
};

export { Footer }
