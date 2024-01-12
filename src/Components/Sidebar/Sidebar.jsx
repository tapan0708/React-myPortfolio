import "./Sidebar.scss"
import Links from "./Links/Links"
import ToggleButton from "./ToggleButton/ToggleButton"
import { useState } from "react"
import { motion } from "framer-motion"

function Sidebar() {
    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)"
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
        }
    }

    return (
        <motion.div className="sidebar-container flex-container" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links setOpen={setOpen} />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div >
    )
}

export default Sidebar