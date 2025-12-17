import dynamic from "next/dynamic";

const ContactUsHeroSection = dynamic(
  () => import("@/components/contact-us/ContactUsHero")
);
const ContactUsForm = dynamic(
  () => import("@/components/contact-us/ContactUsForm")
);
const ContactUs = () => {
  return (
    <div className="px-5 md:px-10 grid gap-10">
      <ContactUsHeroSection />
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
