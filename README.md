![Multi-Hub Hero](file:///C:/Users/sigma/.gemini/antigravity/brain/3d3beb19-ac50-4870-be4d-bc3539a558c7/multi_hub_hero_1777104899508.png)

# 🌐 Multi-Hub: Advanced Microfrontend Workspace

[![Nx](https://img.shields.io/badge/Nx-22.6.5-blue?style=for-the-badge&logo=nx)](https://nx.dev)
[![Angular](https://img.shields.io/badge/Angular-21.2-red?style=for-the-badge&logo=angular)](https://angular.io)
[![Module Federation](https://img.shields.io/badge/Module_Federation-v2-orange?style=for-the-badge&logo=webpack)](https://module-federation.io/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A state-of-the-art **Nx Monorepo** designed for high-performance, scalable microfrontend architectures. Multi-Hub leverages **Angular 21**, **Module Federation**, and **Tailwind CSS** to provide a seamless "Shell & Remotes" experience.

---

## 🏛 Architecture Overview

Multi-Hub uses a **Distributed Frontend Architecture** where a central "Host Shell" dynamically orchestrates multiple independent "Remotes" at runtime.

```mermaid
graph TD
    Host[("🏠 Host Shell (Port 4200)")]
    Posts[("📝 Posts MF (Port 4201)")]
    Users[("👥 Users MF (Port 4202)")]
    Shared[("📦 Shared Libs")]

    Host -.->|Dynamic Import| Posts
    Host -.->|Dynamic Import| Users
    Posts --- Shared
    Users --- Shared
    Host --- Shared

    style Host fill:#2c3e50,stroke:#3498db,stroke-width:4px,color:#fff
    style Posts fill:#d35400,stroke:#e67e22,stroke-width:2px,color:#fff
    style Users fill:#27ae60,stroke:#2ecc71,stroke-width:2px,color:#fff
```

---

## ✨ Core Features

-   **⚡ Zero-Config Federation:** Automatic module federation setup using Nx plugins.
-   **🎨 Unified Styling:** Shared design system powered by Tailwind CSS.
-   **🚀 Concurrent Development:** Start all microfrontends with a single command.
-   **🛡 Type Safety:** Cross-application type definitions and interface sharing.
-   **📊 Smart Graph:** Automated dependency visualization via Nx Graph.

---

## 🛠 Tech Stack

| Category | Technology |
| :--- | :--- |
| **Monorepo** | [Nx 22.6.5](https://nx.dev) |
| **Host Framework** | [Angular 21.x](https://angular.io) |
| **Microfrontends** | [Module Federation v2](https://module-federation.io/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) |
| **Bundlers** | Webpack & Vite |
| **Testing** | Vitest & Playwright |

---

## 📂 Project Structure

```text
multi-hub/
├── apps/
│   ├── host-shell/         # 🏠 Main orchestrator application
│   └── host-shell-e2e/     # 🧪 End-to-end tests for the host
├── posts_mf/               # 📝 Posts Microfrontend (Remote)
├── users_mf/               # 👥 Users Microfrontend (Remote)
├── libs/                   # 📦 Shared libraries & components (Coming soon)
└── nx.json                 # ⚙️ Nx workspace configuration
```

---

## 🏁 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Running the Workspace

| Task | Command | Description |
| :--- | :--- | :--- |
| **Serve All** | `npm run serve:all` | **(Recommended)** Starts Host and all Remotes concurrently |
| **Serve Host** | `npm run start` | Starts only the Host Shell |
| **Serve Posts**| `npx nx serve posts_mf` | Starts only the Posts Remote |
| **Serve Users**| `npx nx serve users_mf` | Starts only the Users Remote |

### 3. Port Mapping

| Application | Port | Endpoint |
| :--- | :--- | :--- |
| **Host Shell** | `4200` | `http://localhost:4200` |
| **Posts MF** | `4201` | `http://localhost:4201` |
| **Users MF** | `4202` | `http://localhost:4202` |

---

## 🧩 Developer Guide

### Adding a New Remote

To add a new Angular remote to the `host-shell`:

```bash
npx nx g @nx/angular:remote <name> --host=host-shell
```

### Visualizing the Graph

To see how your microfrontends are interconnected:

```bash
npm run graph
```

---

> [!TIP]
> Use `npm run serve:all` during development to ensure all federated modules are available to the host shell.

Created with ❤️ by the Multi-Hub Team.
