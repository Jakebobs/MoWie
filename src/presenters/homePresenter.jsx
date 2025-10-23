import { observer } from "mobx-react-lite";
import { HomePage } from "../views/homePageView"

const Home = observer(
	function HomeRender(props) {
		function setQueryACB(value){
			props.model.setQuery(value)
		}

		function setTopicsACB(){
			props.model.setRandomTopics()
		}

		async function queryACB(){
			try {
				props.model.setLoading(true);
				const response = await fetch('http://localhost:5000/api/query_n_best_matches', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ 
						text: props.model.baseQuery,
						selectedTopics: props.model.selectedTopics,
						selectedVibes: props.model.selectedVibes,
						selectedGenres: props.model.selectedGenres,
						selectedMoods: props.model.selectedMoods,
						energyLevel: props.model.energyLevel,
						attentionLevel: props.model.attentionLevel,
						hasSetLevels: props.model.hasSetLevels,
     				 }),
				});
				const data = await response.json();
				props.model.setResult(data)
				console.log('Result:', data);
			} catch (error) {
				console.error('Error calling Python API:', error);
			} finally{
				props.model.setLoading(false);
			}
		}

		function topicToggleACB(topic) {
			props.model.toggleTopic(topic);
		}

		function vibeToggleACB(vibe) {
			props.model.toggleVibe(vibe);
		}

		function vibesClearACB() {
			props.model.clearVibes();
		}

		function genreToggleACB(genre) {
			props.model.toggleGenre(genre);
		}

		function genresClearACB() {
			props.model.clearGenres();
		}

		function moodToggleACB(mood) {
			props.model.toggleMood(mood);
		}

		function energyChangeACB(value) {
			props.model.setEnergy(value);
		}

		function attentionChangeACB(value) {
			props.model.setAttention(value);
		}

		function moodResetACB() {
			props.model.resetMood();
		}

		function movieSelectACB(movie) {
    		props.model.setSelectedMovie(movie);
		}

		function vibeAddACB(vibe) {
    		props.model.addCustomVibe(vibe);
		}

		return (
			<div>
				<HomePage 
					model={props.model}
					result={props.model.result}
					testMovies={props.model.testMovies}
					randomTopics={props.model.randomTopics}
					selectedVibes={props.model.selectedVibes}
					selectedGenres={props.model.selectedGenres}
					selectedMoods={props.model.selectedMoods}
					selectedTopics={props.model.selectedTopics}
					energyLevel={props.model.energyLevel}
					attentionLevel={props.model.attentionLevel}
					isLoading={props.model.isLoading} 
					onSubmit={queryACB}
					onSetQuery={setQueryACB}
					onLoadTopics={setTopicsACB}
					onVibeToggle={vibeToggleACB}
					onVibesClear={vibesClearACB}
					onGenreToggle={genreToggleACB}
					onGenresClear={genresClearACB}
					onMoodToggle={moodToggleACB}
					onEnergyChange={energyChangeACB}
					onAttentionChange={attentionChangeACB}
					onMoodReset={moodResetACB}
					onTopicToggle={topicToggleACB}
					onMovieSelect={movieSelectACB}
					onVibeAdd={vibeAddACB}
					
				/>
			</div>
		)
	}
);

export { Home };