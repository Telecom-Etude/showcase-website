# Contributing to Jet Centre

Thank you for your interest in contributing to **Telecom Etude's Showcase Website**🚀! We're excited to have your help. Please review the guidelines below to ensure a smooth contribution process.

---

## Table of Contents

1. [Getting started](#getting-started)
2. [How to Contribute](#how-to-contribute)
    - [Reporting Issues](#reporting-issues)
    - [Contributing Code](#contributing-code)
3. [Style Guidelines](#style-guidelines)
4. [Commit messages](#commit-messages)

---

## Getting started

Please refer to the [Getting Started Guide](GETTING_STARTED.md) to know how to install and launch the project!

## How to Contribute

### Reporting Issues

If you find a bug or have a question:

1. Check the [issue tracker](https://github.com/telecom-etude/jet-centre/issues) to see if it’s already reported.
2. If it’s not listed, open a [new issue](https://github.com/telecom-etude/jet-centre/issues/new).
    - Provide a clear description of the issue.
    - Include steps to reproduce the problem.
    - Add screenshots or logs, if applicable.
    - We will answer shortly, please keep in touch!

### Contributing Code

1. **Read the [Getting Started Guide](GETTING_STARTED.md)** to set up the project locally.
2. [Fork](#fork) the project.
3. Make your changes, ensuring you follow the [Style Guidelines](#style-guidelines).
4. Once finished with all your code on your fork, make sure you are up-to-date with the `main` branch of `jet-centre`.
5. Once finished, make a [Pull request](https://github.com/telecom-etude/jet-centre/pulls) with your fork.
    - Provide a clear description of the feature.
        - What the changes are.
        - The motivation behind them.
        - Any related [issues](<(https://github.com/telecom-etude/jet-centre/issues)>).
    - Add screenshots if applicable.
    - We will answer shortly, please keep in touch!

### Fork

![Fork](fork.png)

### Style Guidelines

- Code Style: Follow Next.js best practices and use ESLint and Prettier.
- Formatting: Ensure code is formatted using the project's Prettier configuration.
    - If you use _vscode_, some extensions will be recommended when you install the project: please install them.
    - Otherwise, personally make sure your code is formatted and is correct relatively to the [.prettierrc] and [.eslintrc.json] files.
    - To format your code, run `npm run fmt`

### Commit Messages

Follow the Conventional Commits format:

```txt
action: what the commit does
```

For instance, if you fix the redirection callback on the signin page, a good commit name is

```txt
fix: redirection callback on the signin page
```

Naming a commit can be hard, for this, you can try to complete the sentence _This commit will..._. The verb after _will_ is your action, and the rest of the sentence is what you can put after the colon. Again with our previous example, you can say _This commit will **fix** the redirection callback on the signin page_.
