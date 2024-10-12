"use client"

import React, { useState, useEffect, useRef } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
  useBreakpointValue,
  Button
} from '@chakra-ui/react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import sliderBgImg from '../public/static/homepage/scienceSliderBGImg.webp'
import sliderBgImgMob from '../public/static/homepage/scienceSliderBGImgMob.webp'
import Image from 'next/image'

const treatments = [
  {
    name: "MOUNJARO",
    description: "Activates GLP-1 And GIP Receptors To Increase Insulin, Reduce Appetite, And Slow Gastric Emptying, Promoting Weight Loss"
  },
  {
    name: "OZEMPIC",
    description: "Stimulates GLP-1 Receptors, Enhancing Insulin Release, Reducing Appetite, And Slowing Digestion, Leading To Weight Loss."
  },
  {
    name: "WEGOVY",
    description: "A Higher Dose GLP-1 Receptor Agonist (GLP-1 Agonist) That Suppresses Hunger And Slows Gastric Emptying, Promoting Significant Weight Loss"
  },
  {
    name: "ALLURION",
    description: "A gastric balloon that occupies space in the stomach, reducing food intake by promoting a feeling of fullness."
  },
  {
    name: "VICTOZA",
    description: "Stimulates GLP-1 receptors to reduce appetite, delay gastric emptying, and enhance insulin secretion for weight loss."
  },
  {
    name: "RYBELSUS",
    description: "An oral GLP-1 receptor agonist that decreases appetite and slows stomach emptying, supporting weight reduction."
  },
  {
    name: "METFORMIN",
    description: " Lowers glucose production in the liver and improves insulin sensitivity, indirectly aiding weight loss by improving metabolic function."
  },
  {
    name: "BARIATRIC SURGERY",
    description: "Reduces stomach size to limit food intake and alter gut hormones, leading to significant, sustained weight loss."
  }
]

const TreatmentCard = ({ name, description }) => (
  <Box
    bg="#E6E5DE"
    textColor="#000232"
    textAlign="center"
    px={8}
    py={12}
    borderRadius="lg"
    width={{ base: "full", md: "300px" }}
    height={{ base: "auto", md: "250px" }}
  >
    <VStack spacing={4}>
      <Heading size="md">{name}</Heading>
      <Text fontSize="sm">{description}</Text>
    </VStack>
  </Box>
)

// export default function ScienceSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const isMobile = useBreakpointValue({ base: true, md: false })

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % treatments.length)
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + treatments.length) % treatments.length)
//   }

//   return (
//     <Box
//       color="white"
//       py={16}
//       px={8}
//       backgroundImage={{base: sliderBgImgMob.src, md: sliderBgImg.src}}
//       backgroundSize="cover"
//       backgroundPosition="center"
//     >
//       <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
//         <Box mb={{ base: 8, md: 0 }} textAlign={{ base: "center", md: "left" }} width={{ base: "full", md: "40%" }}>
//           <Heading size="4xl" mb={4} w="75%" lineHeight="normal">
//             SCIENCE TO SHAPE YOUR BEST SELF
//           </Heading>
//         </Box>

//         <Box width={{ base: "full", md: "70%" }} position="relative" overflow="hidden">
//           <Flex
//             transition="transform 0.3s ease-in-out"
//             width={isMobile ? "100%" : "300%"}
//           >
//             {treatments.map((treatment, index) => (
//               <Box
//                 key={index}
//                 flexShrink={0}
//                 width="100%"
//                 transform={`translateX(${-100 * currentIndex}%)`}
//                 transition="transform 0.3s ease-in-out"
//                 display={isMobile && index !== currentIndex ? "none" : "block"}
//               >
//                 <TreatmentCard {...treatment} />
//               </Box>
//             ))}
//           </Flex>

//           <HStack justify="center" mt={4} spacing={2}>
//             <IconButton
//               icon={<FaChevronRight />}
//               onClick={prevSlide}
//               aria-label="Previous slide"
//               colorScheme="yellow"
//               rounded="full"
//             />
//             {isMobile && (
//               <HStack spacing={1}>
//                 {treatments.map((_, index) => (
//                   <Box
//                     key={index}
//                     w={2}
//                     h={2}
//                     bg={index === currentIndex ? "yellow.500" : "gray.500"}
//                     rounded="full"
//                   />
//                 ))}
//               </HStack>
//             )}
//             <IconButton
//               icon={<FaChevronRight />}
//               onClick={nextSlide}
//               aria-label="Next slide"
//               colorScheme="yellow"
//               rounded="full"
//             />
//           </HStack>
//         </Box>
//       </Flex>
//     </Box>
//   )
// }

const ScienceSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const isMobile = useBreakpointValue({ base: true, md: false });
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % treatments.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + treatments.length) % treatments.length);
    };
  
    return (
      <Box
        position="relative"
        height={{ base: '100vh', md: '94vh' }}
        overflow="hidden"
      >
        <Image
          src={isMobile ? sliderBgImgMob : sliderBgImg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Flex
          direction="column"
          align="center"
          //justify="center"
          height="100%"
          color="white"
          textAlign="center"
          position="relative"
          zIndex={1}
        >
          <Text
            fontSize={{ base: '2xl', md: '6xl' }}
            fontWeight="bold"
            mb={16}
            mt={32}
            width={{base: '90%', md: 'full'}}
            casing='uppercase'
            fontFamily="Oswald, sans-serif"
          >
            We will use science to shape your best self
          </Text>
          <Flex
            width={{ base: '90%', md: '40%' }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              onClick={prevSlide}
              bg="yellow.400"
              borderRadius="full"
              size={{base: 'sm', md: 'lg'}}
            >
              <FaChevronLeft />
            </Button>
            <Box
              bg="#E6E5DE"
              p={6}
              h={{ base: 210, md: 350 }}
              borderRadius="md"
              width={{ base: 210, md: 350 }}
              color="#000232"
              display="flex"  
              flexDirection="column"
              alignItems="center"  
              justifyContent="center"  
              textAlign="center" 
            >
              <Text fontWeight="bold" mb={2} fontSize={{ base: 'lg', md: '2xl' }}>
                {treatments[currentSlide].name}
              </Text>
              <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight={300}>
                {treatments[currentSlide].description}
              </Text>
            </Box>
            <Button
              onClick={nextSlide}
              bg="yellow.400"
              borderRadius="full"
              size={{base: 'sm', md: 'lg'}}
            >
              <FaChevronRight />
            </Button>
          </Flex>
          <Flex mt={8} mb={16}>
            {treatments.map((_, index) => (
              <Box
                key={index}
                w={2}
                h={2}
                bg={index === currentSlide ? 'white' : 'gray.500'}
                borderRadius="full"
                mx={1}
              />
            ))}
          </Flex>
        </Flex>
      </Box>
    );
}

export default ScienceSlider;