import dynamic from "next/dynamic";

const ContactUsHeroSection = dynamic(
  () => import("@/components/contact-us/ContactUsHero")
);
const ContactUsForm = dynamic(
  () => import("@/components/contact-us/ContactUsForm")
);
const ContactUs = () => {
  return (
    <div
      className="bg-[#F7F1EA] min-h-[100vh] text-[#423A2F] pt-[100px] pb-[50px] px-10 flex flex-col gap-10 select-none"
    >
      <ContactUsHeroSection />
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
