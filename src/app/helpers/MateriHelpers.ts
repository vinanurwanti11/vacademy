const MATERI_LOCAL_STORAGE_KEY = 'data-m'

const getDataMateri = (): string | undefined => {
  if (!localStorage) {
    return
  }

  const lsValue: string | null = localStorage.getItem(MATERI_LOCAL_STORAGE_KEY)

  if (!lsValue) {
    return
  }

  try {
    const data: string = JSON.parse(lsValue) as string
    if (data) {
      return data
    }
  } catch (error) {
    console.error('UPLOAD MUSIC LOCAL STORAGE PARSE ERROR', error)
  }
}

const setDataMateri = (data: string) => {
  if (!localStorage) {
    return
  }
  try {
    const lsValue = JSON.stringify(data)
    localStorage.setItem(MATERI_LOCAL_STORAGE_KEY, lsValue)
  } catch (error) {
    console.error('UPLOAD MUSIC LOCAL STORAGE SAVE ERROR', error)
  }
}

const removeDataMateri = () => {
  if (!localStorage) {
    return
  }

  try {
    localStorage.removeItem(MATERI_LOCAL_STORAGE_KEY)
  } catch (error) {
    console.error('UPLOAD MUSIC LOCAL STORAGE REMOVE ERROR', error)
  }
}

export { getDataMateri, setDataMateri, removeDataMateri, MATERI_LOCAL_STORAGE_KEY }
