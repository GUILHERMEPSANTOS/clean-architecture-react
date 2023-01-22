import { createContext } from "react";

type FormValues = {
    [field: string]: any;
};

type FormErrors<Values extends FormValues> = {
    [K in keyof Values]: string;
};

export type StateType<FormType extends FormValues> = {
    isLoading: boolean;
    values: FormType
    errors: FormErrors<FormType>
    errorMain?: string
};

export default  createContext<StateType<FormValues>>({} as StateType<FormValues>);