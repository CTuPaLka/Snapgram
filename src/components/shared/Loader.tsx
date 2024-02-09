type Props = {}

const Loader = (props: Props) => {
	return (
		<div className='felx-center w-full'>
			<img
				src='/public/assets/icons/loader.svg'
				alt='loader'
				width={24}
				height={24}
			/>
		</div>
	)
}

export default Loader