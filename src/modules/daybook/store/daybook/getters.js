// export const myGetter = (state) =>{

//return state.algo

// }

//Getters para devolver informacion del state al componente.

//TODO COMENTAR LA DOBLE FUNCION
export const getEntriesByTerm = (state) => (term = '') => {

    if (term.length === 0) {
        return state.entries
    } else {
        return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLowerCase()))
    }
}

export const getEntryById = (/*state*/) => {

    //return state.algo

}