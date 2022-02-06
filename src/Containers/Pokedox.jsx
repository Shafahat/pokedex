import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../Components/Pokemon";
import { POKEMON_API_URL } from "../Config";
import "./Pokedox.css";


const Pokedox = () => {
	const [pokemons, setPokemons] = useState([]);
	const [loadMore, setLoadMore] = useState(POKEMON_API_URL + `?limit=16`);

	const getPokemons = () => {
		axios.get(loadMore).then((response) => {
			setLoadMore(response.data.next);
			response.data.results.forEach((pokemon) => {
				axios.get(POKEMON_API_URL + `${pokemon.name}`).then((response) => {
					let pokemon = {
						id: response.data.id,
						name: response.data.name,
						image: response.data.sprites.other.dream_world.front_default,
						type: response.data.types[0].type.name,
					};
					setPokemons((currentList) => [...currentList, pokemon]);
				});
				pokemons.sort((a, b) => a.id - b.id);
			});
		});
	};

	useEffect(() => {
		getPokemons();
	}, []);

	return (
		<div className="app-container">
			<h1>Pokemon Evolution</h1>
			<div className="pokemon-container">
				<div className="all-container">
					{pokemons.map((p, index) => (
						<Pokemon
							key={index}
							id={p.id}
							name={p.name}
							image={p.image}
							type={p.type}
						/>
					))}
				</div>
				<Button onClick={() => getPokemons()} variant="contained">
					Pokedex
				</Button>
			</div>
		</div>
	);
};

export default Pokedox;
