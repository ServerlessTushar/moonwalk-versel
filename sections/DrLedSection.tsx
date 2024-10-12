import { Box, Button, Container, Flex, Heading, Stack, Text, VStack, HStack } from "@chakra-ui/react"
import { FiArrowRight } from 'react-icons/fi'
import { keyframes } from '@emotion/react'
import { DrLedSectionSliderImages } from "#data/data"
import Image from "next/image"

const slideAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

export default function DrLedSection() {

  return (
    <Box bg="#000232" color="#E6E5DE" py={24}>
        <Flex direction={{ base: "column" }} align="center" justify="space-between" gap={24}>
            <Flex direction={{ base: "column", md: "row" }} mb={{ base: 8, md: 0 }} gap={24}>
                <Stack spacing={2} fontSize={{ base: "sm", md: "xl" }} paddingTop={4} fontWeight={300}>
                    <Text>• Customized Plans For Your Metabolic Profile</Text>
                    <Text>• GLP-1s And Medication Tailored To Your Needs</Text>
                    <Text>• New-Age Procedures Personalized For You</Text>
                    <Text>• Expert, Virtual And Ongoing Clinical Care</Text>
                </Stack>
                <Stack>
                    <Heading as="h1" size="4xl" fontWeight="bold" lineHeight="shorter" marginBottom={6} fontFamily="Oswald, sans-serif">
                    DOCTOR-LED,<br />MEDICAL WEIGHT LOSS
                    </Heading>
                    <Button
                        rightIcon={<FiArrowRight />}
                        bg="yellow.400"
                        color="black"
                        size="lg"
                        rounded="3xl"
                        _hover={{ bg: "yellow.500" }}
                        width={173}
                    >
                    How It Works?
                    </Button>
                </Stack>
            </Flex>
            <Box w={{ base: "100%" }} overflow="hidden">
                <Flex
                justify="flex-start"
                mt={4}
                animation={`${slideAnimation} 20s linear infinite`}
                width="200%"
                gap={2}
                >
                {DrLedSectionSliderImages.concat(DrLedSectionSliderImages).map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={`Medical item ${index + 1}`}
                        objectFit="cover"
                    />
                ))}
                </Flex>
            </Box>
        </Flex>

    </Box>
  )
}