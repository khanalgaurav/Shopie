import React, { useContext, useState } from "react";
import bannerList from "../assets/BannerList";

const AppContext = React.createContext();

const AppContextProvider = ({children})=> {
    
    return(
        <AppContext.Provider value={{
                bannerList
            }}>
            
            {children}
        </AppContext.Provider>
    )
}
const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext,AppContextProvider,useGlobalContext};