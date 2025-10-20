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
        "Korean Thriller",
        "Survival Game",
        "Scary Zombies",
        "Feel-Good Romance",
        "Mind-Bending Sci-Fi",
        "Psychological Horror",
        "Historical Epic",
        "Coming-of-Age",
        "Road Trip",
        "Wholesome Family",
        "Dystopian Future",
        "Slow-Burn Mystery",
        "Dark Comedy",
        "Heartwarming Friendship",
        "Epic Fantasy",
        "Superhero Drama",
        "Revenge Story",
        "Post-Apocalyptic",
        "Cyberpunk City",
        "Gritty Detective",
        "Sports Underdog",
        "High School Drama",
        "Time Travel",
        "Dreamlike Reality",
        "Found Footage",
        "Surreal Adventure",
        "True Crime",
        "Political Satire",
        "Quiet Melancholy",
        "Feel-Good Adventure",
        "Summer Romance",
        "Winter Solitude",
        "Haunting Ghost Story",
        "Space Exploration",
        "Psychological Thriller",
        "Black Comedy",
        "Musical Drama",
        "War and Redemption",
        "Heist Gone Wrong",
        "Forbidden Love",
        "Classic Noir",
        "Gothic Romance",
        "Retro Sci-Fi",
        "Alien Invasion",
        "Cult Classic",
        "Family Reunion",
        "Underdog Triumph",
        "Mystical Legends",
        "Western Showdown",
        "Rom-Com Chaos",
        "Holiday Spirit",
        "Lonely Wanderer",
        "Lost in Translation",
        "Creepy Small Town",
        "Royal Intrigue",
        "Magical Realism",
        "Chamber Drama",
        "Alternate Universe",
        "Artificial Intelligence",
        "Outlaw Love",
        "Tragic Hero",
        "Girl Power",
        "Political Conspiracy",
        "Haunted Mansion",
        "Coming Home",
        "Artistic Struggle",
        "Environmental Apocalypse",
        "Urban Grit",
        "Love Across Time",
        "Cosmic Horror",
        "Philosophical Sci-Fi",
        "Intimate Character Study",
        "Isolation & Survival",
        "Found Family",
        "Retro Aesthetic",
        "Dreamlike Cinematography",
        "Musician’s Journey",
        "War Journalism",
        "Corporate Greed",
        "Tech Gone Wrong",
        "Cultural Clash",
        "Escaping the Past",
        "Spiritual Quest",
        "Modern Fairytale",
        "Toxic Friendship",
        "Lost Civilization",
        "Rebellion & Revolution",
        "Ancient Curse",
        "Detective Mystery",
        "Grief and Healing",
        "Surreal Nightmare",
        "Underworld Crime",
        "Secret Identity",
        "Forbidden Knowledge",
        "Eternal Love",
        "Nature’s Wrath",
        "Retro Horror",
        "Legendary Samurai",
        "Cold War Espionage",
        "Myth Reimagined",
        "Island Survival",
        "Fallen Celebrity",
        "Haunted Technology",
        "Unexpected Friendship",
        "Twisted Romance",
        "Rural Horror",
        "Man vs. Machine",
        "Lost in Space",
        "Whimsical Comedy",
        "Cinematic Silence",
        "Broken Dreams",
        "The Last Stand"
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

    toggleTopic(topic) {
        const index = this.selectedTopics.indexOf(topic);
        if (index > -1) {
            this.selectedTopics.splice(index, 1); 
        } else {
            this.selectedTopics.push(topic); 
        }
    },

}