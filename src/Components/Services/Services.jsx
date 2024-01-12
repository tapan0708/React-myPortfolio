import "./Services.scss";
import { motion } from "framer-motion";
import servicesData from "./../../../dummy-data"

function Services() {
    const variants = {
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
    return (
        <div className="services-container">
            <motion.div className="flex-container" variants={variants} initial="initial" whileInView="whileInView" >
                <div className="text-container">
                    <p>I focus on helping your brand grow
                        <br /> and move forward
                    </p>
                    <hr />
                </div>
                <div className="title-container">
                    <div className="title">
                        <img src="/people.webp" alt="people" />
                        <h1> <b>Crafting </b> Code </h1>
                    </div>
                    <div className="title">
                        <h1> <b>Where Pixels </b> Meet Perfection! </h1>
                        {/* <button>WHAT WE DO</button> */}
                    </div>
                </div>
                <div className="list-container">
                    {servicesData.map((item, index) =>
                        <div className="box" key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <button>{item.btntext}</button>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    )
}

export default Services