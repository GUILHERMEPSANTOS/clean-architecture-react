import { createContext } from "react";

export type StateType = {
    isLoading: boolean;
    errorMessage: string;
};

export default createContext<StateType>({} as StateType);