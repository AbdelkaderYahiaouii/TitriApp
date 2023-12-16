import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_im61ylc",
        "template_dysvhun",
        form.current,
        "lKRMUPIScg1Ur0fKH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact us</span>
          <span>
          <p> Email : <a href="mailto:titriapp@gmail.com">titriapp@gmail.com</a></p>
          <p> Phone : <a href="mailto:titriapp@gmail.com">+213 7 83 90 03 86</a></p>

          </span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
        
     
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Message sent. We will respond to you promptly."}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

