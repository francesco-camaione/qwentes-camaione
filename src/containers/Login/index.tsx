import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Login.css"

function setToken(): void {
    localStorage.setItem("token", "token1")
    return;
}


export function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        let email_border: CSSStyleDeclaration = document.getElementById("email--input")!.style
        let password_border: CSSStyleDeclaration = document.getElementById("password--input")!.style

        // managing email input borders colors
        email.includes("@") && email_border ? (email_border.border = "1px solid green") : (email_border.border = "1px solid red")
        email.length === 0 && (email_border.border = "1px solid #8e8e8e")

        // managing password input borders colors
        password.length >= 4 && (password_border.border = "1px solid green")
        password.length >= 1 && password.length < 4 && (password_border.border = "1px solid red")
        password.length === 0 && (password_border.border = "1px solid #8e8e8e")

        // logic to able/disable the login-button
        email.includes("@") && password.length >= 4 && setShowButton(true)
        !email.includes("@") && setShowButton(false)
        password.length < 4 && setShowButton(false)

    }, [email, password])

    return (
        <div className="login--div">
            <h2>LOGIN</h2>
            <form className="login--form">
                <div className="email--div">
                    <div className="email--labels">
                        <label>Email</label>
                        <label>Required</label>
                    </div>
                    <input type="email" onChange={(event) => setEmail(event.target.value)} id="email--input" />
                </div>
                <div className="password--div">
                    <div className="password--labels">
                        <label>Password</label>
                        <label>Required</label>
                    </div>
                    <input type="password" onChange={(event) => setPassword(event.target.value)} id="password--input" />
                </div>
                {showButton ?
                    <Link to="/contacts" onClick={setToken} id="button--a">
                        <button id="login--button">ENTER</button>
                    </Link> : <button id="disabled--button" disabled>ENTER</button>}
            </form>
        </div>
    )
}