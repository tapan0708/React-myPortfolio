import React from 'react';
import "./Hero.scss";
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter'

function Hero() {
    const variantsLeftSide = {
        initial: {
            opacity: 0, x: -100
        },
        whileInView: {
            opacity: 1, x: 0,
            transition: {
                duration: 1.5,
                delay: 0.2
            }
        }
    }
    const variantsRightSide = {
        initial: {
            opacity: 0, x: 100
        },
        whileInView: {
            opacity: 1, x: 0,
            transition: {
                duration: 1.5,
                delay: 0.2
            }
        }
    }
    return (
        <div className='hero-container'>
            <div className="wrapper">
                <motion.div className='text-container h100' variants={variantsLeftSide} initial="initial" whileInView="whileInView">
                    <h2>Tapan Vyas</h2>
                    <h1>
                        I'm {' '}
                        <span style={{ color: 'orange' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Front-end Developer', 'UI Developer', 'Web developer']}
                                loop={Infinity}
                                cursor
                                cursorStyle='_'
                                typeSpeed={100}
                                deleteSpeed={100}
                                delaySpeed={1500}
                            // onLoopDone={handleDone}
                            // onType={handleType}
                            />
                        </span>
                    </h1>
                    <div className='about-text'>
                        <p>
                            With a dynamic 1.5 years of experience, I specialize in creating responsive web applications. My proficiency spans HTML, CSS, Bootstrap, and JavaScript, along with Angular and Angular Material. Notably, I elevate my skill set with a keen command of React, adding versatility to my development process.</p>
                    </div>
                    <div className="hero-btn-container">
                        <button>See the latest work</button>
                        <a href="#Contact">
                            <button>Hire me</button>
                        </a>
                    </div>
                    {/* <div className="sliding-text-container">
                        <marquee direction="left" height="100px">
                            This is a sample scrolling text that has scrolls texts to the left.
                        </marquee>
                    </div> */}
                </motion.div>
                <motion.div className="img-container h100" variants={variantsRightSide} initial="initial" whileInView="whileInView">
                    <img src="hero-img.svg" alt="Hero" className='w100 h100' />
                </motion.div>
            </div>
        </div>
    )
}

export default Hero