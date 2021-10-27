const Project = require("../models/Projects");

const insert = (projectData) => {
  const projects = new Project({
    name: projectData.name,
  });
  return projects.save();
};
const list = () => {
  return Project.find();
};

module.exports = { insert, list };
