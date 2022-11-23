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
        async registerNewSource(url) {

            console.log('getting to  register', { url })
            /* try {

                const response = await fetch(url);
                let text = await response.text();




                const source = {
                    id: crypto.randomUUID(),
                    name: title.textContent,
                }

                this.sources.push(source);

            } catch (error) {
                console.log(error);

            } */
        },
        filterCharacters(name) {

            const search = name.toLowerCase();

            const filterData = this.current.items.filter((item) => item.name.toLowerCase().includes(search))

            this.current.items = [...filterData];


        },
        sortCharacters() {
            console.log('getting to sorted')
            const sortedData = this.current.items.sort((a, b) => b.id - a.id)
            this.current.items = [...sortedData];
        }
    },
});
