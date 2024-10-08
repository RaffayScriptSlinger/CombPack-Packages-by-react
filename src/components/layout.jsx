import React from "react"
import Header from "./Header"
import LastFooter from "./footer"

function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <LastFooter />
     
        </div>
    )


}
export default Layout