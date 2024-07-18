import styles from './welcome.module.css'

function WelcomeGreeting(props){
     
    const usermessage = <h2 className={styles.welcome}>Welcome {props.username}</h2>

    const loginpromp = <h2 className={styles.login}>Please Log in to Continue</h2>

    return(props.isloggedin ? usermessage : loginpromp)

    // if(props.isloggedin){
    //     return usermessage
    // }return loginpromp


}

export default WelcomeGreeting