# Multi-Hub Microfrontend Workspace

A modern, high-performance Nx monorepo designed for hybrid microfrontend architectures using **Angular**, **React**, and **Module Federation**.

## 🚀 Overview

This workspace is configured to support a distributed development model where multiple frontend frameworks coexist. It leverages **Nx 22** and **Module Federation** to provide a seamless integration of remote applications into a central host shell.

## 🛠 Tech Stack

- **Monorepo Engine:** [Nx 22.6.5](https://nx.dev)
- **Host Framework:** [Angular 21.x](https://angular.io)
- **Remote Support:** React 19.x, Angular 21.x, Vue.js
- **Bundler:** Webpack (with Module Federation support)
- **Testing:** Vitest (Unit), Playwright (E2E)

## 📂 Project Structure

- `apps/`
  - `host-shell`: The main Angular host application.
  - `host-shell-e2e`: End-to-end tests for the host shell.
- `libs/`: Shared libraries, UI components, and utility functions.

## 🏁 Getting Started

### Active Host: `host-shell`

The `host-shell` is the entry point for the microfrontend hub. It is pre-configured with routing and Module Federation.

#### Run the development server:
```sh
npx nx serve host-shell
```

#### Run unit tests:
```sh
npx nx test host-shell
```

#### Run E2E tests:
```sh
npx nx e2e host-shell-e2e
```

## 🧩 Adding Microfrontends

The workspace is ready for adding both Angular and React remotes.

### Add an Angular Remote:
```sh
npx nx g @nx/angular:remote <remote-name> --host=host-shell --directory=apps/<remote-name>
```

### Add a React Remote:
```sh
npx nx g @nx/react:remote <remote-name> --host=host-shell --directory=apps/<remote-name>
```

## 🛠 Useful Commands

| Command | Description |
| :--- | :--- |
| `npx nx graph` | Visualize the workspace graph |
| `npx nx show projects` | List all projects in the workspace |
| `npx nx report` | Show Nx version and plugin information |
| `npm run reset` | Reset the Nx cache |

---
*Created with ❤️ using Nx 22.*
