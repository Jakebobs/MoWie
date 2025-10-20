import { resolvePromise } from "./resolvePromise";

export const movieModel = {
    baseQuery: 0,
    result: 0,
    selectedTopics: [],
    selectedVibes: [],
    selectedGenres: [],
    selectedMoods: [],
    energyLevel: 50,
    attentionLevel: 50,

    testMovies: [
        { id: 1, title: "Dune: Part Two", year: 2024, genre: "Thriller", rt_rating: 5, imdb_rating: 10},
        { id: 2, title: "Oppenheimer", year: 2023, genre: "Thriller", rt_rating: 5, imdb_rating: 10},
        { id: 3, title: "Barbie", year: 2023, genre: "Thriller", rt_rating: 5, imdb_rating: 10},
        { id: 4, title: "Joker: Folie à Deux", year: 2025, genre: "Thriller", rt_rating: 5, imdb_rating: 10},
    ],

    topics: [
        "Break-up",
        "Political",
        "Sad Crime",
    ],

    randomTopics: [],

    setQuery(query){
        this.baseQuery = query;
    },

    setResult(result){
        this.result = result;
    },

    setRandomTopics(){
        const shuffled = [...this.topics].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 6);
        this.randomTopics = selected;
    },

    toggleVibe(vibe) {
    const index = this.selectedVibes.indexOf(vibe);
    if (index > -1) {
        this.selectedVibes.splice(index, 1);
    } else {
        this.selectedVibes.push(vibe);
    }},

    clearVibes() {
        this.selectedVibes = [];
    },

    toggleGenre(genre) {
        const index = this.selectedGenres.indexOf(genre);
        if (index > -1) {
            this.selectedGenres = this.selectedGenres.filter(g => g !== genre);
        } else {
            this.selectedGenres = [...this.selectedGenres, genre];
        }
    },

    clearGenres() {
        this.selectedGenres = [];
    },

    toggleMood(mood) {
        const index = this.selectedMoods.indexOf(mood);
        if (index > -1) {
            this.selectedMoods = this.selectedMoods.filter(m => m !== mood);
        } else {
            this.selectedMoods = [...this.selectedMoods, mood];
        }
    },

    resetMood() {
        this.selectedMoods = [];
        this.energyLevel = 50;
        this.attentionLevel = 50;
    },

    setEnergy(value) {
        this.energyLevel = value;
    },

    setAttention(value) {
        this.attentionLevel = value;
    },

}