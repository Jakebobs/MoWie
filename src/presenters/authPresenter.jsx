import { observer } from "mobx-react-lite";
import { AuthView } from "../views/authView.jsx";

const Auth = observer (
	function AuthRender(props) {

		return (
			<div>
				<AuthView model={props.model}/>
			</div>
		)
	}
);

export { Auth };