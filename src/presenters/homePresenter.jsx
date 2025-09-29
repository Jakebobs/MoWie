import { observer } from "mobx-react-lite";
import { HomePage } from "../views/homePageView"

const Home = observer(
	function homeRender(props) {
		return (
			<div>
				<HomePage model={props.model}/>
			</div>
		)
	}
);

export { Home };