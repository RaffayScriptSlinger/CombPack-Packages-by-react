import React from "react"
import FormHeader from "./formHeader"
import { FormFooter } from "./formFooter"

function FormLayout({ children }) {
    return (
        <div>
            <FormHeader />
            {children}
            <FormFooter />

        </div>
    )


}
export default FormLayout