# 리액트 + 타입스크립트 + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. 

`해당 탬플릿은 소규모 리액트 구축환경을 지원하며 HMR 과 약간의 ESLint 규칙들이 Vite 에 포함되어 있습니다. .`

Currently, two official plugins are available:

`현재 두 공식적인 플러그인들 :`

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# `shadcn/ui` 라이브러리 사용 안내

해당 프로젝트의 ui 라이브러리는 `shadcn/ui` 라이브러리를 사용중입니다.

https://ui.shadcn.com/
___
그리고 컴포넌트를 확인하려면 데모와 코드구현등 제공해주는 페이지입니다.

https://ui.shadcn.com/docs/components

## 컴포넌트 추가
### 설치
원하는 컴포넌트가 있을 경우... 예를 들어 `Card` 컴포넌트를 설치 시나리오입니다.

- 해당 컴포넌트가 존재하는지 검색.
- Installation 영역에서 제공하는 <b>CLI</b> 방식으로 추가. 
- - 패키지 매니저는 `npx` 으로 추가하기 (`pnpm | npx | yarn | bun | 메뉴얼 설치등 다양한 방법이 존재`)
```ts
npx shadcn@latest add 컴포넌트명
```
### 설치된 위치
추가한 컴포넌트는 프로젝트 루트 기준 `src/components/ui/` 디렉토리에 추가됩니다.
```scss
co-op-front. // 루트 
├── README.md
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── public
│   └── vite.svg
├── src
│   ├── App.scss
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── common
│   │   ├── features
│   │   │   ├── Hero
│   │   │   └── signup
│   │   │       └── signup-form.tsx
│   │   └── ui !!!︎ npx shadcn@latest add... 를 통해 추가할 위치 !!!
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── field.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── separator.tsx
│   ├── hooks
│   ├── lib
│   │   ├── typography.ts
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages
│   │   └── Example
│   │       ├── Example.scss
│   │       └── example-Page.tsx
│   ├── styles
│   │   ├── _mixins.scss
│   │   ├── _variables.scss
│   │   └── index.scss
│   ├── types
│   └── utils
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```
