import { resolvePromise } from "./resolvePromise";

export const movieModel = {
    query: 0,
    result: 0,
    testMovies: [
        { id: 1, title: "Dune: Part Two", year: 2024, genre: "Thriller", rt_rating: 5, imdb_rating: 10},
        { id: 2, title: "Oppenheimer", year: 2023, genre: "Thriller", rt_rating: 5, imdb_rating: 10},
        { id: 3, title: "Barbie", year: 2023, genre: "Thriller", rt_rating: 5, imdb_rating: 10},
        { id: 4, title: "Joker: Folie à Deux", year: 2025, genre: "Thriller", rt_rating: 5, imdb_rating: 10},
    ],

    setQuery(query){
        this.query = query;
        console.log(query)
    },

    setResult(result){
        this.result = result;
    },
}