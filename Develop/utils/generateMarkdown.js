//class and function created for the markdown generation
class MarkDown {
  //This will pull the correct badge based on the answer that is provided in the README generation.
  static renderLicenseBadge(license) {
    const badges = {
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      gnuplv3:
        '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    return badges[license]
  };

  static renderLicenseLink(license) {
    const licenseLinks = {
      mit: "[MIT](https://choosealicense.com/licenses/mit/)",
      isc: "[ISC](https://choosealicense.com/licenses/isc/)",
      gnuplv3: "[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)",
    }
    return licenseLinks[license]
  };

  static renderLicenseSection(license) {
    if (license) {
      return `Licensed under the ${this.renderLicenseLink(license)} license.`;
    } else {
      return "";
    }
  };

  static generateReadme(data) {
    return `
  # ${data.title}  

    ${this.renderLicenseBadge(data.license)}


  ## Table of Contents:
  * [Installation](#installation)
  * [Description](#description)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ### Description
  ${data.description}
  
  ### Usage:
  ${data.usage}

  ### Installation:
  ${data.installation}

  ### License:
  ${this.renderLicenseSection(data.license)}

  ### Credits:
  ${data.credits}

  ### Tests 
  ${data.tests}

  ### Questions
  Email: ${data.email}
  Github: ${data.github}
    `;
  }
}

module.exports = MarkDown;
