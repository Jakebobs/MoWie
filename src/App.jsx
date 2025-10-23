import { observer } from "mobx-react-lite";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./views/navbarView.jsx";
import { Home } from "./presenters/homePresenter.jsx";
import { About } from "./presenters/aboutPresenter.jsx"
import { Auth } from "./presenters/authPresenter.jsx"
import { MovieDetail } from "./presenters/movieDetailPresenter.jsx";
import { Registration } from "./presenters/registerPresenter.jsx";
import { Watchlist } from "./presenters/watchlistPresenter.jsx";
import { Social } from "./presenters/socialPresenter.jsx";

const App = observer(function App(props) {
  //if (props.model.ready) {
    return (
      <div className="flexParent">
        <Navbar model={props.model}
        //user={props.model.user} 
        />
        <RouterProvider router={makeRouter(props.model)} />
      </div>
    );
 // } else {
 //   return (
  //    <div>
  //      <SuspenseView promise={"loading"} />
  //    </div>
  //  );
 // }
});

export function makeRouter(movieModel) {
  return createHashRouter([
    {
      path: "/",
      element: <Home model={movieModel} />,
    },
    {
      path: "/about",
      element: <About model={movieModel} />,
    },
    {
      path: "/auth",
      element: <Auth model={movieModel} />,
    },
    {
      path: "/movie/:id",
      element: <MovieDetail model={movieModel} />,
    },
    {
      path: "/register",
      element: <Registration model={movieModel}/>
    },
    {
      path: "/watchlist",
      element: <Watchlist model={movieModel}/>
    },  
    {
      path: "/social",
      element: <Social model={movieModel}/>
    },
  ]);
}

export { App };