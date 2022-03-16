This is a [Next.js](https://nextjs.org/) + [Chakra UI](https://chakra-ui.com/docs/) project bootstrapped with [`nextjs-chakra-boilerplate`](https://github.com/MiCurran/nextjs-chakra-boilerplate).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```  
This repository also contains a script to create components. Just use:  

```bash
./createComponent.sh -a ComponentName
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Including Animations  
`./constants/Animations/simpleVariants.js`  
  
### Import and use them like so
  
 ```  
   import {simpleVariants}  
   import {motion} from 'framer/motion';  
   import {Heading} from '@chakra-ui/react';  
   const MotionHeading = motion(Heading);  
     
   <MotionHeading  
    initial={'hidden'}  
    animate={'visible'}  
    variants={simpleVariants}  
   >  
      I'm an animated Heading  
   </Heading>
 ```
