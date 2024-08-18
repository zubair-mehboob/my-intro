"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <b>
          Offline-First & Local-First Applications:
          </b>
          Specialize in designing and implementing offline-first architectures that prioritize user 
          experience even in low or no network conditions. Proficient in utilizing technologies like SQLite, 
          Realm, and redux-offline to enable local data storage and synchronization with backend services 
          when connectivity is restored.
        </li>
        <li><b>Cross-Platform Development:</b> Proven ability to develop and deploy applications across both iOS 
          and Android platforms using React Native. Deep understanding of native modules and integrations 
          to enhance app functionality and performance.</li>
          <li>
            <b>
            Performance Optimization:
            </b>
            Adept at optimizing app performance through techniques such as lazy loading, 
            efficient state management, and code splitting. Experienced in using tools like React DevTools 
            and Flipper to diagnose and resolve performance bottlenecks.
          </li>
          <li>
            <b>
            UI/UX Design:
            </b>
            Strong focus on user interface and user experience design. 
            Skilled in translating wireframes and mockups into responsive, pixel-perfect mobile applications. 
            Proficient with tools like Figma and Adobe XD for design collaboration.
          </li>
          <li>
            <b>
            State Management:
            </b>
            Experienced with state management libraries such as Redux, Context API, and MobX. 
            Able to design and implement robust state management solutions to ensure a smooth and 
            predictable user experience.
          </li>
          <li>
            <b>
            API Integration:
            </b>
            Competent in integrating RESTful and GraphQL APIs to connect applications with backend services. 
            Familiar with authentication mechanisms, data fetching, and real-time updates.
          </li>
          <li>
            <b>
            Testing and Debugging:
            </b>
            Knowledgeable in writing unit tests and end-to-end tests using tools like Jest and Detox. 
            Skilled in debugging and troubleshooting to maintain high code quality and app stability.
          </li>
          <li>
            <b>
            Continuous Integration/Continuous Deployment (CI/CD): 
            </b>
            Proficient in setting up CI/CD pipelines for automated testing, building, and deployment. 
            Experience with tools like GitHub Actions, CircleCI, and Fastlane to streamline development 
            workflows.
          </li>
          <li>
            <b>
            Team Collaboration:
            </b>
            Adept at working in agile environments, collaborating with cross-functional teams including 
            designers, product managers, and backend developers. Strong communicator with experience 
            in code reviews, sprint planning, and project management.
          </li>
        {/* <li>React Native</li>
        <li>React Native CLI</li>
        <li>Expo</li>
        <li>Xcode</li>
        <li>Android Studio</li>
        <li>Offline First and Local First Applications</li>
        <li>Node.js</li>
        <li>Nest.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Redux Offline</li>
        <li>Git</li>
        <li>Jira</li>
        <li>Docker</li>
        <li>Firebase</li>
        <li>Push notifications</li>
        <li>Deep linking</li>
        <li>Payment SDKs integration</li> */}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Masters in Computer Science (MSCS)</li>
        <li>Muhammad Ali Jinnah University, Karachi</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          As a seasoned React Native developer with over 5 years of experience, 
          I have honed my skills in building dynamic, high-performance mobile applications for both iOS 
          and Android platforms. My expertise lies in crafting user-centric mobile solutions that 
          are both scalable and maintainable, leveraging the power of React Native to deliver seamless 
          experiences.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Achievements{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
