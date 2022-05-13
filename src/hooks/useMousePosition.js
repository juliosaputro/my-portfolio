import {useEffect, useState} from 'react'


export const useMousePosition = () => {
       const [mousePosition, setMousePosition] = useState({x: -100, y:-100});
       const [hoverNav, setHoverNav] = useState(false);

       useEffect(() => {
              const handlePosition = (e) => {
                     setMousePosition({x: e.clientX, y: e.clientY});
                    
                     if(e.target.tagname==='A'){
                            setHoverNav(true)
                     }else{
                            setHoverNav(false)
                     }
              }

              window.addEventListener("mousemove", handlePosition);

              return () => 
                     window.removeEventListener("mousemove", handlePosition)
              
       }, []);

       return {...mousePosition, hoverNav};
}