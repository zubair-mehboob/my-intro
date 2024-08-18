"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Hundo App Store",
    description: `Introducing Hundo, the future of meal plan ordering. Say goodbye to meal planning hassles as Hundo simplifies your journey to nutritious and delicious meal plans. With Hundo, you gain exclusive access to a variety of your favorite UAE meal plan providers, all in one convenient app.

Hundo provides you with access to a selection of incredible meal plan providers from one simple to use app. Browse different providers, order and pick your meals straight from your smartphone and take advantage of variety when you're looking for a new`,
    image: "/images/projects/hundo.webp",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://apps.apple.com/pk/app/hundo-meal-plan-finder/id6468573038",
  },
  {
    id: 2,
    title: "Hundo Play Store",
    description: `Introducing Hundo, the future of meal plan ordering. Say goodbye to meal planning hassles as Hundo simplifies your journey to nutritious and delicious meal plans. With Hundo, you gain exclusive access to a variety of your favorite UAE meal plan providers, all in one convenient app.

Hundo provides you with access to a selection of incredible meal plan providers from one simple to use app. Browse different providers, order and pick your meals straight from your smartphone and take advantage of variety when you're looking for a new`,
    image: "/images/projects/hundo1.webp",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://play.google.com/store/apps/details?id=com.hundo.app",
  },
  {
    id: 3,
    title: "Hisaab",
    description: "Hisaab is an accounting app which helps to manage credit, debit and day to day transactions",
    image: "/images/projects/hisaab.webp",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://play.google.com/store/apps/details?id=com.app.retailohisaab&hl=en&pli=1",
  },
  {
    id: 4,
    title: "Traer",
    description: `Are you looking for online shopping app? Are you looking for online earning? Yes, you are at right place. We will deliver whatever you need from all over the world, wherever you are.

Traer is the only application which allows the travellers and buyers to connect with each other. Travel and earn money with online shopping. There are many other online shopping apps but this app allows you to earn while doing shopping.`,
    image: "/images/projects/traer.webp",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://play.google.com/store/apps/details?id=com.traer&pcampaignid=web_share",
  },
  
  {
    id: 5,
    title: "Ticketing App",
    description: "This is ticketing app in which user can create, edit and delete ticket, also user can track the different status of the ticket",
    image: "/images/projects/coming_soon.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/zubair-mehboob/local_first_app",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
