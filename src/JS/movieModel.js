import { resolvePromise } from "./resolvePromise";

export const movieModel = {
    query: 0,

    setQuery(query){
        this.query = query;
        console.log(this.query)
    }
}