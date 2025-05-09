"use strict";
import styles from "./FormSection.module.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { IoIosMail } from "react-icons/io"
import { IoCall } from "react-icons/io5";
import classNames from "classnames";
import { useState } from "react";

const FormSection = ()=>{

    let [name, useName] = useState("Bablu");
    let [email, useEmail] = useState("bablu@gmail.com");
    let [description, useDescription] = useState("no comments");

    const onViaSupportChatClick = ()=>{
        alert("Via SupportChat Click");
    }

    const onViaCallClick = ()=>{
        alert("Via Call Click");
    }

    const onViaMailClick = ()=>{
        alert("Via Mail Click");
    }

    const onFormSubmitClick = (event)=>{
        event.preventDefault();
        let nameValue = document.getElementById("name").value;
        let emailValue = document.getElementById("email").value;
        let descriptionValue = document.getElementById("description").value;

        if (nameValue === "" || emailValue === "" || descriptionValue === ""){
            alert("All fields should be filled!");
        } else {
            useName(nameValue);
            useEmail(emailValue);
            useDescription(descriptionValue);
        }
    }

    return (
        <div className={styles.form_container}>
            <form method="POST" action="/" className={styles.form_component}>
                <div className={styles.button_container}>
                    <ButtonComponent text="Via Support Chat" icon={<IoIosMail fontSize="15px"/>} isDark={true} isSubmitButton={false} onClick={onViaSupportChatClick}/>
                    <ButtonComponent text="Via Call" icon={<IoCall fontSize="15px"/>} isDark={true} isSubmitButton={false}  onClick={onViaCallClick}/>
                    <ButtonComponent text="Via Email Form" icon={<IoIosMail fontSize="15px"/>} isDark={false} isSubmitButton={false} className={styles.long_button}  onClick={onViaMailClick}/>
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="name" className={styles.form_label}>Name</label>
                    <input type="text" name="name" id="name" className={styles.form_input} />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email" className={styles.form_label}>Email</label>
                    <input type="text" name="email" id="email" className={styles.form_input} />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="description" className={styles.form_label}>Description</label>
                    <textarea name="description" id="description" className={classNames(styles.form_input, styles.description_box)}></textarea>
                </div>
                <ButtonComponent text="Submit" isDark={true} isSubmitButton={true} className={styles.submit_button} onClick={onFormSubmitClick}/>
                <div className={styles.form_response}>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{description}</p>
                </div>
            </form>
            <div className={styles.image_container}>
                <img src="/images/contact_us.jpg" alt="Contact us picture"/>
            </div>
        </div>
    );
}

export default FormSection;