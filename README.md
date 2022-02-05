# cypress-with-typescript

It is an automation test repo to learn and understand Cypress test framework. The repo contains UI based tests only and have used [OrangeHRM's demo site](https://opensource-demo.orangehrmlive.com/index.php/dashboard) to build up test scenarios.

## Pre-Requisite:

1. Cypress is a desktop application that users need to install in their systems. The Cypress desktop application supports the following operating systems:

- MacOS 10.9 and above (64-bit only)
- Windows 7 and above
- Linux Ubuntu 12.04 and above, Fedora 21 and Debian.

2. Cypress is a Node-based application. One needs to have Node.js preinstalled in their systems (Node.js 12 or 14 and above). Node.js is a JavaScript runtime environment. The Node.js installation also covers the installation of npm (Node package manager). Download and install Node.js for a particular operating system from this [official resource](https://nodejs.org/en/download/).

3. Git is installed and configured. Please see this [article](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git) in the github documentation.

## Fork + Testing + Help

The steps below will help you setting up this repo and running of the tests. It is assumed you have met the prerequites.

**If you get stuck, here is more help:**

- [Cypress Support](https://on.cypress.io/support)

### 1. Fork this repo

If you want to experiment with running this project in Continuous Integration, you'll need to [fork](https://github.com/imishu/cypress-with-typescript) it first.

After forking this project in `Github`, run these commands:

```bash or cmd or terminal
## clone this repo to a local directory
***HTTPS:*** git clone https://github.com/<your_git_username>/cypress-with-typescript.git ***, or***
***SSH:*** git clone git@github.com:<your_git_username>/cypress-with-typescript.git



## cd into the cloned repo
cd cypress-with-typescript

## install the node_modules
npm install

## to run test
npm start test
```

You should see the Cypress test browser is up and running. We are now ready to run Cypress tests.

### 2. Helpful Articles:

1. [Cypress Official Site](https://docs.cypress.io/guides/getting-started/installing-cypress)
2. [ToolsQA Site](https://www.toolsqa.com/cypress/what-is-cypress/)

### 3. Some Training Tutorials:

1. [Test Automation University Tutorial](https://testautomationu.applitools.com/cypress-tutorial/chapter1.html)
2. [Youtube Tutorial](https://youtube.com/playlist?list=PLhW3qG5bs-L9LTfxZ5LEBiM1WFfvX3dJo)
