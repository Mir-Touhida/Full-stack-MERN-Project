import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.init";

export const AuthContext= createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setuser]= useState([]);
    const createuser =(email, password)=>{
        return createUserWithEmailAndPassword(auth,email, password);
    };
    const authInfo={
        createuser,
    };
    return 
       
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider> 
    
};

export default AuthProvider;

