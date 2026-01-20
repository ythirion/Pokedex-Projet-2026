import { pokeLiteApiFetcher, fetchFiltersList, fetchPokemonByFilter } from './services/details-api'

type LitePokemon = { name: string; url: string; };
type SortMode = 'id' | 'name';
type OrderMode = 'asc' | 'desc';

let fullRepository: LitePokemon[] = [];
let filteredRepository: LitePokemon[] = [];
let currentDisplayList: LitePokemon[] = [];

