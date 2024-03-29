import rootred from "../reducers/main";
import { guardarLocalStorage, obtenerLocalStorage } from "../../utils";
import { createStore } from "redux";

const storageState = obtenerLocalStorage();

const store = createStore(
    rootred,
    storageState
);

store.subscribe(() => {
    guardarLocalStorage(
        {
            user: store.getState().user
        }
    )
})

export default store;