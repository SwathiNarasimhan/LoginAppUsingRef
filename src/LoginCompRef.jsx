import React, { useRef } from "react";

export const LoginRefComp = () => {

    const nameRef = useRef("");
    const passwordRef = useRef("");
    const msgRef = useRef("");
    const handleLogin = (e) => {
        e.preventDefault();
        if(nameRef.current.value === "root" && passwordRef.current.value === "12345678" ){
            msgRef.current.textContent  = "Logged In Successfully";
            msgRef.current.style.color = "green";
        } else {
            msgRef.current.textContent  = "Invalid Username and Password";
            msgRef.current.style.color = "Red";
        }
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <input ref={nameRef} type="text" name="username" placeholder="Enter a UserName" /><br/>
                <input ref={passwordRef} type="password" name="password" placeholder="Enter a Password" /><br/>
                <p ref={msgRef} ></p>
                <input type="submit" value="Login" />
            </form>
        </>
    );
}