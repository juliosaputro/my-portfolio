import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAnimations } from "../../hooks/useAnimations";

function BigText() {
       const {transition,textReveal} = useAnimations();
  return (
    <BigTextStyles>
      <div className="container">
        <motion.h1
         variants={textReveal}
        initial="bananin"
        animate="bananon"
        transition={{ ...transition, delay:1 }}
        >FrontEnd</motion.h1>
      </div>
      <div className="container">
        <motion.h1 
        variants={textReveal}
        initial="bananin"
        animate="bananon"
        transition={{ ...transition, delay:1.2 }}
        >Developer</motion.h1>
      </div>
      <div className="container">
        <motion.h1
         variants={textReveal}
        initial="bananin"
        animate="bananon"
        transition={{ ...transition, delay:1.4 }}
        >Based In</motion.h1>
      </div>
      <div className="container">
        <motion.h1
         variants={textReveal}
        initial="bananin"
        animate="bananon"
        transition={{ ...transition, delay:1.6 }}
        >Yogyakarta</motion.h1>
      </div>
    </BigTextStyles>
  );
}

export default BigText;

const BigTextStyles = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  display: 'flex';
  flex-wrap: wrap;
  padding:3vw;

  .container {
    text-transform: uppercase;
    width: 100%;
    overflow:hidden;
    padding: 1vw;

    :nth-child(1) {
           margin-left: 5vw;
    }
    :nth-child(2) {
           margin-left: 10vw;
    }
    :nth-child(3) {
           margin-left: 15vw;
    }
    :nth-child(4) {
           margin-left: 5vw;
    }

    h1 {
           font-size: 10vw;
           height: 10vw;
           line-height: 10vw;
           letter-spacing: 1vw;
           ${'' /* background: var(--grey); */}
    }
  }
`;
