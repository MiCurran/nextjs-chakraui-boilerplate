This is a [Next.js](https://nextjs.org/) + [Chakra UI](https://chakra-ui.com/docs/) Typescript project bootstrapped with [`nextjs-chakra-boilerplate`](https://github.com/MiCurran/nextjs-chakra-boilerplate).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev  
```  

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Creating Color Shades for ChakraUI Theme 🎨
`npm run get_shades 00000`  

```
Theme Color Shades 0.1.8
Hello! Here is your requested shades using 000000 as reference:

{
  "50": "#f4f0f0",
  "100": "#ddd5d5",
  "200": "#c2bcbc",
  "300": "#a6a6a6",
  "400": "#8c8c8c",
  "500": "#737373",
  "600": "#595959",
  "700": "#433d3d",
  "800": "#2a2222",
  "900": "#0f0b0b"
}
```

## Including Animations  
`./constants/Animations/simpleVariants.ts`  
  
### Import and use them like so
  
 ```  
   import { animationVariants } from '@/animations/simpleVariants';  
   import {motion} from 'framer/motion';  
   import {Heading} from '@chakra-ui/react';  
   const MotionHeading = motion(Heading);  
     
   <MotionHeading  
    initial={'hidden'}  
    animate={'visible'}  
    variants={animationVariants}  
   >  
      I'm an animated Heading  
   </Heading>
 ```
This repository also contains a script to create components. Just use:  

```bash
./createComponent.sh -a ComponentName
```