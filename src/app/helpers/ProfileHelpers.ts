import { UserModel } from '../interface/auth.interface'

const PROFILE_LOCAL_STORAGE_KEY = 'profile-musician'

const getProfile = (): UserModel | undefined => {
	if (!localStorage) {
		return
	}

	const lsValue: string | null = localStorage.getItem(PROFILE_LOCAL_STORAGE_KEY)
	if (!lsValue) {
		return
	}

	try {
		const profile: UserModel = JSON.parse(lsValue) as UserModel
		if (profile) {
			return profile
		}
	} catch (error) {
		console.error('PROFILE LOCAL STORAGE PARSE ERROR', error)
	}
}

const setProfile = (profile: UserModel) => {
	if (!localStorage) {
		return
	}

	try {
		const lsValue = JSON.stringify(profile)
		localStorage.setItem(PROFILE_LOCAL_STORAGE_KEY, lsValue)
	} catch (error) {
		console.error('PROFILE LOCAL STORAGE SAVE ERROR', error)
	}
}

const removeProfile = () => {
	if (!localStorage) {
		return
	}

	try {
		localStorage.removeItem(PROFILE_LOCAL_STORAGE_KEY)
	} catch (error) {
		console.error('PROFILE LOCAL STORAGE REMOVE ERROR', error)
	}
}

export { getProfile, setProfile, removeProfile, PROFILE_LOCAL_STORAGE_KEY }
