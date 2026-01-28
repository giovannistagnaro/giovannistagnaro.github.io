import DataPointsUrl from "../../../assets/images/japaneseRealEstate/data-points-by-prefecture.png";
import GeospatialUrl from "../../../assets/images/japaneseRealEstate/geospatial-map-2019.png";
import type { Project } from "../../../types/project";
import type { CardItem } from "../../../types/content";

const id = "japaneseRealEstate";
const title = "Japanese Real Estate Prices and Proximity to Transport";

export const japaneseRealEstateProject: Project = {
  id,
  title,
  description:
    "In this project, my team sought to discover whether or not proximity to transport influenced Japanese real estate prices from 2007 to 2019. Our hypothesis was that we would find a positive correlation between closer proximity to public transport and higher real estate prices. In order to answer our question, we employed a variety of graph types and thoughtful statistical analysis on a dataset that included factors such as trade price, year, prefecture, and min/max time to nearest station.  We used regreession analysis to better determine the relationship and get a clearer picture of what we had found.\nThroughout the project, we followed the standard principles of data science research.  This began with formulating a measurable question, broad enough to require analysis, but constrained enough so that analysis was possible.  From here, we did some background research and found appropriate datasets to analyze.  This was followed by cleaning the dataset by dropping data irrelevant to our study, getting rid of invalid data, and normalizing data values.  This was followed by various analyses, such as looking at barplots of median trade prices, geospatial heat maps of prices over time, and Ordinary Least Squares (OLS) regression.",
  tldr: "Data science research project on the correlation between real estate prices and proximity to transport in Japan",
  highlights: [
    "Learned how to plan and execute a meaningful data science research project.",
    "Worked extensively with Python libraries, including Pandas and Numpy.",
    "Coordinated and distributed tasks across a group of 5 researchers.",
  ],
  images: [
    {
      src: DataPointsUrl,
      alt: "Data points by prefecture screenshot image",
      description: "Data Points by Prefecture Screenshot",
    },
    {
      src: GeospatialUrl,
      alt: "Geospatial map screenshot image",
      description: "Geospatial Map Screenshot",
    },
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/giovannistagnaro/COGS-108-Final-Project-Japanese-Real-Estate-Prices-and-Proximity-to-Transport/blob/master/FinalProject_group064.ipynb",
    },
  ],
  tech: ["Python", "Numpy", "Pandas", "Seaborn"],
};

export const japaneseRealEstateCard: CardItem = {
  id,
  meta: "COGS 108",
  title,
  subtitle: "Data Science + Research",
  type: "project",
};
