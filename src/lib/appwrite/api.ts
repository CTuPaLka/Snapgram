import { INewPost, INewUser } from '@/types'
import { ID, Query } from 'appwrite'
import { account, appwriteConfig, avatars, databases, storage } from './config'

export async function createUserAccount(user: INewUser) {
	try {
		const newAccount = await account.create(
			ID.unique(),
			user.email,
			user.password,
			user.name
		)

		if (!newAccount) throw Error

		const avatarUrl = avatars.getInitials(user.name)

		const newUser = await saveUserToDB({
			accountId: newAccount.$id,
			email: newAccount.email,
			name: newAccount.name,
			username: user.username,
			imageUrl: avatarUrl,
		})

		return newAccount
	} catch (error) {
		console.log(error)
		return error
	}
}

export async function saveUserToDB(user: {
	accountId: string
	email: string
	name: string
	imageUrl: URL
	username?: string
}) {
	try {
		const newUser = await databases.createDocument(
			appwriteConfig.databaseId,
			appwriteConfig.userCollectionId,
			ID.unique(),
			user
		)

		return newUser
	} catch (error) {
		console.log(error)
	}
}

export async function SignInAccount(user: { email: string; password: string }) {
	try {
		const session = await account.createEmailSession(user.email, user.password)

		return session
	} catch (error) {
		console.log(error)
	}
}

export async function getCurrentUser() {
	try {
		const currentAccount = await account.get()

		if (!currentAccount) throw Error

		const currentUser = await databases.listDocuments(
			appwriteConfig.databaseId,
			appwriteConfig.userCollectionId,
			[Query.equal('accountId', currentAccount.$id)]
		)

		if (!currentUser) throw Error

		return currentUser.documents[0]
	} catch (error) {
		console.log(error)
	}
}

export async function SignOutAccount() {
	try {
		const session = await account.deleteSession('current')
		return session
	} catch (error) {
		console.log(error)
	}
}

// =============================================
// Posts
// =============================================

// ==================================CREATE POST

export async function createPost(post: INewPost) {
	try {
		//upload image to storage
		const uploadedFile = await uploadFile(post.file[0])
		3.21.50
	} catch (e) {
		console.log(error)
	}
}

export async function uploadFile(file: File) {
	try {
		const uploadedFiel = await storage.createFile(
			appwriteConfig.storageId,
			ID.unique(),
			file
		)
	} catch (e) {
		console.log(error)
	}
}
