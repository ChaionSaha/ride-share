import AboutSection from "@/components/About/AboutSection";
import ContactSection from "@/components/Contact/ContactSection";
import EnjoyRideSection from "@/components/Enjoy_Ride/EnjoyRideSection";
import FaqSection from "@/components/Faq/FaqSection";
import FooterSection from "@/components/Footer/FooterSection";
import Navbar from "@/components/Navbar/Navbar";
import ReviewSection from "@/components/Review/ReviewSection";
import RidersSection from "@/components/Riders/RidersSection";
import TrustworthySection from "@/components/Trustworthy/TrustworthySection";


export default function Home() {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <TrustworthySection />
      <ReviewSection />
      <RidersSection />
      <EnjoyRideSection />
      <ContactSection />
      <FaqSection />
      <FooterSection/>
    </div>
  );
}
