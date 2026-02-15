import React from "react";
import { Feature1 } from "./feature";

const DemoOne = () => {
  return (
    <Feature1   
      titles="Why Worthy_Homes Real Estate"
      descriptions1="Worthy Homes is a premier real estate company dedicated to delivering refined property experiences defined by elegance, trust, and exceptional service. Since 2020, our mission has been to guide every client toward the right home with confidence and clarity. We combine market expertise, personalized guidance, and transparent practices to ensure that every purchase delivers long-term value, comfort, and peace of mind. We specialize in connecting clients with distinguished residences and high-value investment opportunities, guiding them through every step of the journey with discretion, professionalism, and personalized attention.  At Worthy Homes, we believe in creating shared value. Our success is built on the satisfaction and long-term prosperity of our clients, partners, and communities. Every service we offer is designed to deliver not only outstanding results, but also a meaningful and lasting impact. As a full-service luxury real estate solutions provider, Worthy Homes offers a carefully curated portfolio of properties and services tailored to sophisticated lifestyles and strategic investment goals. Our team excels at developing customized strategies that reflect each client’s vision, ensuring seamless transactions and enduring partnerships. Our reputation for excellence has enabled us to build trusted relationships with clients across local and international markets. Worthy Homes supports clients in building premium investment portfolios, buying and selling exclusive properties, leasing high-end residences, property and facility management, luxury holiday home rentals, and bespoke interior design services. Each of our specialized divisions operates under one unified promise: to deliver exceptional quality, personalized service, and an elevated real estate experience worthy of our name."
      imageSrc1="https://picsum.photos/id/20/800/600"
      imageAlt1="Our Team"
      imageSrc2="https://picsum.photos/id/30/800/600"
      imageAlt2="Founder Photo"
      buttonPrimary={{
        label: "Get Started",
        href: "/contact"
      }}
      buttonSecondary={{
        label: "Learn More",
        href: "#"
      }}
    />
  );
};

export { DemoOne };