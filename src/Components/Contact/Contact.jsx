import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.scss";
import { motion } from "framer-motion";


function Contact() {
    const form = useRef();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false)

    const variants = {
        initial: {
            opacity: 0,
            y: 200
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                delay: 0.1
            }
        }
    }
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hgnvpeg', 'template_mu828d4', form.current, 'XiEhu6NVSRDUN0OEf')
            .then((result) => {
                setSuccess(true);
            }, (error) => {
                setError(true);
            });
    };
    return (
        <motion.div className='contact-container' variants={variants} initial="initial" whileInView="whileInView">
            <div className="text-container">
                <h1>Let's work together</h1>
                <div className="text-item">
                    <h2>Mail</h2>
                    <p>tapanvyas555gmail.com</p>
                </div>
                <div className="text-item">
                    <h2>Address</h2>
                    <p>Pratappura, Burhanpur Mp</p>
                </div>
                <div className="text-item">
                    <h2>Phone</h2>
                    <p>+91 7693070222</p>
                </div>
            </div>
            <div className="form-container">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder='Name' required name="name" />
                    <input type="text" placeholder='Email' required name="email" />
                    <textarea rows="8" placeholder="Message" name="message" ></textarea>
                    <button>Submit</button>
                    <div className="text-centere">
                        <span>
                            {success ? "Success! Details has been sent" : ""}
                            {error ? "Error! Please try again" : ""}
                        </span>
                    </div>
                </form>
            </div>
            <br />
        </motion.div>
    )
}

export default Contact