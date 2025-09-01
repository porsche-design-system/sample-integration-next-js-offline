# Porsche Design System for Next.js (Offline Build v3.29.0)

## About

This repository demonstrates how to integrate the Porsche Design System with **Next.js** using a specialized offline build.
This is particularly useful for applications that need to function without an internet connection.

A custom offline build of the Porsche Design System `v3.29.0` npm package is located in `./@porsche-design-system/components-{js|react}`.
This build is designed for offline use and does not retrieve assets from the global CDN (`https://cdn.ui.porsche.com` or `https://cdn.ui.porsche.cn`).

Instead, it expects all assets — such as fonts, icons, and web components — to be served from `${YOUR_BASE_URL}/assets/porsche-design-system/`.

> With the upcoming version 4 of the Porsche Design System, a new solution will be available that works out of the box in offline contexts, making this workflow obsolete.

## Integration

### Step 1

Copy the `./@porsche-design-system` folder and its contents from this repository into the **root directory** of **your** [Next.js](https://nextjs.org/docs/app/getting-started/installation) project.

Next, copy the `./public/assets/porsche-design-system` directory into the **same location** in **your** project.

### Step 2

Extend the **scripts** section of your `package.json` file.

```
// package.json

"scripts": {
  "postinstall": "npm run copy:@porsche-design-system/components-react && npm run copy:@porsche-design-system/components-js",
  "copy:@porsche-design-system/components-react": "rm -rf ./node_modules/@porsche-design-system/components-react && cp -r ./@porsche-design-system/components-react/. ./node_modules/@porsche-design-system/components-react",
  "copy:@porsche-design-system/components-js": "rm -rf ./node_modules/@porsche-design-system/components-js && cp -r ./@porsche-design-system/components-js/. ./node_modules/@porsche-design-system/components-js",
  …
}
```

### Step 3

Add the `@porsche-design-system/components-react` npm package with version `3.29.0`.

```
npm install @porsche-design-system/components-react@3.29.0
```

### Step 5

Wrap your application with the `<PorscheDesignSystemProvider />`, then integrate the Porsche Design System components you need.

For additional information on how to integrate Partials and Tailwind CSS, you can also refer to the [Getting Started](https://designsystem.porsche.com/v3/developing/next-js/getting-started) section of the official documentation.

```
// app/layout.tsx

import { PorscheDesignSystemProvider } from '@porsche-design-system/components-react/ssr'; // ensure to import from ssr subpackage!

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PorscheDesignSystemProvider>{children}</PorscheDesignSystemProvider>
      </body>
    </html>
  );
}
```

```
// app/page.tsx

import { PWordmark, PButton, PFlag } from '@porsche-design-system/components-react/ssr'; // ensure to import from ssr subpackage!

export default function Home() {
  return (
    <div className="…">
      <div>
        <PWordmark />
        <PButton icon="add">Some label</PButton>
        <PFlag />
      </div>
      …
    </div>
  );
}
```

### Step 6

Once the web application is built and served, open your browser's developer console.
All Porsche Design System assets should then be loaded from `${YOUR_BASE_URL}`.
