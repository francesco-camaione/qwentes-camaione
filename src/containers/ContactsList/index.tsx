import { useEffect, useState } from "react"
import { Contact } from "./Contact"
import { ContactModel } from "../../models/contactModel"
import { getData } from "../../services/getData"
import "./ContactsList.css"

export function ContactsList() {
    const [data, setData] = useState<ContactModel[]>()

    useEffect(() => {
        // get users data from api
        getData("users").then(response => {
            setData(response)
        }).catch((error) => {
            setData(error)
        })
    }, [])


    const contacts_element = data?.map((contact: ContactModel) => {
        return (
            <Contact
                key={contact.id}
                id={contact.id}
                full_name={contact.name}
                address={contact.address.street}
                city={contact.address.city}
            />
        )
    })

    return (
        <main>
            <h2 className="contacts--title">CONTACTS</h2>
            <section className="contacts--section">
                {contacts_element}
            </section>
        </main>
    )
}
