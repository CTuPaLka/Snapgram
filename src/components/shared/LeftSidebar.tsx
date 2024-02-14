import { sidebarLinks } from '@/constants'
import { useUserContext } from '@/context/AuthContext'
import { useSignOut } from '@/lib/react-query/queriesAndMutation'
import { INavLink } from '@/types'
import { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const LeftSidebar = () => {
	const { mutate: signOut, isSuccess } = useSignOut()
	const navigate = useNavigate()
	const { user } = useUserContext()

	useEffect(() => {
		if (isSuccess) navigate(0)
	}, [isSuccess])

	return (
		<nav className='leftsidebar gap-10'>
			<div className='flex flex-col gap-11'>
				<Link to='/' className='flex gap-3 items-center'>
					<img
						src='/assets/images/logo.svg'
						alt='logo'
						width={170}
						height={36}
					/>
				</Link>

				<Link to={`/profile/${user.id}`} className='flex gap-3 items-center'>
					<img
						src={
							user.imageUrl || '/public/assets/icons/profile-placeholder.svg'
						}
						alt='profile'
						className='h-14 w-14 rounded-full'
					/>
					<div className='flex flex-col'>
						<p className='body-bold'>{user.name}</p>
						<p className='small-regular text-light-3'>@{user.username}</p>
					</div>
				</Link>
			</div>

			<ul className='flex flex-col gap-6'>
				{sidebarLinks.map((link: INavLink) => {
					return (
						<li key={link.label} className='leftsidebar-link'>
							<NavLink to={link.route}>{link.label}</NavLink>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default LeftSidebar
