import {Outlet} from "react-router-dom"
import Header from "../Header/Header";
function Layout(){

    return(
        <>
            <div className="layout">
                <Header />
                <div className="main">
                    <Outlet />
                </div>
                {/* <div className="footer">
                    <Footer />
                </div> */}
            </div>
        </>
    )
}

export default Layout;