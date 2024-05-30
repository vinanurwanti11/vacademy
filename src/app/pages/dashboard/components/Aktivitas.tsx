/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../../_molekul/helpers'
import ProgressBar from './ProgressBar'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { DataMateri, DetailMateriState, DetailMateriTypeResponse, materiCase, materiIfElse, materiIfThen, materiNestedIf, materiOperator } from '../../../interface/materi/materi.interface'
import { getMateriSiswaByUID } from '../../../api/Request/materi.siswa.api'

type Props = {
  className: string
}

const Aktivitas: React.FC<Props> = ({ className }) => {
  const auth = getAuth()
  const [idMateri, setIdMateri] = useState<string>("")
  const [uuid, setUuid] = useState<string | undefined>("")
  const [detailMateri] = useState<DetailMateriTypeResponse[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const [materi, setMateri] = useState<DataMateri[]>()
  const [progressPercent, setProgressPercent] = useState<number[]>([])

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      handleGetMateri(e?.uid)
      setUuid(e?.uid)
    })
  }, [uuid, detailMateri])

  const handleGetMateri = async (uid: string | undefined) => {
    setLoading(true)
    try {
      if (uid) {
        const res = await getMateriSiswaByUID(uid)
        const la = Object.entries(res)
        la.map((e, i) => {
          const body: DetailMateriTypeResponse = {
            name: e[1].name,
            status: e[1].status,
            fullname: e[1].fullname,
            step: e[1].step,
            pertanyaan: e[1].pertanyaan,
            latihan: e[1].latihan,
            rangkuman: e[1].rangkuman,
            tanggalMulai: e[1].tanggalMulai
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

  const setListMateri = (list: DetailMateriTypeResponse) => {
    const found = detailMateri.find((obj) => {
      return obj.name === list.name
    })
    if (!found) {
      detailMateri.push(list)
    }
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Aktivitas</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_5_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                {/* begin::Table head */}
                <thead>
                  <tr className='border-0'>
                    <th className='p-0 min-w-400px'>Nama</th>
                    {/* <th className='p-0 min-w-200px'>Tanggal Mulai</th> */}
                    <th className='p-0 min-w-200px'>Status</th>
                    {/* <th className='p-0 min-w-130px'>Progres</th> */}
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  {
                    detailMateri && detailMateri.map((e, i) => {
                      return (
                        <tr key={i}>
                          <td>
                            <span className='fw-bold'>
                              {e.name}
                            </span>
                          </td>

                          {/* <td className='p-0'>
                            <span className='text-muted fw-semibold d-block'>{e.tanggalMulai}</span>
                          </td> */}

                          <td className='text-start text-muted fw-semibold p-0'>
                            <span className={`badge ${e.status.toLowerCase() === "selesai" ? "badge-light-success" : "badge-light-warning"}`}>{e.status}</span>
                          </td>
                          <td className='text-start p-0 ms-5'>
                            {/* <ProgressBar percentage={80} title={`80%`} size={30} strokeWidth={3} /> */}
                          </td>
                        </tr>
                      )
                    })
                  }

                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_5_tab_2'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                {/* begin::Table head */}
                <thead>
                  <tr className='border-0'>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-110px'></th>
                    <th className='p-0 min-w-50px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/plurk.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Brad Simmons
                      </a>
                      <span className='text-muted fw-semibold d-block'>Movie Creator</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>React, HTML</td>
                    <td className='text-end'>
                      <span className='badge badge-light-success'>Approved</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/telegram.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Popular Authors
                      </a>
                      <span className='text-muted fw-semibold d-block'>Most Successful</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>Python, MySQL</td>
                    <td className='text-end'>
                      <span className='badge badge-light-warning'>In Progress</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/bebo.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Active Customers
                      </a>
                      <span className='text-muted fw-semibold d-block'>Movie Creator</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>AngularJS, C#</td>
                    <td className='text-end'>
                      <span className='badge badge-light-danger'>Rejected</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_5_tab_3'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                {/* begin::Table head */}
                <thead>
                  <tr className='border-0'>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-110px'></th>
                    <th className='p-0 min-w-50px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/kickstarter.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Bestseller Theme
                      </a>
                      <span className='text-muted fw-semibold d-block'>Best Customers</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>ReactJS, Ruby</td>
                    <td className='text-end'>
                      <span className='badge badge-light-warning'>In Progress</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/bebo.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Active Customers
                      </a>
                      <span className='text-muted fw-semibold d-block'>Movie Creator</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>AngularJS, C#</td>
                    <td className='text-end'>
                      <span className='badge badge-light-danger'>Rejected</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/vimeo.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        New Users
                      </a>
                      <span className='text-muted fw-semibold d-block'>Awesome Users</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>Laravel,Metronic</td>
                    <td className='text-end'>
                      <span className='badge badge-light-primary'>Success</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='symbol symbol-45px me-2'>
                        <span className='symbol-label'>
                          <img
                            src={toAbsoluteUrl('/media/svg/brand-logos/telegram.svg')}
                            className='h-50 align-self-center'
                            alt=''
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Popular Authors
                      </a>
                      <span className='text-muted fw-semibold d-block'>Most Successful</span>
                    </td>
                    <td className='text-end text-muted fw-semibold'>Python, MySQL</td>
                    <td className='text-end'>
                      <span className='badge badge-light-warning'>In Progress</span>
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                      >
                        <KTIcon iconName='arrow-right' className='fs-2' />
                      </a>
                    </td>
                  </tr>
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export { Aktivitas }
