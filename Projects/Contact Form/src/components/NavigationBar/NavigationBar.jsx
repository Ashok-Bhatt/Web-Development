"use strict";
import styles from "./NavigationBar.module.css";

const NavigationBar = ()=>{
    return (
        <nav>
            <div className={styles.logo_container}>
                <img src="/images/logo.png" alt="Logo of application" className={styles.logo}/>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default NavigationBar;