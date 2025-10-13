import { observer } from "mobx-react-lite";
import { AuthView } from "../views/authView.jsx";
import { ProfileView } from "../views/ProfileView.jsx"

const Auth = observer (
	function AuthRender(props) {

		return (
			<div>
				{!props.model.user && (
				<AuthView model={props.model}/>
			)} || {props.model.user && (<ProfileView model={props.model}/>)}
			</div>
		)
	}
);

export { Auth };