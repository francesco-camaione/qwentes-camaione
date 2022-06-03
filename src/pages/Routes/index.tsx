import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../LoginPage";
import { Contacts } from "../ContactsPage";
import { UserDetailsPage } from "../UserDetailsPage";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { PostsPage } from "../PostsPage";
import { PostDetailsPage } from "../PostDetailPage";
import "./../../assets/index.css"

export function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route index element={<LoginPage />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/user-details" element={<UserDetailsPage />} />
                    <Route path="/posts" element={<PostsPage />} />
                    <Route path="/posts/post-details" element={<PostDetailsPage />} />
                    <Route path="*" element={<p>There's nothing here: 404!</p>} />
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}