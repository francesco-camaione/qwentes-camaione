import React, { FunctionComponent, FunctionComponentElement } from "react"
import { initials } from "../../helpers/utils"
import "./ContactDescription.css"

interface Props {
    id: number,
    full_name: string | undefined,
    address: string | undefined,
    city: string | undefined,
}

export const ContactDescription: FunctionComponent<Props> = (props): JSX.Element => {
    const two_letters = initials(props.full_name)

    return (
        <>
            <div className="initials">
                <h4>{two_letters}</h4>
            </div>
            <div className="description--div">
                <h4>{props.full_name}</h4>
                <p>{props.address}, {props.city}</p>
            </div>
        </>
    )
}

