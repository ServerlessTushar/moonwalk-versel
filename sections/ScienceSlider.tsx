// "use client"

// import React, { useState, useEffect, useRef } from 'react'
// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   VStack,
//   HStack,
//   IconButton,
//   useBreakpointValue,
//   Button
// } from '@chakra-ui/react'
// import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
// import sliderBgImg from '../public/static/homepage/scienceSliderBGImg.webp'
// import sliderBgImgMob from '../public/static/homepage/scienceSliderBGImgMob.webp'
// import Image from 'next/image'

// const treatments = [
//   {
//     title: "MOUNJARO",
//     content: "Activates GLP-1 And GIP Receptors To Increase Insulin, Reduce Appetite, And Slow Gastric Emptying, Promoting Weight Loss"
//   },
//   {
//     title: "OZEMPIC",
//     content: "Stimulates GLP-1 Receptors, Enhancing Insulin Release, Reducing Appetite, And Slowing Digestion, Leading To Weight Loss."
//   },
//   {
//     title: "WEGOVY",
//     content: "A Higher Dose GLP-1 Receptor Agonist (GLP-1 Agonist) That Suppresses Hunger And Slows Gastric Emptying, Promoting Significant Weight Loss"
//   },
//   {
//     title: "ALLURION",
//     content: "A gastric balloon that occupies space in the stomach, reducing food intake by promoting a feeling of fullness."
//   },
//   {
//     title: "VICTOZA",
//     content: "Stimulates GLP-1 receptors to reduce appetite, delay gastric emptying, and enhance insulin secretion for weight loss."
//   },
//   {
//     title: "RYBELSUS",
//     content: "An oral GLP-1 receptor agonist that decreases appetite and slows stomach emptying, supporting weight reduction."
//   },
//   {
//     title: "METFORMIN",
//     content: " Lowers glucose production in the liver and improves insulin sensitivity, indirectly aiding weight loss by improving metabolic function."
//   },
//   {
//     title: "BARIATRIC SURGERY",
//     content: "Reduces stomach size to limit food intake and alter gut hormones, leading to significant, sustained weight loss."
//   }
// ]

// const TreatmentCard = ({ title, content }) => (
//   <Box
//     bg="#E6E5DE"
//     textColor="#000232"
//     textAlign="center"
//     px={8}
//     py={12}
//     borderRadius="lg"
//     width={{ base: "full", md: "300px" }}
//     height={{ base: "auto", md: "250px" }}
//   >
//     <VStack spacing={4}>
//       <Heading size="md">{title}</Heading>
//       <Text fontSize="sm">{content}</Text>
//     </VStack>
//   </Box>
// )

// const ScienceSlider = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const isMobile = useBreakpointValue({ base: true, md: false });
  
//     const nextSlide = () => {
//       setCurrentSlide((prev) => (prev + 1) % treatments.length);
//     };
  
//     const prevSlide = () => {
//       setCurrentSlide((prev) => (prev - 1 + treatments.length) % treatments.length);
//     };
  
//     return (
//       <Box
//         position="relative"
//         height={{ base: '100vh', md: '94vh' }}
//         overflow="hidden"
//         paddingX={40}
//       >
//         <Image
//           src={isMobile ? sliderBgImgMob : sliderBgImg}
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//         />
//         <Flex
//           direction="column"
//           align="center"
//           //justify="center"
//           height="100%"
//           color="white"
//           textAlign="center"
//           position="relative"
//           zIndex={1}
//         >
//           <Text
//             fontSize={{ base: '2xl', md: '6xl' }}
//             fontWeight="bold"
//             mb={16}
//             mt={32}
//             width={{base: '90%', md: 'full'}}
//             casing='uppercase'
//             fontFamily='GratelosDisplay, sans-serif'
//           >
//             We will use science to shape your best self
//           </Text>
//           <Flex
//             width={{ base: '90%', md: '40%' }}
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Button
//               onClick={prevSlide}
//               bg="yellow.400"
//               borderRadius="full"
//               size={{base: 'sm', md: 'lg'}}
//             >
//               <FaChevronLeft />
//             </Button>
//             <Box
//               bg="#E6E5DE"
//               p={6}
//               h={{ base: 250, md: 350 }}
//               borderRadius="md"
//               width={{ base: 210, md: 350 }}
//               color="#000232"
//               display="flex"  
//               flexDirection="column"
//               alignItems="center"  
//               justifyContent="center"  
//               textAlign="center" 
//             >
//               <Text fontWeight="bold" mb={2} fontSize={{ base: 'lg', md: '2xl' }}>
//                 {treatments[currentSlide].title}
//               </Text>
//               <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight={300}>
//                 {treatments[currentSlide].content}
//               </Text>
//             </Box>
//             <Button
//               onClick={nextSlide}
//               bg="yellow.400"
//               borderRadius="full"
//               size={{base: 'sm', md: 'lg'}}
//             >
//               <FaChevronRight />
//             </Button>
//           </Flex>
//           <Flex mt={8} mb={16}>
//             {treatments.map((_, index) => (
//               <Box
//                 key={index}
//                 w={2}
//                 h={2}
//                 bg={index === currentSlide ? 'white' : 'gray.500'}
//                 borderRadius="full"
//                 mx={1}
//               />
//             ))}
//           </Flex>
//         </Flex>
//       </Box>
//     );
// }

// export default ScienceSlider;

import React, { useState } from 'react';
import { Box, Flex, Heading, Text, Button, useBreakpointValue, } from "@chakra-ui/react";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import Image from 'next/image';
import sliderBgImg from '../public/static/homepage/scienceSliderBGImg.webp';
import sliderBgImgMob from '../public/static/homepage/scienceSliderBGImgMob.webp';
import { Br } from '@saas-ui/react';

const ScienceShapeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const cards = [
    { 
      title: "MOUNJARO",
      content: "Activates GLP-1 And GIP Receptors To Increase Insulin, Reduce Appetite, And Slow Gastric Emptying, Promoting Weight Loss"
    },
    {
      title: "OZEMPIC",
      content: "Stimulates GLP-1 Receptors, Enhancing Insulin Release, Reducing Appetite, And Slowing Digestion, Leading To Weight Loss."
    },
    {
      title: "WEGOVY",
      content: "A Higher Dose Of Semaglutide (GLP-1 Agonist) That Suppresses Hunger And Delays Gastric Emptying, Promoting Significant Weight Loss"
    }
  ];

  const visibleCards = isMobile ? 1 : 2;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (cards.length - visibleCards + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % (cards.length - visibleCards + 1));
  };

  return (
    <Box position="relative" color="white" px={8} py={16}>
      <Image
        src={isMobile ? sliderBgImgMob : sliderBgImg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Box position="relative" zIndex={1}>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
          <Box flex={1} mb={{ base: 8, md: 0 }} textAlign={{ base: "center", md: "left" }}>
            {/* <Heading as="h1" size="2xl" fontWeight="bold" lineHeight="1.2">
              SCIENCE TO SHAPE YOUR BEST SELF
            </Heading> */}
            <Heading as="h1" size={{base: "2xl", md: "4xl"}} fontWeight="bold" lineHeight="1.2">
              SCIENCE TO <Br/>SHAPE YOUR <Br/>BEST SELF
            </Heading>
          </Box>
          <Box flex={2}>
            <Flex>
              {cards.slice(currentSlide, currentSlide + visibleCards).map((card, index) => (
              <Box 
                key={index} 
                bg="white" 
                color="black" 
                px={8} 
                m={2} 
                borderRadius="md" 
                flex={1} 
                w="200" 
                h="300" 
                bgColor="#E6E5DE" 
                textAlign="center" 
                display="flex" // Ensure Flexbox is used
                flexDirection="column" // Stack the text vertically
                alignItems="center" // Center horizontally
                justifyContent="center" // Center vertically
              >
                <Text fontWeight="bold" mb={6} fontSize="xl">{card.title}</Text>
                <Text fontSize="xl">{card.content}</Text>
              </Box>
              ))}
            </Flex>
            <Flex justify="center" mt={4}>
              <Button onClick={prevSlide} mr={4} bg="gold" borderRadius="full" w={10} h={10}>
                <FaChevronLeft />
              </Button>
              <Button onClick={nextSlide} bg="gold" borderRadius="full" w={10} h={10}>
                <FaChevronRight />
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ScienceShapeCarousel;

// import React, { useState } from 'react';
// import { Box, Flex, Heading, Text, Button, useBreakpointValue } from "@chakra-ui/react";
// import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
// import sliderBgImg from '../public/static/homepage/scienceSliderBGImg.webp'
// import sliderBgImgMob from '../public/static/homepage/scienceSliderBGImgMob.webp'
// import Image from 'next/image'
// import { Br } from '@saas-ui/react';

// const ScienceShapeCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const isMobile = useBreakpointValue({ base: true, md: false });

//   const cards = [
//      {
//     title: "MOUNJARO",
//     content: "Activates GLP-1 And GIP Receptors To Increase Insulin, Reduce Appetite, And Slow Gastric Emptying, Promoting Weight Loss"
//   },
//   {
//     title: "OZEMPIC",
//     content: "Stimulates GLP-1 Receptors, Enhancing Insulin Release, Reducing Appetite, And Slowing Digestion, Leading To Weight Loss."
//   },
//   {
//     title: "WEGOVY",
//     content: "A Higher Dose GLP-1 Receptor Agonist (GLP-1 Agonist) That Suppresses Hunger And Slows Gastric Emptying, Promoting Significant Weight Loss"
//   },
//   {
//     title: "ALLURION",
//     content: "A gastric balloon that occupies space in the stomach, reducing food intake by promoting a feeling of fullness."
//   },
//   {
//     title: "VICTOZA",
//     content: "Stimulates GLP-1 receptors to reduce appetite, delay gastric emptying, and enhance insulin secretion for weight loss."
//   },
//   {
//     title: "RYBELSUS",
//     content: "An oral GLP-1 receptor agonist that decreases appetite and slows stomach emptying, supporting weight reduction."
//   },
//   {
//     title: "METFORMIN",
//     content: " Lowers glucose production in the liver and improves insulin sensitivity, indirectly aiding weight loss by improving metabolic function."
//   },
//   {
//     title: "BARIATRIC SURGERY",
//     content: "Reduces stomach size to limit food intake and alter gut hormones, leading to significant, sustained weight loss."
//   }
//   ];

//   const visibleCards = isMobile ? 1 : 2;

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % (cards.length - visibleCards + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + cards.length) % (cards.length - visibleCards + 1));
//   };

//   return (
//     <Box bg={'navy'} color="white" px={8} py={16}>
//       <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
//         <Box flex={1} mb={{ base: 8, md: 0 }} textAlign={{ base: "center", md: "left" }}>
//           <Heading as="h1" size={{base: "2xl", md: "4xl"}} fontWeight="bold" lineHeight="1.2">
//             SCIENCE TO <Br/>SHAPE YOUR <Br/>BEST SELF
//           </Heading>
//         </Box>
//         <Box flex={2}>
//           <Flex>
//             {cards.slice(currentSlide, currentSlide + visibleCards).map((card, index) => (
//               <Box 
//                 key={index} 
//                 bg="white" 
//                 color="black" 
//                 px={8} 
//                 m={2} 
//                 borderRadius="md" 
//                 flex={1} 
//                 w="200" 
//                 h="300" 
//                 bgColor="#E6E5DE" 
//                 textAlign="center" 
//                 display="flex" // Ensure Flexbox is used
//                 flexDirection="column" // Stack the text vertically
//                 alignItems="center" // Center horizontally
//                 justifyContent="center" // Center vertically
//               >
//                 <Text fontWeight="bold" mb={6} fontSize="xl">{card.title}</Text>
//                 <Text fontSize="xl">{card.content}</Text>
//               </Box>
//             ))}
//           </Flex>
//           <Flex justify="center" mt={4}>
//             <Button onClick={prevSlide} mr={4} bg="gold" borderRadius="full" w={10} h={10}>
//               <FaChevronLeft />
//             </Button>
//             <Button onClick={nextSlide} bg="gold" borderRadius="full" w={10} h={10}>
//               <FaChevronRight />
//             </Button>
//           </Flex>
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default ScienceShapeCarousel;