import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import ModalSwileContent from "./modal/ModalSwileContent";
import ModalRimacContent from "./modal/ModalRimacContent";
import ModalIderContent from "./modal/ModalIderContent";
import ModalFourContent from "./modal/ModalFourContent";
import ModalFiveContent from "./modal/ModalFiveContent";
import ModalSixContent from "./modal/ModalSixContent";
import ModalSevenContent from "./modal/ModalSevenContent";
import ModalEightContent from "./modal/ModalEightContent";
import ModalNineContent from "./modal/ModalNineContent";
import ModalHyperXContent from "./modal/ModalHyperXContent";
import ModalTropicanaContent from "./modal/ModalTropicanaContent";
import ModalDoiteContent from "./modal/ModalDoiteContent";
import ModalCtrl8Content from "./modal/ModalCtrl8Content";

const portfolioTypes = [
  { key: "all", label: "ALL" },
  { key: "full-stack", label: "FULL-STACK" },
  { key: "shopify", label: "SHOPIFY" },
];

const portfolioItems = [
  {
    id: "swile",
    title: "Swile — Website Modernization",
    mainImage: "img/projects/swile/swile.co5.png",
    types: [ "full-stack"],
    modalContent: ModalSwileContent,
  },
  {
    id: "rimac",
    title: "RIMAC — Enterprise Insurance Platform",
    mainImage: "img/projects/rimac/rimac5.png",
    types: ["full-stack"],
    modalContent: ModalRimacContent,
  },
  {
    id: "ider",
    title: "E-commerce Platform",
    mainImage: "img/projects/ider/ider.cl.PNG",
    types: ["full-stack", "design"],
    modalContent: ModalIderContent,
  },
  {
    id: "hyperx",
    title: "HyperX — Shopify E-commerce",
    mainImage: "img/projects/hyperx/hyperx.png",
    types: ["shopify"],
    modalContent: ModalHyperXContent,
  },
  {
    id: "doite",
    title: "Doite — Shopify E-commerce",
    mainImage: "img/projects/doite/doite.png",
    types: ["shopify"],
    modalContent: ModalDoiteContent,
  },
  {
    id: "ctrl8",
    title: "Ctrl8 — Shopify E-commerce",
    mainImage: "img/projects/ctrl8/ctrl8.png",
    types: ["shopify"],
    modalContent: ModalCtrl8Content,
  },
  // {
  //   id: "local-video",
  //   title: "Local Video Project",
  //   mainImage: "img/projects/project-4.jpg",
  //   types: ["video"],
  //   modalContent: ModalFourContent,
  // },
  // {
  //   id: "saas",
  //   title: "SaaS App Project",
  //   mainImage: "img/projects/project-5.jpg",
  //   types: ["frontend"],
  //   modalContent: ModalFiveContent,
  // },
  {
    id: "image",
    title: "Image Project",
    mainImage: "img/projects/tropicana.png",
    types: ["full-stack"],
    modalContent: ModalTropicanaContent,
  },
  // {
  //   id: "facebook",
  //   title: "Facebook Profile",
  //   mainImage: "img/projects/project-7.jpg",
  //   types: ["graphic-design"],
  //   modalContent: ModalSevenContent,
  // },
  // {
  //   id: "dribbble",
  //   title: "Dribbble Profile",
  //   mainImage: "img/projects/project-8.jpg",
  //   types: ["graphic-design"],
  //   modalContent: ModalEightContent,
  // },
  // {
  //   id: "behance",
  //   title: "Behance Project",
  //   mainImage: "img/projects/project-9.jpg",
  //   types: ["graphic-design", "mockup"],
  //   modalContent: ModalNineContent,
  // },
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
