import { useState, useEffect, FormEvent } from "react"
import { initials } from "../../../helpers/utils"
import { CompanyModel } from "../../../models/contactModel"
import { patchUserDetails } from "../../../services/patchUserDetails"
import "./Form.css"

interface Props {
    id: number 
    full_name: string
    email: string
    company: CompanyModel
}

export function Form(props: Props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [company, setCompany] = useState("")
    const [dataPatched, setDataPatched] = useState(false)

    useEffect(() => {
        let email_border: any = document.getElementById("email--input")?.style
        let name_border: any = document.getElementById("name--input")?.style
        let button: any = document.getElementById("form--button")
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
        email.includes("@") && name.length >= 6 && (button.style.opacity = 1)
        !email.includes("@") && (button.style.opacity = 0.7)
        name.length < 6 && (button.style.opacity = 0.7)

    }, [email, name])

    const two_letters = initials(props.full_name)

    function patchData(event: FormEvent) {
        // prevent default or it doesn t work,
        // i think because onsubmit page refresh before the patch request is shipped
        event.preventDefault()
        patchUserDetails(props.id!, name, email, company)
            .then((response) => {

                response.status === 200 && setDataPatched(true)
            })
    }

    return (
        <div className="login--div">
            <h2>{props.full_name}</h2>
            <div className="form--initials">
                <h4>{two_letters}</h4>
            </div>
            <form className="login--form" onSubmit={(event) => {patchData(event)}}>
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