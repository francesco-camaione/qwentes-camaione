import { useEffect, useState } from "react"
import { Contact } from "./Contact"
import { ContactModel } from "../../models/contactModel"
import { getData } from "../../services/getData"
import "./ContactsList.css"

export function ContactsList(): JSX.Element {
    const [data, setData] = useState<ContactModel[]>()

    useEffect(() => {
        // get users data from api
        getData("users")
            .then(async response => {
                if (response.ok) {
                    const res: ContactModel[] = await response.json()
                    setData(() => res)
                } else {
                    throw new Error("error during the get data request")
                }
            }).catch((error) => {
                throw new Error(error)
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
