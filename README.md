# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

`해당 탬플릿은 소규모 리액트 구축환경을 지원하며 HMR 과 약간의 ESLint 규칙들이 Vite 에 포함되어 있습니다.`

Currently, two official plugins are available
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
`리액트 컴파일러의 경우 dev & build 성능 충돌로인해 비활성화 상태입니다. 추가할경우 해당 문서를 참고해주세요.` [설치](https://react.dev/learn/react-compiler/installation)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules :

`혹시나 배포할 애플리케이션을 개발중일 경우, 다음 설정으로 설정하시는 것을 추천 드립니다.` : 
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
## `shadcn/ui` 라이브러리 사용 안내

해당 프로젝트의 ui 라이브러리는 `shadcn/ui` 라이브러리를 사용중입니다.

https://ui.shadcn.com/

그리고 컴포넌트를 확인하려면 데모와 코드구현등 제공해주는 페이지입니다.

https://ui.shadcn.com/docs/components

### 컴포넌트 추가

#### 설치
원하는 컴포넌트가 있을 경우... 예를 들어 `Card` 컴포넌트 설치 시나리오입니다.

- 해당 컴포넌트가 존재하는지 검색.
- Installation 영역에서 제공하는 <b>CLI</b> 방식으로 추가.
  - 패키지 매니저는 `npx` 으로 추가하기 (`pnpm | npx | yarn | bun | 메뉴얼 설치등 다양한 방법이 존재`)

```npm
npx shadcn@latest add 컴포넌트명
```
#### 설치된 위치
추가한 컴포넌트는 프로젝트 루트 기준 `src/components/ui/` 디렉토리에 추가됩니다.
```
CO-OP-FRONT
. 
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
│   │   └── ui  <<<== [!!!︎ npx shadcn@latest add... 를 통해 추가할 위치 !!!]
...
기타 등등 디렉토리
```

## 주의사항
무슨일이 있더라도 __절대로 절대 `./src/components/ui` 와 `./src/components/common` 디렉토리등__
건드리지 마세요..!

자신이 작업하는 디렉토리만 수정하도록 합시다. `(예를 들어 feature/... 에 작업해주세요)`

## 현재 등록된 Aliases 목록
경로를 쉽게 참조할 수 있는 목록있니다.
필요시 문의해주세요!

```
CO-OP-FRONT 
.
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── common
│   │   ├── icons
│   │   │   └── index.ts
│   │   ├── reactbits
│   │   │   └── SplitText.tsx
│   │   ├── template
│   │   │   └── signup-form.tsx
│   │   └── ui
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── field.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       └── skeleton.tsx
│   ├── data
│   ├── hooks
│   ├── lib
│   │   └── utils.ts
│   ├── pages
│   │   └── hero
│   │       ├── hero.scss
│   │       └── hero.tsx
│   ├── styles
│   │   ├── _mixins.scss
│   │   ├── _variables.scss
│   │   └── globals.scss
│   └── types
...

```

### Aliases 목록 및 사용법
`@/...` : `./src` 부터 참조 시작...
즉 `./src` 는 `@/` 로 치환됩니다.
___
`프로젝트 내에 있지만 너무나 깊은 곳에 있는 위치 폴더...` 에서 `components/common/...` 에 있는 디렉토리에 있는 컴포넌트를 불러올 경우...

기존방식: `import {...} from "../../../../components/common/...`;

별칭방식: `import {...} from "@/commmon/...`;

위처럼 간단히 불러올 수 있습니다.
___
**`tsconfig.app.json`**
```json
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@styles/*": ["./src/styles/*"],
      "@assets/*": ["./src/assets/*"],
      "@components/*" : ["./src/components/*"],
      "@/components/*" : ["./src/components/*"],
      "@types/*" : ["./src/types/*"],
      "@data/*": ["./src/data/*"],
      "@libs/*": ["./src/lib/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@icons/*": ["./src/components/icons/*"],
      "@templates/*": ["./src/components/templates/*"],
      "@pages/*": ["./src/components/pages/*"],
    }
```
`vite.config.ts`
```ts
/* Path Aliases */
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@styles": path.resolve(__dirname, "./src/styles"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@types": path.resolve(__dirname, "./src/types"),
            "@data": path.resolve(__dirname, "./src/data"),
            "@libs": path.resolve(__dirname, "./src/libs"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@icons": path.resolve(__dirname, "./src/components/icons"),
            "@templates": path.resolve(__dirname, "./src/components/templates"),
            "@pages": path.resolve(__dirname, "./src/components/pages"),
        }
    }
```
