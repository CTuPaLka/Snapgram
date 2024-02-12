import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

const queryQlient = new QueryClient()

export const QueryProvider = ({ children }: { children: ReactNode }) => {
	return (
		<QueryClientProvider client={queryQlient}>{children}</QueryClientProvider>
	)
}
