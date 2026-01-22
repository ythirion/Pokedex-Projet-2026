import { getListPokemons } from './service/specifyAPI'


type LitePokemon = { name: string; url: string; };

let fullRepository: LitePokemon[] = [];
let currentDisplayList: LitePokemon[] = [];

async function affichage () {
    try {
        const limit = 15;
        const offset = 0;
        const response = await getListPokemons(limit, offset);

        if (response && response.results) {
            fullRepository = response.results;
            currentDisplayList = [...fullRepository];

            console.log("Voici la liste brute :", currentDisplayList);

            if (currentDisplayList.length > 0) {
                console.log(`Le premier Pokémon est : ${currentDisplayList[0].name}`);
            }
        }
        return currentDisplayList;
    } catch (error) {
        console.error(error);
    }
}



export async function chargerPokedex() {

    const data = await getListPokemons();
    const container = document.getElementById("pokedex-container");

    const pokemon = affichage();
    let displayHTML = "";

    data.results.forEach((pokemon, index) => {
        console.log(pokemon.name);
        const id = index + 1;
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        displayHTML += `
            <a href="../html/card.html?id=${id}"><div class="carte">
                <img src="${image}" alt="${pokemon.name}">
                <h3>${pokemon.name}</h3>
            </div></a>
        `;
    });

    container.innerHTML = toutLeHTML;
}


//const prev = page === 1 ? undefined : page - 1;
//const next = page === pages.length ? undefined : page + 1;