import { LandingContainer } from "@/features/landing/LandingContainer";
import { PersonStructuredData, WebsiteStructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <PersonStructuredData
        name="Muhsin A"
        jobTitle="Frontend Engineer"
        description="Frontend Engineer from Bangalore, India specializing in React, JavaScript, TypeScript, and modern web technologies."
        url="https://muhsi.in"
        sameAs={[
          "https://github.com/muhsin7majeed",
          "https://linkedin.com/in/muhsin7majeed",
        ]}
        worksFor={[
          { name: "Springworks", url: "https://springworks.in" },
          { name: "Techwarelab" },
        ]}
        knowsAbout={[
          "React",
          "JavaScript",
          "TypeScript",
          "Next.js",
          "Angular",
          "Node.js",
          "CSS3",
          "HTML5",
          "Git",
          "Figma",
          "GraphQL",
        ]}
        location={{
          addressLocality: "Bangalore",
          addressCountry: "India",
        }}
      />
      <WebsiteStructuredData
        name="Muhsin A - Frontend Engineer Portfolio"
        description="Frontend Engineer from Bangalore, India specializing in React, JavaScript, TypeScript, and modern web technologies."
        url="https://muhsi.in"
        author="Muhsin A"
      />
      <LandingContainer />
    </>
  );
}
