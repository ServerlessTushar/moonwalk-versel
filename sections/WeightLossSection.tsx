import React from 'react'
import Image from 'next/image'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import WeightLossGraphImg from '../public/static/homepage/WeightLossGraphImg.webp'

export default function WeightLossSection() {
  const bgColor = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box bg={bgColor} py={16}>
      <Container maxW="container.xl">
        <Heading
          as="h2"
          fontSize={{base: "2xl", md: "6xl"}}
          mb={8}
          textAlign="center"
          color="#000232"
        >
          LOSE UPTO 20% BODY WEIGHT, GUARANTEED
        </Heading>
        <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
          <Box flex={2} bg="white" p={16} borderRadius="md" shadow="md" height={{ base: "300px", md: "348.57px" }}>
            <VStack align="stretch" spacing={4}>
              <Text>
                We Are Your Complete Guide To Weight Loss, Committed To Doing
                Whatever It Takes To Ensure You Receive The Best Scientific And Clinical
                Care
              </Text>
              <Text>
                Our Approach Centers Around Biology, Combining Personalized Coaching,
                GLP-1 Medicines, Science-Backed Procedures And Intuitive Educational
                Resources To Help You Address All Factors That Influence Weight
              </Text>
              <Text fontWeight="bold" color="#000232">
                Moonwalk Delivers XX% Better Results – Guaranteed.
              </Text>
              <Button
                colorScheme="yellow"
                size="lg"
                width="fit-content"
              >
                Learn More →
              </Button>
            </VStack>
          </Box>
          <Box flex={1} position="relative" height={{ base: "300px", md: "348.57px" }} bg="red.200">
            <Box position="relative" width="100%" height="100%" boxShadow="none">
              <Image
                src={WeightLossGraphImg}
                alt="Weight Loss Graph"
                layout="fill"
                objectFit="cover"
                className='border-2 border-gray-300 rounded-md'
              />
              <Text 
                color="#000232" 
                fontSize="3xl" 
                fontWeight={700} 
                position='absolute' 
                right={16} 
                top={16} 
                fontFamily="Oswald, sans-serif"
                textAlign="right"
              >
                Lose up to <Text as='span' color="#F0BE3C">20%</Text><br/> of your weight
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}