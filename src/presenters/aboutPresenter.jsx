import { observer } from "mobx-react-lite";
import { AboutUsView } from "../views/aboutView";

const About = observer(
	function AboutRender(props) {
		return (
			<div>				
				<AboutUsView model={props.model}/>
			</div>
		)
	}
);

export { About };