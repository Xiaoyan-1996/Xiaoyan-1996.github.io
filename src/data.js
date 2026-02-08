const publications = [
  {
    title: "On the ambiguity of oceanic eddy polarity",
    authors: "Chen, G., and Chen, X*.",
    venue: "Journal of Geophysical Research: Oceans, 130, e2024JC022239 (2025)",
    link: "https://doi.org/10.1029/2024JC022239",
  },
  {
    title:
      "Segmented Drifter Trajectory-Based Eddy Identification Validated by SWOT Altimetry",
    authors: "Liu, T., Chen, X*, and Chen, G.",
    venue: "IEEE Geoscience and Remote Sensing Letters (2025)",
    link: "https://doi.org/10.1109/LGRS.2025.3590395", // no DOI provided
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
      "Quantifying the degree of eddy quasi-geostrophy by generalizing Rossby deformation",
    authors: "Chen, X., and Chen, G*.",
    venue:
      "Journal of Geophysical Research: Oceans, 128(6), e2023JC019652 (2023)",
    link: "https://doi.org/10.1029/2023JC019652",
  },
  {
    title: "Eddy-induced pycnocline depth displacement over the global ocean",
    authors: "Chen, X., Li, H., Cao, C., and Chen, G*.",
    venue: "Journal of Marine Systems, 221(C11):103577 (2021)",
    link: "https://doi.org/10.1016/j.jmarsys.2021.103577",
  },
  {
    title:
      "Global oceanic eddy identification: A deep learning method from Argo profiles and altimetry data",
    authors: "Chen, X., Chen, G.*, Ge, L., Huang, B., and Cao, C.",
    venue: "Frontiers in Marine Science, 8:646926 (2021)",
    link: "https://doi.org/10.3389/fmars.2021.646926",
  },
];

const projects = [
  {
    title: "Ocean Eddy Detection",
    summary: "Developed ML models to detect ocean eddies from satellite data.",
    details:
      "Used a combination of convolutional neural networks and clustering algorithms on multi-source satellite altimetry data to identify and track eddies. Achieved >90% accuracy in validation datasets.",
  },
  {
    title: "Ocean Eddy Detection 2",
    summary: "Developed ML models to detect ocean eddies from satellite data.",
    details:
      "Used a combination of convolutional neural networks and clustering algorithms on multi-source satellite altimetry data to identify and track eddies. Achieved >90% accuracy in validation datasets.",
  },
  {
    title: "Drifter Trajectory Analysis",
    summary:
      "Analyzed segmented drifter trajectories to validate ocean eddy identification.",
    details:
      "Implemented algorithms to segment and cluster drifter paths. Compared against SWOT altimetry for validation. Results contributed to a publication in IEEE GRSL.",
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
