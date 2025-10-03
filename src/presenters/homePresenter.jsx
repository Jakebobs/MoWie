import { observer } from "mobx-react-lite";
import { HomePage } from "../views/homePageView"

const Home = observer(
	function homeRender(props) {
		function setQueryACB(value){
			props.model.setQuery(value)
		}

		function queryACB(){

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