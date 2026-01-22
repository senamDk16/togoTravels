
import AboutSection from "./components/about";
import BaseLayoutPage from "./components/baseLayoutPage";
import ContactSection from "./components/contact";
import FooterService from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/hero";
import ServiceSection from "./components/service";

export default function Home() {
  return (
      <div className="font-sans text-gray-900">
        <BaseLayoutPage>
          <>
            <HeroSection/>
            <AboutSection/>
            <ServiceSection/>        
          </>
        </BaseLayoutPage>
        {/* <Header/>
        
        <ContactSection/>
        <FooterService/> */}
      </div>
  );
}
