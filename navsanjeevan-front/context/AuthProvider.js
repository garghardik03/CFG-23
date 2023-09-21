import React,{useState,createContext,useCallback,useEffect} from "react";

  import { useRouter } from 'next/router';

export const AuthContext = createContext()

export const AuthProvider=({children})=>{
  const router = useRouter()
  const [isLoggedIn,setIsLoggedin] = useState(false)
  const [user,setUser] = useState(null)
  const [loginInProcess,setLoginInProcess] = useState(false)




    

    return (
        <AuthContext.Provider
        value={{

            isLoggedIn,
            user,
            loginInProcess,
            login: async()=>{
                try{
                  setLoginInProcess(true)
                    //login here
                  setLoginInProcess(false)
                  setIsLoggedin(true)
                    

                }catch(e){
                  setLoginInProcess(false)
                    console.log(e)
                  setIsLoggedin(false)
                }

            },
            logout:()=>{
                try{
                    setIsLoggedin(false)
                    setUser(null)
                    router.push("/")
                }catch(e){
                    console.log(e)
                }
            }
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
