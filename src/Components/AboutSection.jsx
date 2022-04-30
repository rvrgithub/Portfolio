import styles from "./Styles/AboutSection.module.css"
import Fade from "react-reveal/Fade"

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
            <h2>
              I am <span>Radhika Verma</span>{" "}
            </h2>
            <p>
            at times I'm a fresher. but I have set a few goals
                for my career. I'm on my first goal, I believe that
      I'll do it very soon as my aspects, next I Desiring
     to leverage diverse, in-depth experience in
     development and hands-on technical expertise in
       a growth-oriented environment
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}
