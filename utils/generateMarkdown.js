// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return `![Apache Badge](https://img.shields.io/badge/License-Apache-blue)`;
    case "GNU":
      return `![GNU Badge](https://img.shields.io/badge/License-GNU-red)`;
    case "MIT":
      return `![MIT Badge](https://img.shields.io/badge/License-MIT-green)`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
    case "GNU":
      return `[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)`;
    case "MIT":
      return `[MIT License](https://choosealicense.com/licenses/mit/)`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "Apache":
      return `The project's license is ${renderLicenseLink(license)} ${renderLicenseBadge(license)}`;
    case "GNU":
      return `The project's license is ${renderLicenseLink(license)} ${renderLicenseBadge(license)}`;
    case "MIT":
      return `The project's license is ${renderLicenseLink(license)} ${renderLicenseBadge(license)}`;
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  \n [Installation](#installation)
  \n [Usage](#usage)
  \n [License](#license)
  \n [Contributions](#contributions)
  \n [Test Instructions](#test-instructions)
  \n [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contribution Guidelines
  ${data.contribution}
  ## Test Instructions
  ${data.test}
  ## Questions
  If you have any questions please contact me on: ${data.contact}
    
  \nGitHub Profile: https://github.com/${data.githubUsername}
  `;
}

module.exports = generateMarkdown;
