import { observer } from "mobx-react-lite";
import { WatchlistView } from "../views/watchlistView";

const Watchlist = observer(function WatchlistRender(props) {
    function movieSelectACB(movie) {
        props.model.setSelectedMovie(movie);
    }

    return (
        <div>
            <WatchlistView 
                model={props.model}
                watchlist={props.model.watchlist}
                onMovieSelect={movieSelectACB}
            />
        </div>
    );
});

export { Watchlist };