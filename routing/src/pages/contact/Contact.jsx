import React, { useState } from "react";
import "./Contact.css";

const initialInfo = {
  name : "",
  email : "",
  sub : "",
  message : ""
}

const Contact = () => {
  const [userInfo, setUserInfo] = useState(initialInfo)

  const handelInputChange = (e) =>{
    const {name, value} = e.target
    setUserInfo({...userInfo, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your Query")
    setUserInfo(initialInfo)
  };

  return (
    <section id="form-details">
      <form action="" onSubmit={handleSubmit}>
        <span>LEAVE A MESSAGE</span>
        <h2>We love to hear from you</h2>
        <input type="text" placeholder="Your Name" name="name" value={userInfo.name} onChange={handelInputChange}/>
        <input type="text" placeholder="E-mail" name="email" value={userInfo.email} onChange={handelInputChange}/>
        <input type="text" placeholder="Subject" name="sub" value={userInfo.sub} onChange={handelInputChange}/>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Enter Message"
          value={userInfo.message}
          onChange={handelInputChange}
        ></textarea>
        <input type="submit" class="normal" value="Submit" />
      </form>
    </section>
  );
};

export default Contact;
