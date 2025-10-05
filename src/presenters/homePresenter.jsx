import { observer } from "mobx-react-lite";
import { HomePage } from "../views/homePageView"

const Home = observer(
	function homeRender(props) {
		function setQueryACB(value){
			props.model.setQuery(value)
		}

		async function queryACB(){
			try {
				const response = await fetch('http://localhost:5000/api/query_n_best_matches', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ text: props.model.query }),
				});
				const data = await response.json();
				props.model.setResult(data)
				console.log('Result:', data);
			} catch (error) {
				console.error('Error calling Python API:', error);
			}
		}


		return (
			<div>
				<HomePage model={props.model}
						  result = {props.model.result}
						  onSubmit={queryACB}
						  onSetQuery={setQueryACB}/>
			</div>
		)
	}
);

export { Home };