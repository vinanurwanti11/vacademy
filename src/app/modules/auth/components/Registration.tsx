/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import { useFormik } from 'formik'
import { toAbsoluteUrl } from '../../../../_molekul/helpers'
import { useAuth } from '../core/Auth'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { createProfileSiswa } from '../../../api/Request/profile.siswa.api'
import { CreateProfileSiswaType } from '../../../interface/profile.siswa.interface'
import { AuthModel } from '../../../interface/auth.interface'
import { createPeringkatByUID } from '../../../api/Request/peringkat.siswa.api'
import { CreatePeringkatType } from '../../../interface/peringkat.interface'

const registerSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('Nama tidak boleh kosong'),
  absen: Yup.string()
    .required('Nomor absen tidak boleh kosong'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email tidak boleh kosong'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password tidak boleh kosong'),
})



/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Registration() {
  const [loading, setLoading] = useState(false)
  const { saveAuth, setCurrentUser } = useAuth()
  // const [type, setType] = useState<string>("login")
  const navigate = useNavigate()

  const formikRegister = useFormik({
    initialValues: {
      fullname: '',
      absen: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      const auth = getAuth()
      setLoading(true)

      try {
        const ress = await createUserWithEmailAndPassword(auth, values.email, values.password);
        if (ress.user) {
          const image = `https://api.dicebear.com/6.x/adventurer/svg?seed=${values.fullname}`
          const bodyProfile: CreateProfileSiswaType = {
            name: values.fullname,
            nomor_absen: values.absen,
            email: values.email,
            imageProfile: image,
            kelompok: "1",
            type: "siswa"
          }
          const postProfileSiswa = await createProfileSiswa(ress.user.uid, bodyProfile)
          const bodyPringkat: CreatePeringkatType = {
            fullname: values.fullname,
            email: values.email,
            nomorAbsen: values.absen,
            poin: 0,
            image_profile: image,
            type: "siswa",
            progressMateri: 0
          }
          const postPeringkatSiswa = await createPeringkatByUID(ress.user.uid, bodyPringkat)
          const body: AuthModel = {
            uid: ress.user.uid,
            email: ress.user.email
          }
          saveAuth(body)
        }
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The login details are incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  return (
    <div className="d-flex flex-column flex-root">
      {/*begin::Authentication - Sign-in */}
      <div className="d-flex flex-column flex-lg-row flex-column-fluid">
        <div className="d-flex flex-column flex-lg-row-fluid bgi-position-center w-lg-50 p-10 order-2 order-lg-1"
          style={{
            backgroundImage: `url(${toAbsoluteUrl("/media/icons/duotune/general/backgorund.png")})`,
            backgroundSize: 'cover', // Menyesuaikan ukuran gambar dengan area latar belakang
            backgroundRepeat: 'no-repeat', // Menghindari pengulangan gambar
          }}
        >
          {/*begin::Form*/}
          <div className="d-flex flex-center flex-column flex-lg-row-fluid">
            {/*begin::Wrapper*/}
            <div className="w-lg-420px p-15 rounded shadow-sm" style={{ backgroundColor: 'white' }}>
              {/*begin::Form*/}
              <form
                className="form w-200"
                onSubmit={formikRegister.handleSubmit}
                noValidate
                id='kt_login_signin_form'>
                {/*begin::Heading*/}
                <div className="text-center mb-10">
                  <img alt='Logo'
                    src={toAbsoluteUrl('/media/logos/ic_logo.png')}
                    style={{ width: "220px" }} />
                </div>
                {/*begin::Heading*/}
                <div className="text-center mb-8">
                  {/*begin::Subtitle*/}
                  <h2 className="text-black fw-bold">
                    {"Sign Up"}
                  </h2>
                  {
                    <span style={{ fontSize: '14px' }}>
                      Yuk! Daftar dulu untuk membuat <br />akun kamu sendiri
                    </span>
                  }

                  {/*end::Subtitle=*/}
                </div>
                {/*begin::Heading*/}

                {formikRegister.status && (
                  <div className='mb-lg-5 alert alert-danger'>
                    <div className='alert-text font-weight-bold'>{formikRegister.status}</div>
                  </div>
                )
                }
                {
                  <>
                    {/*begin::Input group=*/}
                    <div className='mb-6' style={{ position: 'relative' }}>
                      {/* begin::Email */}
                      <h6 className="text-black fw-bold">Nama Lengkap</h6>
                      <input
                        type="fullname"
                        {...formikRegister.getFieldProps('fullname')}
                        placeholder="masukan nama kamu ya..."
                        name="fullname"
                        // style={{ paddingLeft: '14%' }}
                        autoComplete="off"
                        className={clsx(
                          "form-control",
                          {
                            'is-invalid': formikRegister.touched.fullname && formikRegister.errors.fullname || formikRegister.status
                          },
                          {
                            'is-valid': formikRegister.touched.fullname && !formikRegister.errors.fullname,
                          }
                        )}
                      />
                      {formikRegister.touched.fullname && formikRegister.errors.fullname && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>
                            <span role='alert'>{formikRegister.errors.fullname}</span>
                          </div>
                        </div>
                      )}
                      {/*end::Email*/}
                    </div>

                    <div className="fv-row mb-6" style={{ position: 'relative' }}>
                      {/*begin::Password*/}
                      <h6 className="text-black fw-bold">No. Absen</h6>
                      <input
                        type="absen"
                        {...formikRegister.getFieldProps('absen')}
                        // style={{ paddingLeft: '14%' }}
                        placeholder="masukan nomor absen kamu..."
                        name="absen"
                        autoComplete="off"
                        className={clsx(
                          "form-control",
                          {
                            'is-invalid': formikRegister.touched.absen && formikRegister.errors.absen || formikRegister.status,
                          },
                          {
                            'is-valid': formikRegister.touched.absen && !formikRegister.errors.absen,
                          }

                        )}
                      />
                      {formikRegister.touched.absen && formikRegister.errors.absen && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>
                            <span role='alert'>{formikRegister.errors.absen}</span>
                          </div>
                        </div>
                      )}
                      {/*end::Password*/}
                    </div>
                    {/*end::Input group=*/}

                    <div className="fv-row mb-6" style={{ position: 'relative' }}>
                      {/*begin::Password*/}
                      <h6 className="text-black fw-bold">Email</h6>
                      <input
                        type="email"
                        {...formikRegister.getFieldProps('email')}
                        // style={{ paddingLeft: '14%' }}
                        placeholder="contoh: user@xyz.com"
                        name="email"
                        autoComplete="off"
                        className={clsx(
                          "form-control",
                          {
                            'is-invalid': formikRegister.touched.email && formikRegister.errors.email || formikRegister.status,
                          },
                          {
                            'is-valid': formikRegister.touched.email && !formikRegister.errors.email,
                          }

                        )}
                      />
                      {formikRegister.touched.email && formikRegister.errors.email && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>
                            <span role='alert'>{formikRegister.errors.email}</span>
                          </div>
                        </div>
                      )}
                      {/*end::Password*/}
                    </div>


                    <div className="fv-row mb-3" style={{ position: 'relative' }}>
                      {/*begin::Password*/}
                      <h6 className="text-black fw-bold">Password</h6>
                      <input
                        type="password"
                        {...formikRegister.getFieldProps('password')}
                        // style={{ paddingLeft: '14%' }}
                        placeholder="minimal 8 karakter"
                        name="password"
                        autoComplete="off"
                        className={clsx(
                          "form-control",
                          {
                            'is-invalid': formikRegister.touched.password && formikRegister.errors.password || formikRegister.status,
                          },
                          {
                            'is-valid': formikRegister.touched.password && !formikRegister.errors.password,
                          }

                        )}
                      />
                      {formikRegister.touched.password && formikRegister.errors.password && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>
                            <span role='alert'>{formikRegister.errors.password}</span>
                          </div>
                        </div>
                      )}
                      {/*end::Password*/}
                    </div>

                  </>
                }

                {/*begin::Submit button*/}
                <div className="d-grid mb-10 mt-10">
                  <button type="submit" className="btn" id='kt_sign_in_submit'
                    disabled={formikRegister.isSubmitting || !formikRegister.isValid || loading}
                    style={{ color: 'white', background: '#4584AD', cursor: 'pointer' }}
                  >
                    {!loading && <span className='indicator-label'>
                      {"Sign Up"}
                    </span>}
                    {loading && (
                      <span className='indicator-progress' style={{ display: 'block' }}>
                        Please wait...
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>
                    )}
                  </button>

                  {/* begin::Separator */}
                  <div className='d-flex flex-stack flex-wrap mt-8' style={{ justifyContent: 'center' }}>
                    <span style={{ textAlign: 'center' }}>
                      {"Apakah kamu sudah memiliki akun? "}
                      <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          navigate("/auth/login")
                        }}
                        className='text-primary fw-bold ms-1'>
                        {"Sign In"}
                      </span>
                    </span>
                  </div>
                  {/* end::Separator */}

                </div>
                {/*end::Submit button*/}
              </form>
              {/*end::Form*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Form*/}
        </div>
      </div >
      {/*end::Authentication - Sign-in*/}
    </div >
  )
}
