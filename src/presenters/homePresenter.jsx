import { observer } from "mobx-react-lite";
import { HomePage } from "../views/homePageView"

const Home = observer(
	function homeRender(props) {
		function setQueryACB(value){
			props.model.setQuery(value)
		}

		async function queryACB(){
			try {
				const response = await fetch('http://localhost:5000/api/uppercase', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ text: props.model.query }),
				});
				const data = await response.json();
				// Store the result in your model or handle it as needed
				// For example: props.model.setResult(data.result);
				console.log('Result:', data.result);
			} catch (error) {
				console.error('Error calling Python API:', error);
			}
		}


		return (
			<div>
				<HomePage model={props.model}
						  onSubmit={queryACB}
						  onSetQuery={setQueryACB}/>
			</div>
		)
	}
);

export { Home };