import type {APIListResponse, Pokemon} from "../type/poke-type.ts";

export async function getListPokemons () : Promise<APIListResponse | null> {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0");
        return await response.json() as APIListResponse;
    } catch (error) {
        console.error(error);
        return null;
    }
}


export async function getPokemon () {
    try {

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10000}");
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
}