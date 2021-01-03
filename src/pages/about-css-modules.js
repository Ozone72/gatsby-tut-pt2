import React from "react"
import Container from "../components/container"
import styles from "./about-css-modules.module.css"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} alt="" className={styles.avatar}/>
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS modules are useful and cooool.  If you create a *.module.css along with your .js or .jsx file, all the CSS will be scoped locally to that module</p>
      <User
        username="Tea Leone"
        avatar="https://pbs.twimg.com/profile_images/517389260266422272/SM6yCr3E_400x400.jpeg"
        excerpt="Hi I'm Tea.  I used to be so stupid hot.  And married to Fox Mulder"
      />
      <User
        username="Bobby Whitehead"
        avatar="https://lh3.googleusercontent.com/-eLTaxgxkEs8/AAAAAAAAAAI/AAAAAAAAZHE/nWa0K7C12g4/photo.jpg"
        excerpt="Hi. I'm Bobby.  I'm really good at poker and stupid smart"
      />
    </Container>
  )
}
