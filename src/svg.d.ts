// src/svg.d.ts

declare module '*.svg?react' {
    import * as React from 'react';
    const SVGComponent: React.FunctionComponent<React.SVGProps<SVGElement>>;
    export default SVGComponent;
}
