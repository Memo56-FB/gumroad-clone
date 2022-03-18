import { useState } from 'react'
import './Header.scss'
const Header = () => {
	const [translateMenu, setTranslateMenu] = useState('-translate-y-[1200px]')
	const [icon, setIcon] = useState({
		first: 'close-first',
    second: 'close-second'
	})
  const [showMenu, setShowMenu] = useState(false)

	const onShowMenu = () => {
    showMenu === false ? setShowMenu(true) : setShowMenu(false)
		translateMenu === '-translate-y-[0]'
			? setTranslateMenu('-translate-y-[1200px]')
			: setTranslateMenu('-translate-y-[0]')
		icon.first === 'close-first'
			? setIcon({
					first: 'open-first',
          second: 'open-second'
			  })
			: setIcon({
					first: 'close-first',
          second: 'close-second'
			  })
	}
	return (
		<>
			<figure className='hidden xl:block p-[2rem_2vw] '>
				<img
					src='https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-logo.svg'
					loading='lazy'
					alt='gumroad logo'
					className='w-full'
				></img>
			</figure>
			<header className={`${showMenu ? 'bg-black' : 'bg-white'} header z-50`}>
				<nav className='header__nav'>
					<a href='#' className='header__logo z-20'>
						<svg
							width='100%'
							height='100%'
							viewBox='0 0 220 30'
							preserveAspectRatio='xMidYMid meet'
              fill='#000'
              className={`${showMenu ? 'invert xl:invert-0' : 'invert-0'} transition-all duration-500`}
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M130.762 0.000488281C126.217 0.000488281 121.774 4.11629 121.263 10.0632V0.490748H114.736V29.3542H121.343V15.3831C121.343 11.4695 124.117 5.94888 130.762 5.94888V0.000488281Z'
								fill='currentColor'
							></path>
							<path
								d='M200.066 24.7334V4.95847H203.893C208.996 4.95847 213.143 8.14797 213.143 14.6865C213.143 21.2249 208.996 24.7334 203.893 24.7334H200.066ZM193.527 29.3582H204.691C211.548 29.3582 220 24.8929 220 14.6865C220 4.63952 211.548 0.493164 204.691 0.493164H193.527V29.3582Z'
								fill='currentColor'
							></path>
							<path
								d='M168.509 15.0058C168.509 9.74312 171.22 5.43729 175.685 5.43729C179.991 5.43729 182.383 9.74312 182.383 15.0058C182.383 20.2685 179.991 24.5743 175.685 24.5743C171.22 24.5743 168.509 20.2685 168.509 15.0058ZM161.811 15.3247C161.811 23.9364 166.276 29.9965 173.293 29.9965C178.396 29.9965 181.426 26.6475 183.021 21.2253V29.3586H189.558V0.493562H183.021V8.14837C181.586 3.04516 178.556 0.0151367 173.772 0.0151367C166.595 0.0151367 161.811 6.55362 161.811 15.3247Z'
								fill='currentColor'
							></path>
							<path
								d='M12.9175 29.9965C4.78425 29.9965 0 23.458 0 15.3247C0 6.87257 5.26268 0.0151367 15.3096 0.0151367C25.6755 0.0151367 29.184 7.03204 29.3434 11.0189H21.8481C21.6886 8.78627 19.7749 5.43729 15.1501 5.43729C10.2064 5.43729 7.01691 9.74312 7.01691 15.0058C7.01691 20.2685 10.2064 24.5743 15.1501 24.5743C19.6154 24.5743 21.5291 21.0659 22.3265 17.5574H15.1501V14.6868H30.2086V29.3586H23.6023V20.109C23.1239 23.458 21.0507 29.9965 12.9175 29.9965Z'
								fill='currentColor'
							></path>
							<path
								d='M43.6031 29.9961C37.3836 29.9961 33.5562 25.8497 33.5562 17.557V0.493164H40.2541V17.557C40.2541 21.8628 42.3273 23.936 45.8357 23.936C52.6932 23.936 55.2448 15.4838 55.2448 9.58325V0.493164H61.9427V29.3582H55.4042V18.6733C54.1284 24.5739 50.62 29.9961 43.6031 29.9961Z'
								fill='currentColor'
							></path>
							<path
								d='M101.968 0C96.2534 0 92.6485 5.52021 91.4718 10.6243C91.2706 3.78419 87.9069 0 82.5248 0C77.8749 0 73.5609 4.14674 72.4405 10.7069V0.491023H65.9111V29.3567H72.5242V19.0085C72.5242 16.443 73.5937 5.91495 80.2509 5.91495C84.5634 5.91495 85.013 9.80493 85.013 15.1223V29.3567H91.623V19.0085C91.623 16.443 92.7368 5.91495 99.3939 5.91495C103.703 5.91495 104.148 9.80493 104.148 15.1223V29.3567H110.767V12.2828C110.797 4.09175 107.905 0 101.968 0Z'
								fill='currentColor'
							></path>
							<path
								d='M144.95 0C136.389 0 130.588 6.71278 130.588 14.9982C130.588 24.1276 136.105 29.9963 144.95 29.9963C153.511 29.9963 159.415 23.2837 159.415 14.9982C159.415 5.86889 153.791 0 144.95 0ZM144.95 24.887C139.966 24.887 136.738 20.6676 136.738 14.9982C136.738 9.32883 139.977 5.10929 144.95 5.10929C149.922 5.10929 153.032 9.32883 153.032 14.9982C153.032 20.6676 149.919 24.887 144.95 24.887Z'
								fill='currentColor'
							></path>
						</svg>
					</a>
					<div className={`${translateMenu} header__nav-wrapper z-10`}>
						<ul className='header__nav__ul'>
							<li>
								<a href='#'>Features</a>
							</li>
							<li>
								<a href='#'>Pricing</a>
							</li>
							<li>
								<a href='#'>University</a>
							</li>
							<li>
								<a href='#'>Blog</a>
							</li>
							<li>
								<a href='#'>Discover</a>
							</li>
						</ul>
						<div className='header__secondary'>
							<button className='header__secondary__login'>Login</button>
							<button className='header__secondary__selling'>
								Start Selling
							</button>
						</div>
					</div>
					<button className='header__menu z-20' onClick={onShowMenu}>
						<div className={icon.first}></div>
						<div className={icon.second}></div>
					</button>
				</nav>
			</header>
		</>
	)
}
export default Header
