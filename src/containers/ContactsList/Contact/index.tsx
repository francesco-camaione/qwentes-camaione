import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUserId } from "../../../redux/feature/userId"
import { ContactDescription } from "../../../components/ContactDescription"
import "./Contact.css"

interface Props {
    id: number,
    full_name: string,
    address: any,
    city: string,
}

export function Contact(props: Props) {
    const dispatch = useDispatch()

    return (
        <Link to="/user-details" className="user--link">
            <article className="contact--article" onClick={() => dispatch(setUserId(props.id))}>
                <ContactDescription
                    id={props.id}
                    full_name={props.full_name}
                    address={props.address}
                    city={props.city}
                />
            </article>
        </Link>
    )
}