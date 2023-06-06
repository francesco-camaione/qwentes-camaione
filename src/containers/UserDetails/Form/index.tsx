import { useState, useEffect, FormEvent } from "react"
import { initials } from "../../../helpers/utils"
import { CompanyModel } from "../../../models/contactModel"
import { patchUserDetails } from "../../../services/patchUserDetails"
import "./Form.css"

interface Props {
    id?: number
    full_name?: string
    email?: string
    company?: CompanyModel
}

export function Form(props: Props): JSX.Element {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [company, setCompany] = useState("")
    const [dataPatched, setDataPatched] = useState(false)
    const two_letters = initials(props.full_name)

    useEffect(() => {
        let email_border: CSSStyleDeclaration = document.getElementById("email--input")!.style
        let name_border: CSSStyleDeclaration = document.getElementById("name--input")!.style
        let button = document.getElementById("form--button")! as HTMLButtonElement
        const button_style: CSSStyleDeclaration = button.style
        // managing email input borders colors
        email.includes("@") ? (email_border.border = "1px solid green") : (email_border.border = "1px solid red")
        email.length === 0 && (email_border.border = "1px solid #8e8e8e")

        // managing name input borders colors
        name.length >= 6 && (name_border.border = "1px solid green")
        name.length >= 1 && name.length < 6 && (name_border.border = "1px solid red")
        name.length === 0 && (name_border.border = "1px solid #8e8e8e")

        // logic to able/disable the login-button
        email.includes("@") && name.length >= 6 && (button.disabled = false)
        !email.includes("@") && (button.disabled = true)
        name.length < 6 && (button.disabled = true)

        //managing button opacity
        email.includes("@") && name.length >= 6 && (button_style.opacity = "1")
        !email.includes("@") && (button_style.opacity = "0.7")
        name.length < 6 && (button_style.opacity = "0.7")

    }, [email, name])

    function patchData(event: FormEvent): void {
        event.preventDefault()
        if (props.id) {
            patchUserDetails(props.id, name, email, company)
                .then((response) => {
                    if (response.ok) {
                        setDataPatched(true)
                    } else {
                        throw new Error("error patching the request")
                    }
                })
                .catch((err) => {
                    throw new Error(err)
                })
        }
        return;
    }

    return (
        <div className="login--div">
            <h2>{props.full_name}</h2>
            <div className="form--initials">
                <h4>{two_letters}</h4>
            </div>
            <form className="login--form" onSubmit={(event) => { patchData(event) }}>
                <div className="name--div">
                    <div className="name--labels">
                        <label>Full Name</label>
                        <label>Required</label>
                    </div>
                    <input type="text" placeholder={props.full_name} id="name--input" onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="email--div">
                    <div className="email--labels">
                        <label>Email</label>
                        <label>Required</label>
                    </div>
                    <input type="email" placeholder={props.email} id="email--input" onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="company--div">
                    <div className="company--labels">
                        <label>Company</label>
                    </div>
                    <input type="text" placeholder={props.company?.name} id="company--input" onChange={(event) => setCompany(event.target.value)} />
                </div>
                <button id="form--button" disabled>
                    SAVE
                </button>
                {dataPatched && <p className="data--message">dati modificati</p>}
            </form>
        </div>
    )
}