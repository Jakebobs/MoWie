import { observer } from "mobx-react-lite";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./views/navbarView.jsx";
import { Home } from "./presenters/homePresenter.jsx";
import { About } from "./presenters/aboutPresenter.jsx"

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
  ]);
}

export { App };