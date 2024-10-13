import Contact from "../../components/SVG/contact/Contact";
import ContactForm from "./contactForm/ContactForm";

const ContactSection = () => {
    return (
        // <!-- ====== Contact Start ====== -->
        <section id="contact" className="relative py-20 md:py-[120px]">
            <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
            <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>

            <div className="container px-4">
                <div className="-mx-4 flex flex-wrap items-center">
                    <Contact />

                    <ContactForm />
                </div>
            </div>
        </section>
        // <!-- ====== Contact End ====== -->
    );
};

export default ContactSection;
