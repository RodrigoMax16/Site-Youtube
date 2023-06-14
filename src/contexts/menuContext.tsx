import { createContext, useState } from "react";

export const OpenMenuContext = createContext({} as any);


export const OpenMenuStorage = ({ children }: any) => {
    const [openMenu, setOpenMenu] = useState(false);
    
    return (
        <OpenMenuContext.Provider value={{ 
            openMenu, setOpenMenu
        }}>
            {children}
        </OpenMenuContext.Provider>
    )
} 
