import "./parallax.scss"
import { motion } from "framer-motion"

function Parallax({ type }) {
    const variants = {
        initial: { opacity: 0.5, scale: 0 },
        whileInView: { opacity: 1, scale: 1 },
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 30,
        }
    }

    return (
        <div className={`${type === "Services" ? "bg-dark" : "bg-light"} Parallax-container w100`}>
            <motion.h1 variants={variants} initial="initial" whileInView="whileInView" transition="transition">
                {type === "Services" ? "What I do?" : "what I did?"}
                <motion.div variants={variants} className="text-center">
                    <a href="#Services">
                        <img src="scroll.png" alt="scroll" />
                    </a>
                </motion.div>
            </motion.h1>
            <div className="bg-mountains w100 h100 bg-img-adjust"></div>
            <div className="bg-planets w100 h100 bg-img-adjust"></div>
            <div className="bg-stars w100 h100 bg-img-adjust"></div>
        </div>
    )
}

export default Parallax