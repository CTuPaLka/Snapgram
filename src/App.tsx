import { Route, Routes } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'

const App = () => {
	return (
		<main className='flex h-screen'>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path='/sign-in' element={<SigninForm />} />
					<Route path='/sign-up' element={<SignupForm />} />
				</Route>
				{/* public routes */}

				{/* private routes */}
				<Route element={<RootLayout />}>
					<Route path='/' element={<Home />} />
				</Route>
			</Routes>
		</main>
	)
}

export default App
