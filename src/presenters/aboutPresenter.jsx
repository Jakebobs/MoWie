import { observer } from "mobx-react-lite";
import { AboutUs } from "../views/aboutView";

const About = observer(
	function AboutRender(props) {
		return (
			<div>				
				<AboutUs model={props.model}/>
			</div>
		)
	}
);

export { About };