import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex
} from '@chakra-ui/react'
import Eye from "../public/static/homepage/sleepEye.webp"
import Image from 'next/image'
import docIcon from "../public/static/homepage/docIcon.webp"
import procedureIcon from "../public/static/homepage/procedure.webp"
import researchIcon from "../public/static/homepage/research.webp"
import guidanceIcon from "../public/static/homepage/guidance.webp"
const ProgramCard = ({ title, icon }) => (
  <Box bg="#000232" color="white" borderRadius="md" textAlign="left" w='246.05px' h='372.5px' p={6}>
    <Image src={icon} alt={title} width={84.01} height={83.58} />
    <Text fontSize="2xl" fontWeight={400} mb={8} mt={16}>
      {title}
    </Text>
    <Button colorScheme="#F0BE3C" size="sm" rounded="3xl" p={5}>
      Learn More →
    </Button>
  </Box>
)
const TimelineItem = ({ month, title, content, isOpen = false }) => (
  <AccordionItem>
    <AccordionButton>
      <HStack flex="1" textAlign="left" spacing={20}>
        <Text color="blue.500" fontWeight="bold" fontSize="2xl">
          <Text color='#000232' fontWeight={400} fontSize="sm">MONTH</Text> {month}
        </Text>
        <Text fontWeight="bold">{title}</Text>
      </HStack>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel pb={4}>
      <VStack align="start" spacing={2}>
        {content.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </VStack>
    </AccordionPanel>
  </AccordionItem>
)
export default function StepIntoNewWorld() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <Flex direction={{ base: "column", md: "row" }} position="relative">
          <Heading size="4xl" mb={4} textColor='#000232' fontWeight={800} maxW={900}>
            STEP INTO A NEW WORLD WHERE EVERY STEP FEELS LIGHTER
          </Heading>
          <Image
            src={Eye.src}
            alt="Feather"
            width={195}
            height={156}
          />
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          <ProgramCard title="Clinician Prescribed Medications" icon={docIcon} />
          <ProgramCard title="Procedures And Interventions" icon={procedureIcon} />
          <ProgramCard title="Clinical Research" icon={researchIcon} />
          <ProgramCard title="1:1 Doctor Guidance And Coaching" icon={guidanceIcon} />
        </SimpleGrid>
        <Box bg="gray.100" p={8} borderRadius="lg">
          <Heading size="4xl" mb={10} textAlign="center" textColor='#000232' fontWeight={800}>
            UNVEIL A NEW YOU, IN SIX FULL MOONS
          </Heading>
          <Accordion defaultIndex={[0]} allowMultiple>
            <TimelineItem
              month="01"
              title="Program kick off"
              content={[
                "Have Your First Consultation With An Endocare Specialist",
                "Meet Your Endocare Health And Lifestyle Coach Virtually Or Physically In Our Clinic",
                "Start On The GLP-1 Weight Loss Medication, Conveniently Delivered To Your Home",
              ]}
              isOpen={true}
            />
            <TimelineItem month="13" title="Develop new habits" content={[]} />
            <TimelineItem month="36" title="Keep up momentum" content={[]} />
            <TimelineItem month="6 AND BEYOND" title="Your new normal" content={[]} />
          </Accordion>
        </Box>
      </VStack>
    </Container>
  )
}