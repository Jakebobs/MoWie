import { observer } from "mobx-react-lite";
import { MovieDetailView } from "../views/movieDetailView";

const MovieDetail = observer(function MovieDetailRender(props) {
    function addToWatchlistACB(){
        props.model.addToWatchlist()
    }

    const isInWatchlist = props.model.isInWatchlist();
        
    return (
        <div>
            <MovieDetailView 
                model={props.model}
                isInWatchlist={isInWatchlist}
                selectedMovie={props.model.selectedMovie}
                onAddToWatchlist={addToWatchlistACB}
            />
        </div>
    );
});

export { MovieDetail };