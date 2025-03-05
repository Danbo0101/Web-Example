import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import App from "./App";
import HomePage from "./component/HomePage/HomePage";


const NotFound = () => {
    return (
        <div className="container mt-4 alert alert-danger">404. NOT FOUND</div>
    );
};

const Layout = () => {
    return (
        <Suspense fallback="...is loading">
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    {/* <Route path="specialties" element={<ListSpecialties />} /> */}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </Suspense>

    )
}

export default Layout;