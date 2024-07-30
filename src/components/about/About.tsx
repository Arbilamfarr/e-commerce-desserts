'use client'

import Image from "next/image";
import { useEffect } from "react";


const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate");
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight) {
          element.classList.add("fadeIn");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-6 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4 animate">About Us</h1>
          <p className="text-lg mb-6 animate">
            Learn more about our journey and our team.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center animate">
            Our Story
          </h2>
          <p className="text-lg mb-6 text-center animate">
            Dessert Tools was founded with a passion for creating the finest
            desserts and providing the best tools to do so. Our journey began in
            a small kitchen, where our founders experimented with various tools
            and ingredients to perfect their recipes. Today, we are proud to
            offer a wide range of high-quality dessert-making tools to help you
            create delicious treats.
          </p>
          <div className="flex flex-wrap -mx-4 animate">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <Image
                src="/images/our-story.jpg"
                alt="Our Story"
                className="w-full rounded-lg shadow-md"
                width={500}
                height={500}
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <p className="text-lg mb-6">
                From mixing bowls to baking pans, our products are designed with
                the home baker in mind. We believe that the right tools can make
                a significant difference in the quality of your desserts. Our
                mission is to provide you with the best tools so you can bake
                with confidence and creativity.
              </p>
              <p className="text-lg">
                Join us on this sweet journey and explore our collection of
                dessert-making tools. Whether you are a professional pastry chef
                or a home baker, we have something for everyone. Let&apos;s bake
                something sweet together!
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 animate text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8   ">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md p-6 text-center animate"
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  width={100}
                  height={100}
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center animate">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-center">
            <li className="text-lg mb-2 animate">
              Quality: We believe in providing the highest quality products to
              our customers.
            </li>
            <li className="text-lg mb-2 animate">
              Innovation: We continuously strive to innovate and improve our
              products.
            </li>
            <li className="text-lg mb-2 animate">
              Customer Satisfaction: Our customers are at the heart of
              everything we do.
            </li>
            <li className="text-lg mb-2 animate">
              Community: We believe in giving back to the community and
              supporting local initiatives.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 animate text-center ">
            Join Us
          </h2>
          <p className="text-lg mb-6 text-center animate">
            We are always looking for passionate individuals to join our team.
            If you share our love for desserts and have a passion for baking, we
            would love to hear from you. Check out our careers page for current
            openings.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg animate hover:bg-blue-700 transition duration-300 ease-in-out">
            View Openings
          </button>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 animate">Contact Us</h2>
          <p className="text-lg mb-6  text-center animate">
            Have questions or want to learn more about our products? Reach out
            to us through our contact page. We are here to help!
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg animate hover:bg-green-700 transition duration-300 ease-in-out">
            Contact Us
          </button>
        </section>
      </main>
    </div>
  );
};

const teamMembers = [
  {
    id: 1,
    name: "Abdelah Rabii",
    role: "Co-Founder & CEO",
    bio: "Abdelah is a passionate baker with over 20 years of experience in the culinary industry.",
    photo: "/images/team/abdelah.jpg",
  },
  {
    id: 2,
    name: "Driss Kadioui",
    role: "Co-Founder & CTO",
    bio: "Driss is a technology enthusiast who loves creating innovative solutions for the baking community.",
    photo: "/images/team/idris.jpg",
  },
];

export default About;
