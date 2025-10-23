import { observer } from "mobx-react-lite";
import { RegisterView } from "../views/registerView";

const Registration = observer(function RegistrationRender(props) {
  return (
    <div>
        <RegisterView model={props.model}/>
    </div>
  );
});

export { Registration };