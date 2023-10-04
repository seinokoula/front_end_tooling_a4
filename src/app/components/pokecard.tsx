import React, { FC } from 'react';

interface TypeStyles {
	[key: string]: string;
}

interface TypeStyles {
	normal: string;
	fire: string;
	water: string;
	electric: string;
	grass: string;
	ice: string;
	fighting: string;
	poison: string;
	ground: string;
	flying: string;
	psychic: string;
	bug: string;
	rock: string;
	ghost: string;
	dragon: string;
	dark: string;
	steel: string;
	fairy: string;
}

interface Pokemon {
	id: number;
	name: string;
	sprites: {
		other: {
			home: {
				front_default: string;
			};
		};
	};
	types: {
		type: {
			name: string;
		};
	}[];
}

interface PokecardProps {
	pokemon: Pokemon;
}

const types: TypeStyles = {
	normal: 'px-2 py-1 rounded bg-type-normal',
	fire: 'px-2 py-1 rounded bg-type-fire',
	water: 'px-2 py-1 rounded bg-type-water',
	electric: 'px-2 py-1 rounded bg-type-electric',
	grass: 'px-2 py-1 rounded bg-type-grass',
	ice: 'px-2 py-1 rounded bg-type-ice',
	fighting: 'px-2 py-1 rounded bg-type-fighting',
	poison: 'px-2 py-1 rounded bg-type-poison',
	ground: 'px-2 py-1 rounded bg-type-ground',
	flying: 'px-2 py-1 rounded bg-type-flying',
	psychic: 'px-2 py-1 rounded bg-type-psychic',
	bug: 'px-2 py-1 rounded bg-type-bug',
	rock: 'px-2 py-1 rounded bg-type-rock',
	ghost: 'px-2 py-1 rounded bg-type-ghost',
	dragon: 'px-2 py-1 rounded bg-type-dragon',
	dark: 'px-2 py-1 rounded bg-type-dark',
	steel: 'px-2 py-1 rounded bg-type-steel',
	fairy: 'px-2 py-1 rounded bg-type-fairy',
};

const Pokecard: FC<PokecardProps> = ({ pokemon }) => {
	return (
		<div className="rounded-lg h-[180px] p-4 bg-slate-400 bg-pokeball-white drop-shadow-lg relative flex flex-col justify-center items-center hover:bg-slate-300 hover:border duration-100">
			<div className="absolute translate-1/2 -top-8 sm:-top-12 xl:-top-16 w-1/3 h-1/3">
				<img src={pokemon.sprites.other.home.front_default} className="object-contain" />
			</div>

			<div className="text-center">
				<p className="opacity-20 font-bold">N°{pokemon.id}</p>
				<h3 className="capitalize text-xl font-medium text-white">{pokemon.name}</h3>
				<div className="flex justify-center items-center uppercase text-xs gap-2 text-slate-200 mt-2">
					{pokemon.types.map((type) => {
						return (
							<p key={type.type.name} className={types[type.type.name]}>
								{type.type.name}
							</p>
						);
					})}
				</div>
			</div>
			<a href={'/pokedex/' + pokemon.id} className="after:absolute after:inset-0"></a>
		</div>
	);
};

export default Pokecard;