import { useEffect, useState } from 'react'
import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
	return (
		<>
			<Header />
			<main>
				<section className='grid lg:grid-cols-2 bg-white  lg:mt-20 xl:mt-0'>
					<div className='px-6 lg:px-[6.5vw] pb-20 bg-ex_pink pt-28 grid gap-y-8 border-b-2 lg:border-b-0 lg:border-r-2 lg border-black'>
						<h2 className='text-center text-6xl lg:text-left lg:text-7xl xl:text-8xl 2xl:text-9xl'>
							Go from zero to $1
						</h2>
						<p className='text-xl text-center lg:text-2xl lg:text-left 2xl:text-3xl'>
							With Gumroad, anyone can earn their first dollar online. Just
							start with what you know, see what sticks, and get paid. It’s that
							easy.
						</p>
						<button className='py-3 px-6 bg-black text-white rounded-md xl:w-3/5 xl:py-1 xl:px-2 xl:text-2xl 2xl:self-center 2xl:py-8'>
							Start Selling
						</button>
					</div>
					<div className='grid lg:gap-y-16 bg-ex_yellow px-6 pt-16 pb-20 lg:pb-4 overflow-x-hidden'>
						<figure className='relative w-full lg:w-10/12 lg:justify-self-center'>
							<img
								src='https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61942b84ec3d406199f07d78_vegalia.png'
								alt='mujes afroamericana'
							/>
							<img
								src='https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619f97a0f047aaa46093f3b3_paint-brush.svg'
								alt='brocha gruesa'
								className='absolute -right-7 top-6 w-[5.5rem] lg:w-[35%] xl:w-1/5 lg:top-16'
							/>
							<img
								src='https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/6195275a9e5f4655891de886_gum-coins.svg'
								alt='monedas con una g'
								className='absolute w-36 -bottom-14 left-0 lg:w-1/2 xl:w-1/3 lg:-bottom-8'
							/>
							<button className='flex items-center gap-x-2 py-1 px-2 lg:py-2 lg:px-4 xl:text-2xl rounded-full border-2 border-black bg-white absolute right-0 bottom-0 lg:bottom-12 lg:-right-10'>
								<img
									src='https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/6183f718541d5d3584e9f6da_g.svg'
									alt='moneda morada con una G'
									className='w-7'
								/>
								Vegalia
							</button>
						</figure>
						<p className='hidden lg:block'>Vegalia sells Procreate Brushes</p>
					</div>
					<div className='text-animated'>
						<p>
							See what sticks <span>•</span>
						</p>
						<p>
							See what sticks <span>•</span>
						</p>
						<p>
							See what sticks <span>•</span>
						</p>
						<p>
							See what sticks <span>•</span>
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default App
