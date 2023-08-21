import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//Animation
import { motion } from 'framer-motion';
import { useScroll } from '../components/useScroll';
import {
  pageAnimation,
  fade,
  lineAnim,
  sliderContainer,
  movieContainer,
  slider,
} from '../animation';
import ScrollTop from '../components/ScrollTop';

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: '#fff' }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      
      <Movie variants={movieContainer}>
        <motion.h2 variants={fade}>................................................................................................</motion.h2>
        <Link to="/work/vlsi">   
        <h2>VLSI Design</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        </Link>
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element}
        variants={movieContainer}
        animate={controls}
        initial="hidden"
      >
        <Link to="/work/comp_architecture">
        <h2>Computer Architecture</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        
        </Link>
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element2}
        variants={movieContainer}
        animate={controls2}
        initial="hidden"
      >
        <Link to="/work/vbnp">

        <h2>Visual Based Net Programming</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        </Link>
      </Movie>

      <Movie
        ref={element2}
        variants={movieContainer}
        animate={controls2}
        initial="hidden"
      >
        <Link to="/work/stat">

        <h2>Computer Fundamentals and Statistics</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  overflow: hidden;
  padding: 5rem 10rem;

  @media (max-width: 1500px) {
    padding: 2rem 2rem;
  }
`;

const Movie = styled(motion.div)`

  padding-bottom: 3rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

`;


const Hide = styled.div`
  overflow: hidden;
`;
//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
