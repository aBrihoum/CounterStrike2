<div align="center">
<img width="800" src="https://i.ibb.co/mtXFrjC/banner-shadow.webp" alt="CS2 banner">

## Counter Strike 2 - Clone Of The Original Website

<br />
<a href="https://preactjs.com/" target="_blank" rel="noopener noreferrer">
<img src="https://img.shields.io/badge/Preact-673AB8?style=for-the-badge&logo=preact">
</a>
<a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E">
</a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
</a>
<a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
</a>
<a href="https://counter-strike2.vercel.app/" target="_blank" rel="noopener noreferrer">
<img src="https://img.shields.io/badge/Vercel-preview%20online-green?style=for-the-badge&logo=vercel">
</a>
<a href="https://github1s.com/aBrihoum/CounterStrike2/blob/HEAD/src/main.tsx" target="_blank" rel="noopener noreferrer">
<img src="https://img.shields.io/badge/github1s-View%20project-blue?style=for-the-badge&logo=github">
</a>

</div>

# Description

This is a simple clone of the [official Counter Strike 2 website](https://www.counter-strike.net/cs2).

I saw it as an opportunity to try out [React](https://react.dev/) (I mean [Preact](https://preactjs.com/)), learn the framework, and understand why it is so popular.

> **Note**
> This is my first time working with **React**, so you may encounter some anti-patterns. Nonetheless, I am constantly learning and improving

This website is made with the help of :

- [Preact](https://preactjs.com/)
- [React Compare Slider](https://react-compare-slider.vercel.app/)
- [ScrollOut](https://scroll-out.github.io/)

Since this project is just a demo; it lacks some features such as :

- Image lazy loading & [LQIP](https://cloudinary.com/blog/low_quality_image_placeholders_lqip_explained)

- Module lazy loading

- **Responsiveness** (made for desktop only)

Is [React](https://react.dev/) cool? yea, but i do miss [Angular](https://angular.io/).

The [Namcespace](https://medium.com/@kunukn_95852/react-components-with-namespace-f3d169feaf91) concept is cool tho. (is this the correct name? idk 🤭)

# Preview

<div align="center">

<img src="https://i.ibb.co/D9w8dKw/prev1.webp" width="30%"></img> <img src="https://i.ibb.co/ZYHWz8D/prev2.webp" width="30%"></img> <img src="https://i.ibb.co/8zCR5js/prev3.webp" width="30%"></img>

</div>

Thanks to [Vercel](https://vercel.com/), you can play with the project online

[![Qomander Preview](https://img.shields.io/badge/Vercel-preview%20online-green?style=for-the-badge&logo=vercel)](https://counter-strike2.vercel.app/)

# Project structure

```
📦
├─ index.html
├─ public
└─ src
   ├─ assets
   │  ├─ fonts
   │  ├─ images
   │  ├─ json
   │  ├─ sass
   │  └─ svg
   ├─ components
   │  ├─ AudioSection
   │  ├─ ComingSection
   │  ├─ Footer
   │  ├─ Header
   │  ├─ Home
   │  ├─ IntroSection
   │  ├─ InventorySection
   │  ├─ MapsSection
   │  │  └─ maps
   │  ├─ SmokesSection
   │  ├─ TicksSection
   │  ├─ VfxSection
   │  └─ UI
   │     ├─ Box
   │     ├─ MainBlock
   │     ├─ MapsBox
   │     ├─ Rows
   │     └─ YoutubeCard
   └─ global.scss
```

# Quick start

Clone this repo.

```bash
git clone https://github.com/aBrihoum/CounterStrike2.git
```

Install npm packages.

```bash
cd CounterStrike2
npm i
```

## Development server

Run `npm run dev` for a dev server.

Navigate to `http://127.0.0.1:5173/`.

The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
