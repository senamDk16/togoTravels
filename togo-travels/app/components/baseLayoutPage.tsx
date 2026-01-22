import ContactSection from "./contact"
import FooterService from "./footer"
import Header from "./header"



const BaseLayoutPage = ({children}:{children:React.ReactElement})=>{

    return(
        <>
            <Header/>
            <div>
                {children}
            </div>
            <ContactSection/>
            <FooterService/>
        </>
    )
}

export default BaseLayoutPage