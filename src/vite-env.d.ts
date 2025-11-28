/// <reference types="vite/client" />

declare module 'figma:assets/*' {
    const assetUrl: string;
    export default assetUrl;
  }

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
  