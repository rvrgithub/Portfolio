import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import styles from "./Styles/HeroSection.module.css"

import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import { RiDownloadLine } from "react-icons/ri"
import Fade from "react-reveal/Fade"

const useStyles = makeStyles({
  contactBtn: {
    color: "white",
    backgroundColor: "#ff006d",
    width: "130px",
    height: "45px",

    "&:hover": {
      backgroundColor: "white",
      color:"#ff006d",
    },
  },
  linkedInIcon: {
    fontSize: "40px",
    backgroundColor: "white",
    color: "black",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  gitIcon: {
    fontSize: "35px",
    color: "white",
background:"white",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  a: {
    color:"white",
    textDecoration: "none",
  },
})
export function HeroSection() {
  const classes = useStyles()
  return (
    <div className={styles.rootCont} id="hero">
      <Fade>
        <div className={styles.nameCont}>
          <p>Hi,</p>
          <p>
            I am <span>Radhika</span>{" "}
          </p>
          <p>Web Developer</p>
          <a
            href="https://drive.google.com/file/d/1wIJEx59wB8XVKjCuYSs3nyx4d9aWEmVQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" className={classes.contactBtn}>
              <RiDownloadLine
                style={{
                  fontSize: "18px",
                  marginLeft: "10px",
                  marginRight: "5px",
                }}
              />
              Resume
            </Button>
          </a>
        </div>

        <div className={styles.photoCont}>
          <img
            src="/contact-us.gif"
            alt=""
            className={styles.heroImg}
          />
        </div>
        <div className={styles.socialCont}>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/radhika-verma/"
            className={classes.a}
            target="_blank"
          >
            <AiFillLinkedin className={styles.linkedInIcon} />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/rvrgithub"
            className={classes.a}
            target="_blank"
          >
            <AiOutlineGithub className={styles.gitIcon} />
          </a>
          <a href="rvramayra1998@gmail.com" rel="noreferrer" target="_blank">
            <AiOutlineMail className={styles.gitIcon} />
          </a>
        </div>
      </Fade>
    </div>
  )
}
