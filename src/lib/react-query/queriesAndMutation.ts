import {
	useQuery,
	useMutation,
	useQueryClient,
	useInfiniteQuery,
} from '@tanstack/react-query'
import {
	SignInAccount,
	SignOutAccount,
	createUserAccount,
} from '../appwrite/api'
import { INewUser } from '@/types'

export const useCreateUserAccount = () => {
	return useMutation({
		mutationFn: (user: INewUser) => createUserAccount(user),
	})
}
export const useSignInAccount = () => {
	return useMutation({
		mutationFn: (user: { email: string; password: string }) =>
			SignInAccount(user),
	})
}
export const useSignOut = () => {
	return useMutation({
		mutationFn: SignOutAccount,
	})
}
