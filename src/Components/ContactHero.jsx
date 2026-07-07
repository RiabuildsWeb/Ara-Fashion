import { assets } from "../assets/Ara"


const ContactHero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden lg:m-3  md:m-3">
      <div className="grid md:grid-cols-2 h-full">

        {/* Left Content */}
        <div className="bg-[#F8F4EE] flex items-center justify-center px-6 md:px-20 ">
          <div>
            <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-serif text-[#2B2118] ">
              CONTACT ARA
            </h1>

            <p className="mt-6 text-lg text-[#6B5E53] max-w-md">
              We'd love to hear from you. Whether you have a question, collaboration idea, or simply want to connect, our team is here to help..
            </p>
            <div className="w-24 h-[2px] bg-[#C6A36B]  mt-8 mb-4"></div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={assets.Contacthero}
            alt=""
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactHero;