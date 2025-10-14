## Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 

## Run tests:

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```

## Run Storybook:

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
# or
bun storybook
```

# 1. Project structure:
I would use a module(feature)-based approach with all you need in one place, so you don't need to search specific file everywhere. 

```bash
src/
 ├─ app/                 # Pages Next.js (app router). Large pages may be decomposed into sections (as non-shared components)  
 ├─ components/          # Shared + Small components (reusable components with some logic, may combine a few shared components)
 ├─ modules/             # Modules (Separated features) with business logic (Auth, Order, Cart)
 ├─ hooks/               # Custom React-hooks
 ├─ lib/                 # Utils, configs, API services
 ├─ styles/              # Global styles & themes
 └─ types/               # Global Typescript types
```

# 2. Working with API in a large project

In a large project, I would isolate all API work in a separate layer, for example, in src/lib/api or src/services.

I would use:
* Axios or fetch-wrapper with basic configuration (base URL, error handlers, interceptors).
* React Query for caching, refetching, optimistic updates and convenient query state management, error handling.

This approach ensures stability, reuse of queries and easy replacements in case of the backend changes.

# 3. Scaling pages, functionality, blocks

For scaling, I would follow the principles of SOLID:
* Each page is a set of independent blocks (sections) that can be reused.
* New pages are added as separate modules in app/, while business logic and components stay isolated.
* Shared styles and design system (Tailwind + CVA + Shadcn) ensure consistency.
* Over time, you can integrate Storybook for visual testing of components, Vitest for unit tests, also Playwright for the E2E-tests

# 4. Main risks in the front-end
* Increased state complexity when scaling without centralized management (can be solved by using React Query / Zustand / Redux Toolkit).
* UI inconsistency if the design system is not supported (must follow design system rules and theme patterns, + good to have a clear component library with the good tests coverage and stories).
* API instability that can break the front-end (everything must be typed properly, errors must be handled, also good to have some real-time analytics (logs) like Sentry.io)
* Bundle overloading with uncontrolled imports (can be solved by using lazy-loading and code-splitting)
* Project structure inconsistency / large files / zombie code (proper ESLint config + refactoring sessions once in a while)