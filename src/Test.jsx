import React from 'react'
import { motion } from "framer-motion"
import { useState } from 'react'

function Test() {

    const [open, setOpen] = useState(false);

    const variants = {
        visible: { opacity: 1, scale: 1, x: 300, transition: { type: "spring", stiffness: 100, damping: 10 } },
        hidden: { opacity: 0.5, scale: 0.5 }
    }

    return (
        <div className='motion-container'>
            <motion.div className="box"
                // initial={{ opacity: 0.5, scale: 0.5 }} //initial state
                // animate={{ opacity: 1, scale: 1, x: 200 }} //animate from initial to given scale
                // transition={{ duration: 2, delay: 1 }} // duration: animate/transition for 2 sec -- delay: wait for 2 second then start
                // whileTap={{ opacity: 1, scale: 2 }} // same as animate but will start on tap
                // whileInView={{ opacity: 1, scale: 2 }} // same as animate but will start on refresh or scroll
                // drag
                variants={variants}
                // initial="hidden"
                // animate="visible"
                animate={open ? "visible" : "hidden"}
                transition={{ duration: 2 }}
            ></motion.div>
            <button onClick={() => setOpen((prev) => !prev)}>Click here</button>
        </div>
    )
}

export default Test