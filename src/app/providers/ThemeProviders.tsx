'use client';

import { error } from "console";
import { createContext,useContext,useEffect,ReactNode, useState } from "react";

//state theme
interface themeContextProps {
    theme : string;
    toggleTheme:() => void;
}
const ThemeContext = createContext<themeContextProps | undefined>(undefined);

//provider pembungkus
export function ThemeProvider ({children}: {children: ReactNode}){
    const [theme,setTheme] =  useState('light');
//detektor preferensi user
useEffect(() => {
    if(typeof window !== 'undefined'){
        const storedTheme = localStorage.getItem('theme');
        if(storedTheme){
            setTheme(storedTheme);
        } else if(window.matchMedia('(prefers-color-scheme:dark)').matches){
            setTheme('dark');
        }
    }
},[]);
//simpan tema distorage dan bisa dipakai untuk mengubah diclass
useEffect(()=>{
    const root = document.documentElement;
    if(theme === 'dark'){
        root.classList.add('dark');
        localStorage.setItem('theme','dark');
    }else {
        root.classList.remove('dark');
        localStorage.setItem('theme','light');
    }
},[theme]);

const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
};
return(
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
);
}

//custom hook untuk di component lain
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(context === undefined){
        throw new Error('useTheme Harus sama yang ada di ThemeProvider');
    }
    return context;
};