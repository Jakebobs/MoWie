import { observer } from "mobx-react-lite";
import { SocialView } from "../views/socialView";

const Social = observer(
    function SocialRender(props) {
        return (
            <div>				
                <SocialView model={props.model}/>
            </div>
        )
    }
);

export { Social };