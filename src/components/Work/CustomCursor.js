import React from 'react'
import styled from 'styled-components'
import { useMousePosition } from '../../hooks/useMousePosition'
import { motion } from 'framer-motion';

function CustomCursor() {
       const {x,y} = useMousePosition();
  return (
   <CursorStyles 
   animate={{top:y, left:x,}}
   transition={{ ease:"linear", duration: 0.15 }}
   />
  )
}

export default CustomCursor

const CursorStyles = styled(motion.div)`
position:absolute;
left:0;
top:0;
padding:20px;
width: 5px;
height: 5px;
border-radius:100%;
background-color: var(--grey);
border: 0.1vw solid var(--black);
z-index:20;

`