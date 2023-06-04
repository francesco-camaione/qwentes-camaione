import { Link } from "react-router-dom"
import "./Navbar.css"

function deleteToken() {
    localStorage.clear()
    return;
}

export function Navbar() {

    return (
        <header className="nav--header">
            <nav className="navbar">
                <ul className="nav--ul" >
                    <Link to="/contacts" className="contacts--link"><li>CONTACTS</li></Link>
                    <Link to="/posts" className="posts--link" ><li>POSTS</li></Link>
                </ul>
                <div className="logout--div">
                    <Link to="/" onClick={deleteToken} className="logout--link">
                        <p>LOGOUT</p>
                    </Link>
                </div>
            </nav>
        </header>
    )
}