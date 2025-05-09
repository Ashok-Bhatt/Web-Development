"use strict";
import styles from "./HeadingSection.module.css"

const HeadingSection = ()=>{
    return (
        <div className={styles.heading_section}>
            <h2 className={styles.heading}>Contact Us</h2>
            <p className={styles.description}>Hours of operation: This tells customers when they can contact your business. Phone number and email address: Customers can contact your business directly.Response time: Let customers know when they should expect a response.Location: Build trust with customers by showing you're legitimate.</p>
        </div>
    );
}

export default HeadingSection;