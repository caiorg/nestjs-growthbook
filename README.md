
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>nestjs-growthbook
</h1>
<h3>◦ Accelerate growth with nestjs-growthbook!</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style&logo=Prettier&logoColor=black" alt="Prettier" />
<img src="https://img.shields.io/badge/Jest-C21325.svg?style&logo=Jest&logoColor=white" alt="Jest" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />

<img src="https://img.shields.io/badge/SemVer-3F4551.svg?style&logo=SemVer&logoColor=white" alt="SemVer" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Ajv-23C8D2.svg?style&logo=Ajv&logoColor=white" alt="Ajv" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/languages/top/caiorg/nestjs-growthbook?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/caiorg/nestjs-growthbook?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/caiorg/nestjs-growthbook?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/caiorg/nestjs-growthbook?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

This project is a NestJS module that provides functionality for GrowthBook, a feature experimentation platform. The core functionality of the project is encapsulated in the `GrowthBookService` class, which extends GrowthBook and allows for easy integration with other NestJS modules. The purpose of the project is to provide developers with a convenient way to load features and perform feature experimentation using GrowthBook within a NestJS application. The value proposition of the project is that it simplifies the integration and usage of GrowthBook in a NestJS environment, allowing developers to easily implement and test feature experiments.

---

## ⚙️ Features

| Feature                | Description                           |
| ---------------------- | ------------------------------------- |
| **⚙️ Architecture**     | The codebase follows a modular architecture using NestJS, allowing for flexible and maintainable code. Its extensibility is enhanced with dependency injection (DI) and modular imports.    |
| **📖 Documentation**   | The codebase lacks comprehensive documentation, making it difficult for new developers to understand and contribute to the project. A more detailed explanation of classes, methods, and configurations would be helpful.     |
| **🔗 Dependencies**    | The codebase relies on external dependencies such as NestJS, GrowthBook, and TypeScript. These dependencies provide frameworks, libraries, and type safety, enhancing the development experience.   |
| **🧩 Modularity**      | The codebase is well-organized into modules. Each module has its own responsibilities, making the code reusable and separating concerns effectively. Integration with other code modules is achieved through DI.    |
| **✔️ Testing**          | The codebase includes unit tests written using NestJS's testing module. However, the test coverage could be improved, especially for complex scenarios and integration testing.   |
| **⚡️ Performance**      | Performance-wise, the codebase should be efficient as the use of NestJS, GrowthBook, and TypeScript ensures optimized runtime performance. Proper load testing should be performed to ensure performance under pressure.   |
| **🔐 Security**        | The codebase doesn't contain specific security measures. Additional security considerations, such as input validation, avoiding injection vulnerabilities, and incorporating security frameworks, should be implemented to ensure the system's security.   |
| **🔀 Version Control** | The codebase utilizes Git for version control, providing the ability to track changes, collaborate, and revert to previous versions if necessary. Proper branching and tagging strategies would improve the development workflow.   |
| **🔌 Integrations**    | The codebase doesn't show explicit integration with external systems but can easily integrate with other NestJS modules or third-party libraries for communication with databases, APIs, or other microservices.    |
| **📶 Scalability**     | The modular design and dependency injection make the codebase easily scalable. New features, modules, or services can be added without much code modification. Proper horizontal scaling and load balancing can further enhance scalability.   |

---


## 📂 Project Structure


```bash
repo
├── LICENSE
├── package.json
├── src
│   ├── constants.ts
│   ├── growth-book.module-definition.ts
│   ├── growth-book.module.ts
│   ├── growth-book.service.spec.ts
│   ├── growth-book.service.ts
│   ├── index.ts
│   └── types
│       ├── growth-book.interface.ts
│       └── index.ts
├── tsconfig.build.json
├── tsconfig.json
└── yarn.lock

3 directories, 13 files
```

---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                               | Summary                                                                                                                                                                                                                                                                                           |
| ---                                                                                | ---                                                                                                                                                                                                                                                                                               |
| [.eslintrc.js](https://github.com/caiorg/nestjs-growthbook/blob/main/.eslintrc.js) | The provided code snippet is a configuration object for the TypeScript ESLint plugin. It sets up the parser, parser options, plugins, extends the recommended configuration, sets the root and environment, and defines rules to turn off certain TypeScript type-checking related linting rules. |

</details>

<details closed><summary>Src</summary>

| File                                                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                                            | ---                                                                                                                                                                                                                                                                                                                                                                  |
| [growth-book.service.spec.ts](https://github.com/caiorg/nestjs-growthbook/blob/main/src/growth-book.service.spec.ts)           | The code snippet is a unit test for the GrowthBookService class. It creates a testing module using NestJS's Test.createTestingModule method and provides dependencies, including a mock implementation for the GrowthBookService class. It also sets up a mock function for the loadFeatures method. Finally, it tests if the GrowthBookService instance is defined. |
| [growth-book.service.ts](https://github.com/caiorg/nestjs-growthbook/blob/main/src/growth-book.service.ts)                     | The code snippet defines a GrowthBookService class that extends from GrowthBook. It uses the @nestjs/common package for dependency injection. It receives GrowthBookOptions as a parameter and sets polyfills for compatibility. It implements lifecycle methods onModuleInit and onModuleDestroy to load features and destroy the service respectively.             |
| [growth-book.module.ts](https://github.com/caiorg/nestjs-growthbook/blob/main/src/growth-book.module.ts)                       | The provided code snippet is a module in a NestJS application that exports and makes available the `GrowthBookService` for other modules to use. The `GrowthBookService` is a class that provides functionality related to GrowthBook.                                                                                                                               |
| [growth-book.module-definition.ts](https://github.com/caiorg/nestjs-growthbook/blob/main/src/growth-book.module-definition.ts) | The code snippet allows for the configuration of a module using a provided class method. It defines the ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE, and ASYNC_OPTIONS_TYPE, which can be used to customize module behavior by passing options during initialization.                                                                                |
| [constants.ts](https://github.com/caiorg/nestjs-growthbook/blob/main/src/constants.ts)                                         | The code snippet defines two symbols:-GROWTHBOOK_SERVICE_TOKEN: Represents a token for the GrowthBook service.-GROWTHBOOK_OPTIONS: Represents a symbol for the GrowthBook options.                                                                                                                                                                                   |
| [index.ts](https://github.com/caiorg/nestjs-growthbook/blob/main/src/index.ts)                                                 | This code exports various functionalities related to a growth book module, including its types and services.It allows for importing and using these functionalities in other parts of the application.                                                                                                                                                               |

</details>

<details closed><summary>Types</summary>

| File                                                                                                                 | Summary                                                                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                                  | ---                                                                                                                                                                                                                                                                                                                                                                                |
| [growth-book.interface.ts](https://github.com/caiorg/nestjs-growthbook/blob/main/src/types/growth-book.interface.ts) | The code snippet exports an interface called GrowthBookOptions, which has two properties: 1.'context' of type Context: This represents the context of the growth book.2.'loadFeatures' of type LoadFeaturesOptions (optional): This represents the options for loading features.Overall, this code allows for flexible configuration of GrowthBookOptions in a TypeScript project. |
| [index.ts](https://github.com/caiorg/nestjs-growthbook/blob/main/src/types/index.ts)                                 | The provided code exports all the functionalities defined in the file'growth-book.interface' for use by other code modules or components.                                                                                                                                                                                                                                          |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - `ℹ️ Requirement 1`
> - `ℹ️ Requirement 2`
> - `ℹ️ ...`

### 📦 Installation

1. Clone the nestjs-growthbook repository:
```sh
git clone https://github.com/caiorg/nestjs-growthbook
```

2. Change to the project directory:
```sh
cd nestjs-growthbook
```

3. Install the dependencies:
```sh
npm install
```

### 🎮 Using nestjs-growthbook

```sh
npm run build && node dist/main.js
```

### 🧪 Running Tests
```sh
npm test
```

---


## 🗺 Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Refactor Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  INSERT-LICENSE-TYPE` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---

## 👏 Acknowledgments

> - `ℹ️  List any resources, contributors, inspiration, etc.`

---
