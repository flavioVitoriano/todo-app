import { createContext, useContext } from 'react';
import { types } from "mobx-state-tree";
import LoginStore from 'pages/Logon/models';


const RootStore = types.model("RootStore",{
    loginStore: LoginStore,
});

export const RootInstance = RootStore.create({
    loginStore: {
        email: "",
        password: "",
        state: "pending"
    }
});

export const StoreContext = createContext(null);

export function useStore(mapStateToProps) {
    const store = useContext(StoreContext);

    if (typeof mapStateToProps !== 'undefined') {
        return mapStateToProps(store);
    }

    return store;
}
