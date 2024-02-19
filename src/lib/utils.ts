import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatTimeAgo(dateString: string): string {
	const date: Date = new Date(dateString)
	const now: Date = new Date()

	const seconds = Math.floor((now - date) / 1000)
	const minutes = Math.floor(seconds / 60)
	const hours = Math.floor(minutes / 60)
	const days = Math.floor(hours / 24)

	if (days > 0) {
		return `${days} day${days > 1 ? 's' : ''} ago`
	} else if (hours > 0) {
		return `${hours} hour${hours > 1 ? 's' : ''} ago`
	} else if (minutes > 0) {
		return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
	} else {
		return 'just now'
	}
}

export const checkIsLiked = (likeList: string[], userId: string) => {
	return likeList.includes(userId)
}
