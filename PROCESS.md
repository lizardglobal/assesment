# I wanted to write all my process in this file.

## 1. Switch from yarn to pnpm

Yarm was used in the project. I switched to pnpm because I am more familiar with it.

## 2. Bump versions of dependencies to latest versions and fix vulnerabilities

This project was created in 2021. I bumped the versions of the dependencies to the latest versions and fixed the vulnerabilities because it's a blank project, so I thought it would be better to start on a fresh note.

I removed the "react-scripts" dependency because it caused conflicts with others packages. So I checked the [npmjs page](https://www.npmjs.com/package/react-scripts?activeTab=readme) of the package, then I clicked on the [facebook github repository](https://github.com/facebook/create-react-app) and I saw that the package was deprecated that's why I removed it.

To run my code easily, I added `vite` as a development dependency.

## 3. Switch from JavaScript to TypeScript

I switched from JavaScript to TypeScript because I am more familiar with TypeScript and I think it's better to use TypeScript in a project like this. It will help me to write better code.

To do that I installed the following dependencies and created a `tsconfig.json` file using the following commands :

```bash
$ npm install --save typescript @types/react @types/react-dom
$ npx tsc --init
```

Then, I renamed the files with `.js` & `.jsx` extensions to `.ts` & `.tsx` extensions.

## 4. Setup TailwindCSS & Shadcn 

I added [TailwindCSS](https://tailwindcss.com/) and [Shadcn](https://ui.shadcn.com/) to the project because I like to use them in my projects. TailwindCSS is a utility-first CSS framework and Shadcn is a component library. I think they will help me to build the project faster.

## 5. Create the application

