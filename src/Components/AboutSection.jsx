import styles from "./Styles/AboutSection.module.css"
import Fade from "react-reveal/Fade"
import { RiH3 } from "react-icons/ri"

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <p>About</p>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
              src="/radhu.jpg"
              alt=""
              className={styles.profilePic}
            />
          </div>
          <div>
            <h3 className={styles.hTage} >Hi<span> There,</span>{" "}
            </h3>
            <p>
            {/* at times I'm a fresher. but I have set a few goals
                for my career. I'm on my first goal, I believe that
      I'll do it very soon as my aspects, next I Desiring
     to leverage diverse, in-depth experience in
     development and hands-on technical expertise in
       a growth-oriented environment */}
       My desire to earn a better life motivated me to put my utmost efforts into what I do. I <span className={styles.name}>Radhika Verma</span>{" "}
  aspiring full-stack web developer. I like to build websites/application that serves the world.
And always want to enhance my knowledge & adopt new technologies that make impact on people.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}
