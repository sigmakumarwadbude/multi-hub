# multi-hub

Integrated Nx workspace created with the `apps` preset and prepared for a multi-framework micro frontend setup.

## Included plugins

This workspace already has the core Nx packages plus frontend plugins for:

- React via `@nx/react`
- Angular via `@nx/angular`
- Vue via `@nx/vue`
- Web tooling via `@nx/web`

That means the repo is ready to host apps and shared libraries from more than one framework in the same workspace.

## Workspace layout

- `apps/` for runnable applications such as hosts and remotes
- `libs/` for shared code, UI packages, contracts, and utilities

## Module Federation support

The installed Nx plugins expose Module Federation generators for React and Angular.

### React host and remote

```sh
npx nx g @nx/react:host shell --directory=apps
npx nx g @nx/react:remote products --host=shell --directory=apps
```

### Angular host and remote

```sh
npx nx g @nx/angular:host shell-ng --directory=apps
npx nx g @nx/angular:remote account-ng --host=shell-ng --directory=apps
```

### Federate an additional module

React:

```sh
npx nx g @nx/react:federate-module checkout --project=products
```

Angular:

```sh
npx nx g @nx/angular:federate-module orders --project=account-ng
```

## Multi-framework examples

Generate apps from different frameworks into the same workspace:

```sh
npx nx g @nx/react:app storefront --directory=apps
npx nx g @nx/angular:app dashboard --directory=apps
npx nx g @nx/vue:app support --directory=apps
```

Generate shared libraries:

```sh
npx nx g @nx/react:lib ui-shell --directory=libs
npx nx g @nx/angular:lib data-access --directory=libs
npx nx g @nx/vue:lib support-widgets --directory=libs
```

## Suggested architecture

- Use React or Angular for federated hosts and remotes
- Use `libs/` for shared API contracts, auth state, feature flags, and design tokens
- Keep framework-neutral code in TypeScript libraries under `libs/`
- Treat Vue apps as standalone apps or consumers of shared libraries unless you add a custom federation strategy for them

## Useful commands

```sh
npm run graph
npm run reset
npx nx show projects
```

## Notes for this environment

In this Codex sandbox, some Nx generator commands may require running outside the sandbox because Nx spawns background processes while building the project graph. The workspace itself is valid, and on a normal local shell the generators above should work as expected.
