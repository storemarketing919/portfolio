import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import ModalOneContent from "./modal/ModalOneContent";
import ModalTwoContent from "./modal/ModalTwoContent";
import ModalThreeContent from "./modal/ModalThreeContent";
import ModalFourContent from "./modal/ModalFourContent";
import ModalFiveContent from "./modal/ModalFiveContent";
import ModalSixContent from "./modal/ModalSixContent";
import ModalSevenContent from "./modal/ModalSevenContent";
import ModalEightContent from "./modal/ModalEightContent";
import ModalNineContent from "./modal/ModalNineContent";

const portfolioTypes = [
  { key: "all", label: "ALL" },
  { key: "frontend", label: "Frontend" },
  { key: "video", label: "VIDEO" },
  { key: "graphic-design", label: "GRAPHIC DESIGN" },
  { key: "mockup", label: "MOCKUP" },
];

const portfolioItems = [
  {
    id: "swile",
    title: "Swile Website",
    mainImage: "img/projects/swile.co5.png",
    types: ["frontend", "mockup"],
    modalContent: ModalOneContent,
  },
  {
    id: "rimac",
    title: "RIMAC — Enterprise Insurance Platform",
    mainImage: "img/projects/rimac5.png",
    types: ["frontend"],
    modalContent: ModalTwoContent,
  },
  {
    id: "ider",
    title: "Slider Project",
    mainImage: "img/projects/ider.cl.PNG",
    types: ["frontend"],
    modalContent: ModalThreeContent,
  },
  {
    id: "local-video",
    title: "Local Video Project",
    mainImage: "img/projects/project-4.jpg",
    types: ["video"],
    modalContent: ModalFourContent,
  },
  {
    id: "saas",
    title: "SaaS App Project",
    mainImage: "img/projects/project-5.jpg",
    types: ["frontend"],
    modalContent: ModalFiveContent,
  },
  {
    id: "image",
    title: "Image Project",
    mainImage: "img/projects/project-6.jpg",
    types: ["mockup"],
    modalContent: ModalSixContent,
  },
  {
    id: "facebook",
    title: "Facebook Profile",
    mainImage: "img/projects/project-7.jpg",
    types: ["graphic-design"],
    modalContent: ModalSevenContent,
  },
  {
    id: "dribbble",
    title: "Dribbble Profile",
    mainImage: "img/projects/project-8.jpg",
    types: ["graphic-design"],
    modalContent: ModalEightContent,
  },
  {
    id: "behance",
    title: "Behance Project",
    mainImage: "img/projects/project-9.jpg",
    types: ["graphic-design", "mockup"],
    modalContent: ModalNineContent,
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const renderProjects = (type) => {
    const projects =
      type === "all"
        ? portfolioItems
        : portfolioItems.filter((project) => project.types.includes(type));

    return (
      <ul className="row grid justify-content-center">
        {projects.map((project, index) => (
          <li
            key={project.id}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={index * 100}
          >
            <figure onClick={() => openModal(project)}>
              <img src={project.mainImage} alt={project.title} />
              <div className="hover-content-wrapper">
                <span className="content-title">{project.title}</span>
              </div>
            </figure>
          </li>
        ))}
      </ul>
    );
  };

  const ModalContent = selectedProject && selectedProject.modalContent;

  return (
    <>
      <Tabs>
        <TabList className="portfolio-tab-list">
          {portfolioTypes.map((type) => (
            <Tab key={type.key}>{type.label}</Tab>
          ))}
        </TabList>

        <div className="portfolio-tab-content">
          {portfolioTypes.map((type) => (
            <TabPanel key={type.key}>{renderProjects(type.key)}</TabPanel>
          ))}
        </div>
      </Tabs>

      <Modal
        isOpen={Boolean(selectedProject)}
        onRequestClose={closeModal}
        contentLabel={selectedProject ? selectedProject.title : "Portfolio project"}
        className="custom-modal dark"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={closeModal}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {ModalContent && (
            <div className="box_inner portfolio">
              <ModalContent />
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Portfolio;
