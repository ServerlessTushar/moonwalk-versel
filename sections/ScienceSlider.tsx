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
} from '@chakra-ui/react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import sliderBgImg from '../public/static/homepage/scienceSliderBGImg.webp'
import sliderBgImgMob from '../public/static/homepage/scienceSliderBGImgMob.webp'

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

export default function ScienceSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useBreakpointValue({ base: true, md: false })
  const sliderRef = useRef(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % treatments.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + treatments.length) % treatments.length)
  }

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${isMobile ? -100 * currentIndex : -33.33 * currentIndex}%)`
    }
  }, [currentIndex, isMobile])

  return (
    <Box
      color="white"
      py={16}
      px={8}
      backgroundImage={{base: sliderBgImgMob.src, md: sliderBgImg.src}}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
        <Box mb={{ base: 8, md: 0 }} textAlign={{ base: "center", md: "left" }} width={{ base: "full", md: "40%" }}>
          <Heading size="4xl" mb={4} w="75%" lineHeight="normal">
            SCIENCE TO SHAPE YOUR BEST SELF
          </Heading>
        </Box>

        <Box width={{ base: "full", md: "60%" }} position="relative">
          <Flex overflow="hidden">
            {treatments.map((treatment, index) => (
              <Box
                key={index}
                flexShrink={0}
                width="100%"
                transform={`translateX(${-100 * currentIndex}%)`}
                transition="transform 0.3s ease-in-out"
                display={isMobile && index !== currentIndex ? "none" : "block"}
              >
                <TreatmentCard {...treatment} />
              </Box>
            ))}
          </Flex>

          <HStack justify="center" mt={4} spacing={2}>
            <IconButton
              icon={<FaChevronRight />}
              onClick={prevSlide}
              aria-label="Previous slide"
              colorScheme="yellow"
              rounded="full"
            />
            {isMobile && (
              <HStack spacing={1}>
                {treatments.map((_, index) => (
                  <Box
                    key={index}
                    w={2}
                    h={2}
                    bg={index === currentIndex ? "yellow.500" : "gray.500"}
                    rounded="full"
                  />
                ))}
              </HStack>
            )}
            <IconButton
              icon={<FaChevronRight />}
              onClick={nextSlide}
              aria-label="Next slide"
              colorScheme="yellow"
              rounded="full"
            />
          </HStack>
        </Box>
      </Flex>
    </Box>
  )
}