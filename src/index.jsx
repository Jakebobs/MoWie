import { createRoot } from "react-dom/client";
import { observable, configure, reaction } from "mobx";
import { App } from "./App";
import { movieModel} from "./JS/movieModel.js";
import { connectToPersistence } from "./JS/firestoreModel.js";
configure({enforceActions:"never"})

const reactiveModel = observable(movieModel);

//connectToPersistence(reactiveModel, reaction)
createRoot(document.getElementById('root')).render(<App model={reactiveModel} />);  