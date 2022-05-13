import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAnimations } from "../../hooks/useAnimations";

function BigText() {
  const { transition, textReveal } = useAnimations();
  return (
    <BigTextStyles>
      <div className="container">
        <motion.h1
        data-text="FrontEnd"
          variants={textReveal}
          initial="bananin"
          animate="bananon"
          transition={{ ...transition, delay: 1 }}
        >
          FrontEnd
        </motion.h1>
      </div>
      <div className="container">
        <motion.h1
        data-text="Developer"
          variants={textReveal}
          initial="bananin"
          animate="bananon"
          transition={{ ...transition, delay: 1.2 }}
        >
          Developer
        </motion.h1>
      </div>
      <div className="container">
        <motion.h1
        data-text="Based in"
          variants={textReveal}
          initial="bananin"
          animate="bananon"
          transition={{ ...transition, delay: 1.4 }}
        >
          Based In
        </motion.h1>
      </div>
      <div className="container">
        <motion.h1
          data-text="Yogyakarta"
          variants={textReveal}
          initial="bananin"
          animate="bananon"
          transition={{ ...transition, delay: 1.6 }}
        >
          Yogyakarta
        </motion.h1>
      </div>
    </BigTextStyles>
  );
}

export default BigText;

const BigTextStyles = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  display: "flex";
  flex-wrap: wrap;
  padding: 3vw;

  .container {
    text-transform: uppercase;
    width: 100%;
    overflow: hidden;
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
      position: relative;
      background: linear-gradient(to right, #012a4a, #013a63);
      font-size: 10vw;
      height: 10vw;
      line-height: 10vw;
      letter-spacing: 1vw;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h1:before,
    h1:after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
    }

    h1:before {
      z-index: -1;
      text-shadow: -0.001em -0.001em 1px rgb(204,204,205);
    }

    h1:after {
      z-index: -2;
      text-shadow: 10px 10px 10px #1e5770,
        20px 20px 20px #1b4e64, 30px 30px 30px #184559;
      mix-blend-mode: multiply;
    }
  }
`;
