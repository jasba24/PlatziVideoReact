import React from "react"
import Search from "../components/Search"
import Categories from "../components/Categories"
import Carousel from "../components/Carousel"
import CarouselItem from "../components/CarouselItem"
import useInitialState from "../hooks/useInitialState"

import "../assets/styles/Home.scss"

const API = "http://localhost:3000/initalState"

const Home = () => {
	const initialState = useInitialState(API)
	return (
		<>
			<Search />

			{initialState.mylist.length > 0 && (
				<Categories title="Mi lista">
					<Carousel>
						{initialState.originals.map(item => (
							<CarouselItem key={item.id} {...item} />
						))}
					</Carousel>
				</Categories>
			)}

			<Categories title="Tendencias">
				<Carousel>
					{initialState.trends.map(item => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>

			<Categories title="Originales de Platzi Video">
				<Carousel>
					{initialState.originals.map(item => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>
		</>
	)
}

export default Home
