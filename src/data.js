const publications = [
  {
    title: "Deep blue AI: A new bridge from data to knowledge for the ocean science",
    authors: "Chen, G., Huang, B., Chen, X., et al.",
    venue: "Deep Sea Research Part I: Oceanographic Research Papers",
    link: "https://doi.org/10.1016/j.dsr.2022.103886",
  },
  {
    title:
      "Global oceanic eddy identification: A deep learning method from argo profiles and altimetry data",
    authors: "Chen, X., Chen, G.*, Ge, L., Huang, B., and Cao, C.",
    venue: "Frontiers in Marine Science, 8:646926 (2021)",
    link: "https://doi.org/10.3389/fmars.2021.646926",
  },
  {
    title: "Eddy detection inverted from Argo profiles to surface altimetry",
    authors: "Chen, X., Quartly, G., and Chen, G*.",
    venue: "Journal of Atmospheric and Oceanic Technology (2024)",
    link: "https://doi.org/10.1175/JTECH-D-22-0147.1",
  },
  {
    title: "Medium-range forecasting of oceanic eddy trajectory",
    authors: "Chen, X., Chen, G.*, Ge, L., Cao, C., and Huang, B.",
    venue: "International Journal of Digital Earth, 17:1, 2300325 (2024)",
    link: "https://doi.org/10.1080/17538947.2023.2300325",
  },
  {
    title:
      "Medium-range trajectory prediction network compliant to physical constraint for oceanic eddy",
    authors: "Ge, L., Huang, B., Chen, X., and Chen, G.",
    venue:
      "IEEE Transactions on Geoscience and Remote Sensing 61, 1-14",
    link: "https://ieeexplore.ieee.org/document/10190732",
  },
  {
    title: "Submesoscale oceanic eddy detection in SAR images using context and edge association network",
    authors: "Xia, L., Chen, G., Chen, X., Ge, L., and Huang, B.",
    venue: "Frontiers in Marine Science 9, 1023624",
    link: "https://doi.org/10.3389/fmars.2022.1023624",
  },
  {
    title:
      "Vertical structure-based classification of oceanic eddy using 3-D convolutional neural network",
    authors: "Huang, B., Ge, L., Chen, X., and Chen, G.",
    venue: "IEEE Transactions on Geoscience and Remote Sensing 60, 1-14",
    link: "https://ieeexplore.ieee.org/document/9521672",
  },
];

const projects = [
  {
    title: "Full-Stack Machine Learning System for 5D Data Interpolation",
    summary: "Built a containerised end-to-end ML system for high-dimensional data interpolation.",
    details:
      "Built an end-to-end ML application with a FastAPI backend and a Next.js frontend, and containerised the full system using Docker and docker-compose, ensuring reproducible deployment and testing.",
  },
  {
    title: "AI-based Ocean Digital Twin",
    summary: "Led large-scale ML experiments using a 100+ TB data warehouse for ocean prediction.",
    details:
      "Led large-scale ML experimentation by developing a 100+ TB data warehouse and contributing to a multi-scale AI framework for ocean prediction.",
  },
  {
    title: "AI-Driven Detection of Ship-Induced Deep Ocean Disturbances",
    summary:
      "Built physics-informed GAN to detect ship-induced deep-ocean disturbances.",
    details:
      "Led the development of scalable data processing pipelines and designed a physics-informed GAN to model and quantify ship-induced deep-ocean turbulence.",
  },
  {
    title: "Medium-range Eddy Forecasting",
    summary:
      "Forecasted oceanic eddy trajectories using historical patterns and deep learning.",
    details:
      "Built LSTM-based models on historical eddy tracks to predict short-term movement and interactions. This work helps improve understanding of mesoscale ocean dynamics.",
  },
];

export { publications, projects };
