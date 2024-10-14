import React from "react"
import TourHeader from "./TourHeader"
import TourFooter from "./TourFooter"

function TourLayout({ children }) {
    return (
        <div>
            <TourHeader />
            {children}
            <TourFooter />
        </div>
    )


}
export default TourLayout