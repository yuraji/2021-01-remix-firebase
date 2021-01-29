import { createContext, useEffect, useReducer } from "react";

const initialState: any = {
    user: 0
};

export const AppStateContext = createContext(initialState);

const reducer = (state, payload) => ({ ...state, ...payload });

export const AppStateProvider = ({ children }: any) => {
    const theReducer = useReducer(reducer, initialState);
    const [state, setState] = theReducer;
    const onAuthStateChanged = user => {
        setState({user})};
    useEffect(() => (window as any).firebase.auth().onAuthStateChanged(onAuthStateChanged), []);

    return (
        <AppStateContext.Provider value={theReducer}>{children}</AppStateContext.Provider>
    )
}