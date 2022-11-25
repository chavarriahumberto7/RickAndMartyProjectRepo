import { defineStore } from "pinia";

export const useCharacterStore = defineStore({
    id: "characterStore",
    state: () => {
        return {
            sources: [
            ],
            // current character actual
            current: {
                source: null,
                items: null,
                episode: null,
                totalCharacters: null,
            },
        };
    },
    // actions
    actions: {
        async loadSource(source) {
            const url = `https://rickandmortyapi.com/api/character/?page=${source}`

            const options = { method: 'GET' };

            fetch(url, options)
                .then(response => response.json())
                .then(response => {
                    const { results: characters } = response;
                    this.current.items = [...characters];
                    this.current.source = characters[0].url
                })
                .catch(err => console.error(err));
        },
        async loadEpisode(id) {

            if (id >= 0) {
                const url = `https://rickandmortyapi.com/api/episode/${id}`

                const options = { method: 'GET' };

                // console.log(url)

                fetch(url, options)
                    .then(response => response.json())
                    .then(response => {
                        this.current.episode = response;
                        this.current.totalCharacters = response.characters.reduce((acc, val) => acc + 1, 0)
                    })
                    .catch(err => console.error(err)); 
            }
            else {
                this.current.episode = null;
            }

        },
        filterCharacters(name) {

            const search = name.toLowerCase();

            const filterData = this.current.items.filter((item) => item.name.toLowerCase().includes(search))

            this.current.items = [...filterData];


        },
        sortCharacters(sortAscending) {
            let sortedData = null;
            if (sortAscending) {
                sortedData = this.current.items.sort((a, b) => b.id - a.id)
            }
            else {
                sortedData = this.current.items.sort((a, b) => a.id - b.id)
            }

            this.current.items = [...sortedData];
        }
    },
});
