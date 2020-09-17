import { createContext, useContext } from 'react';
import { types } from "mobx-state-tree";


const RootStore = types.model("RootStore", {

});

export const RootInstance = RootStore.create();
export const StoreContext = createContext({ store: RootInstance });
export const useStore = () => useContext(StoreContext).store;
