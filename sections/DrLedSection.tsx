import { Box, Button, Container, Flex, Heading, Stack, Text, VStack, HStack, useBreakpointValue } from "@chakra-ui/react"
import { FiArrowRight } from 'react-icons/fi'
import { keyframes } from '@emotion/react'
import { DrLedSectionSliderImages, DrLedSectionSliderImagesMob } from "#data/data"
import Image, { StaticImageData } from "next/image"
import Link from "next/link";

const slideAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

export default function DrLedSection() {

    const imagesToDisplay = useBreakpointValue<StaticImageData[]>({
        base: DrLedSectionSliderImagesMob,
        lg: DrLedSectionSliderImages,
    }) || [];

  return (
    <Box bg="#000232" color="#E6E5DE" py={{base: 12, md:24}} id="How-it-Works">
        <Flex direction={{ base: "column" }} align="center" justify="space-between" gap={24}>
            <Flex direction={{ base: "column", md: "row" }} mb={{ base: 0, md: 0 }} gap={{base: 8, md: 24}}>
                <Stack spacing={2} fontSize={{ base: "sm", md: "xl" }} paddingTop={4} fontWeight={300} order={{ base: 2, md: 1 }}>
                    <Text>• Customized Plans For Your Metabolic Profile</Text>
                    <Text>• GLP-1s And Medication Tailored To Your Needs</Text>
                    <Text>• New-Age Procedures Personalized For You</Text>
                    <Text>• Expert, Virtual And Ongoing Clinical Care</Text>
                </Stack>
                <Stack order={{ base: 1, md: 2 }}>
                    <Heading as="h2" size={{base: "2xl", md: "4xl"}} fontWeight="bold" lineHeight="shorter" marginBottom={6} fontFamily='GratelosDisplay, sans-serif'>
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
                        as={Link}
                        href={'#program'}
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
                {imagesToDisplay.concat(imagesToDisplay).map((src, index) => (
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