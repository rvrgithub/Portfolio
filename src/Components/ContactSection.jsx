import styles from "./Styles/ContactSection.module.css"

import {AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import {AiOutlineTwitter}from "react-icons/ai"
import{AiOutlineMail} from "react-icons/ai"
// import { useRef } from 'react';


import Fade from "react-reveal/Fade"
export function ContactSection() {
  // const form = useRef();

  
  
  return (
    <div className={styles.rootCont} id="contact">
      <Fade bottom>
        <p className={styles.contactHeading}>Contact Me</p>
        <div className="App">
     
    </div>
      
        <hr style={{ width: "95vw" }} />
        <p className={styles.text}>Liked my work? Want to get in touch?</p>
        <p className={styles.text}>You can reach out to me at:</p>
        <div className={styles.iconsCont}>
        <a href="https://twitter.com/Radhika02747343" rel="noreferrer" target="_blank">
            <AiOutlineTwitter className={styles.gitIcon} />
          </a>
          <a href="http://instagram.com/radhikaverma15" rel="noreferrer" target="_blank">
            <AiOutlineInstagram className={styles.emailicon}  />
          </a>
          <a
            href="https://www.linkedin.com/in/radhika-verma/"
            target="_blank"
            rel="noreferrer"
          >
        
            <AiFillLinkedin className={styles.linkedInIcon} />
          </a>
          <a href="https://github.com/rvrgithub" rel="noreferrer" target="_blank">
            <AiOutlineGithub className={styles.gitIcon} />
          </a>
          <a href="rvramayra1998@gmail.com" rel="noreferrer" target="_blank">
            <AiOutlineMail className={styles.gitIcon} />
          </a>
        </div>
        <p className={styles.text}>Phone: 8684942418</p>{" "}
        <p className={styles.text}>Email: rvramayra1998@gmail.com</p>
      </Fade>
    </div>
  )
}
