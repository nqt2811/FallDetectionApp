import { createContext } from "react";

const LoginContext = createContext();

const LoginProvider = ({children, value}) => {
    return (
        <LoginContext.Provider>
            {children}
        </LoginContext.Provider>
    )
}

export default { LoginProvider };
