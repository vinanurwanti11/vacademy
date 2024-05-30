/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import { useFormik } from 'formik'
import { getUserByToken, login } from '../core/_requests'
import { toAbsoluteUrl } from '../../../../_molekul/helpers'
import { useAuth } from '../core/Auth'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { AuthModel } from '../../../interface/auth.interface'

const loginSchema = Yup.object().shape({
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

export function Login() {
  const [loading, setLoading] = useState(false)
  const { saveAuth, setCurrentUser } = useAuth()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      const auth = getAuth()
      setLoading(true)
      try {
        const ress = await signInWithEmailAndPassword(auth, values.email, values.password)
        const body: AuthModel = {
          uid: ress.user.uid,
          email: ress.user.email
        }
        saveAuth(body)
        // const { data: user } = await getUserByToken(auth.api_token)
        // setCurrentUser(user)
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
            <div className="w-lg-420px p-15 rounded shadow-sm" style={{ background: 'white' }}>
              {/*begin::Form*/}
              <form
                className="form w-200"
                onSubmit={formik.handleSubmit}
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
                    {"Sign In"}
                  </h2>
                  {
                    <span style={{ fontSize: '14px' }}>
                      Masuk ke akun kamu dengan <br /> memasukan email dan password
                    </span>
                  }

                  {/*end::Subtitle=*/}
                </div>
                {/*begin::Heading*/}

                {formik.status && (
                  <div className='mb-lg-5 alert alert-danger'>
                    <div className='alert-text font-weight-bold'>{formik.status}</div>
                  </div>
                )
                }
                {
                  <>
                    {/*begin::Input group=*/}
                    <div className='mb-6' style={{ position: 'relative' }}>
                      {/* begin::Email */}
                      <h6 className="text-black fw-bold">Email</h6>
                      <input
                        type="email"
                        {...formik.getFieldProps('email')}
                        placeholder="contoh: admin@vacademy.com"
                        name="email"
                        // style={{ paddingLeft: '14%' }}
                        autoComplete="off"
                        className={clsx(
                          "form-control",
                          {
                            'is-invalid': formik.touched.email && formik.errors.email || formik.status
                          },
                          {
                            'is-valid': formik.touched.email && !formik.errors.email,
                          }
                        )}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>
                            <span role='alert'>{formik.errors.email}</span>
                          </div>
                        </div>
                      )}
                      {/*end::Email*/}
                    </div>

                    <div className="fv-row mb-3" style={{ position: 'relative' }}>
                      {/*begin::Password*/}
                      <h6 className="text-black fw-bold">Password</h6>
                      <input
                        type="password"
                        {...formik.getFieldProps('password')}
                        // style={{ paddingLeft: '14%' }}
                        placeholder="minimal 8 karakter"
                        name="password"
                        autoComplete="off"
                        className={clsx(
                          "form-control",
                          {
                            'is-invalid': formik.touched.password && formik.errors.password || formik.status,
                          },
                          {
                            'is-valid': formik.touched.password && !formik.errors.password,
                          }

                        )}
                      />
                      {formik.touched.password && formik.errors.password && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>
                            <span role='alert'>{formik.errors.password}</span>
                          </div>
                        </div>
                      )}
                      {/*end::Password*/}
                    </div>
                    {/*end::Input group=*/}

                  </>
                }

                {/*begin::Submit button*/}
                <div className="d-grid mb-10 mt-10">
                  <button type="submit" className="btn" id='kt_sign_in_submit'
                    disabled={formik.isSubmitting || !formik.isValid || loading}
                    style={{ color: 'white', background: '#4584AD', cursor: 'pointer' }}
                  >
                    {!loading && <span className='indicator-label'>
                      {"Sign In"}
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
                      {"Apakah kamu belum memiliki akun?"}
                      <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          navigate("/auth/register")
                        }}
                        className='text-primary fw-bold ms-1'>
                        {"Sign Up"}
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
