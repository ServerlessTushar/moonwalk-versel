// import React from 'react'
// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   SimpleGrid,
//   VStack,
//   HStack,
//   Button,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   Flex
// } from '@chakra-ui/react'
// import Eye from "../public/static/homepage/sleepEye.webp"
// import Image from 'next/image'
// import docIcon from "../public/static/homepage/docIcon.webp"
// import procedureIcon from "../public/static/homepage/procedure.webp"
// import researchIcon from "../public/static/homepage/research.webp"
// import guidanceIcon from "../public/static/homepage/guidance.webp"
// const ProgramCard = ({ title, icon }) => (
//   <Box bg="#000232" color="white" borderRadius="md" textAlign="left" w='246.05px' h='372.5px' p={6}>
//     <Image src={icon} alt={title} width={84.01} height={83.58} />
//     <Text fontSize="2xl" fontWeight={400} mb={8} mt={16}>
//       {title}
//     </Text>
//     <Button colorScheme="#F0BE3C" size="sm" rounded="3xl" p={5}>
//       Learn More →
//     </Button>
//   </Box>
// )
// const TimelineItem = ({ month, title, content, isOpen = false }) => (
//   <AccordionItem>
//     <AccordionButton>
//       <HStack flex="1" textAlign="left" spacing={20}>
//         <Text color="blue.500" fontWeight="bold" fontSize="2xl">
//           <Text color='#000232' fontWeight={400} fontSize="sm">MONTH</Text> {month}
//         </Text>
//         <Text fontWeight="bold">{title}</Text>
//       </HStack>
//       <AccordionIcon />
//     </AccordionButton>
//     <AccordionPanel pb={4}>
//       <VStack align="start" spacing={2}>
//         {content.map((item, index) => (
//           <Text key={index}>{item}</Text>
//         ))}
//       </VStack>
//     </AccordionPanel>
//   </AccordionItem>
// )
// export default function StepIntoNewWorld() {
//   return (
//     <Container maxW="container.xl" py={10}>
//       <VStack spacing={10} align="stretch">
//         <Flex direction={{ base: "column", md: "row" }} position="relative">
//           <Heading size="4xl" mb={4} textColor='#000232' fontWeight={800} maxW={900}>
//             STEP INTO A NEW WORLD WHERE EVERY STEP FEELS LIGHTER
//           </Heading>
//           <Image
//             src={Eye.src}
//             alt="Feather"
//             width={195}
//             height={156}
//           />
//         </Flex>
//         <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
//           <ProgramCard title="Clinician Prescribed Medications" icon={docIcon} />
//           <ProgramCard title="Procedures And Interventions" icon={procedureIcon} />
//           <ProgramCard title="Clinical Research" icon={researchIcon} />
//           <ProgramCard title="1:1 Doctor Guidance And Coaching" icon={guidanceIcon} />
//         </SimpleGrid>
//         <Box bg="gray.100" p={8} borderRadius="lg">
//           <Heading size="4xl" mb={10} textAlign="center" textColor='#000232' fontWeight={800}>
//             UNVEIL A NEW YOU, IN SIX FULL MOONS
//           </Heading>
//           <Accordion defaultIndex={[0]} allowMultiple>
//             <TimelineItem
//               month="01"
//               title="Program kick off"
//               content={[
//                 "Have Your First Consultation With An Endocare Specialist",
//                 "Meet Your Endocare Health And Lifestyle Coach Virtually Or Physically In Our Clinic",
//                 "Start On The GLP-1 Weight Loss Medication, Conveniently Delivered To Your Home",
//               ]}
//               isOpen={true}
//             />
//             <TimelineItem month="13" title="Develop new habits" content={[]} />
//             <TimelineItem month="36" title="Keep up momentum" content={[]} />
//             <TimelineItem month="6 AND BEYOND" title="Your new normal" content={[]} />
//           </Accordion>
//         </Box>
//       </VStack>
//     </Container>
//   )
// }

// --------------------------------------------------------------------------------

// import React from 'react';
// import { Box, Text, VStack, HStack, Button, Image, Flex, Grid, GridItem, Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';
// import NextImage from 'next/image';

// import Eye from "../public/static/homepage/sleepEye.webp";
// import docIcon from "../public/static/homepage/docIcon.webp";
// import procedureIcon from "../public/static/homepage/procedure.webp";
// import researchIcon from "../public/static/homepage/research.webp";
// import guidanceIcon from "../public/static/homepage/guidance.webp";

// const FeatureCard = ({ icon, title }) => (
//   <Box bg="#000232" p={4} borderRadius="md" color="white" width={246} height={372.5}>
//     <Image as={NextImage} src={icon} alt={title} width={84} height={83.5} mb={2} />
//     <Text fontSize="2xl" mt={16} mb={8}>{title}</Text>
//     <Button size="sm" colorScheme="yellow" mt={2}>
//       Learn More
//     </Button>
//   </Box>
// );

// const TimelineItem = ({ month, title, content, isOpen = false }) => (
//   <AccordionItem>
//     <AccordionButton>
//       <Box flex="1" textAlign="left">
//         <Text fontWeight="bold" color="blue.500">MONTH {month}</Text>
//         <Text>{title}</Text>
//       </Box>
//     </AccordionButton>
//     <AccordionPanel pb={4}>
//       {content}
//     </AccordionPanel>
//   </AccordionItem>
// );

// const StepIntoNewWorld = () => {
//   return (
//     <Box maxWidth="1200px" margin="auto" p={4} pt={20}>
//       <VStack spacing={8} align="stretch">
//         <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
//           <Text fontSize={{ base: '2xl', md: '6xl' }} fontWeight="bold">
//             STEP INTO A NEW WORLD WHERE EVERY STEP FEELS LIGHTER
//           </Text>
//           <NextImage
//             src={Eye}
//             alt="Eye"
//             width={195} 
//             height={157}
//             />
//         </Flex>

//         <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={4}>
//           <GridItem><FeatureCard icon={docIcon} title="Clinician Prescribed Medications" /></GridItem>
//           <GridItem><FeatureCard icon={procedureIcon} title="Procedures And Interventions" /></GridItem>
//           <GridItem><FeatureCard icon={researchIcon} title="Clinical Research" /></GridItem>
//           <GridItem><FeatureCard icon={guidanceIcon} title="1:1 Doctor Guidance And Coaching" /></GridItem>
//         </Grid>

//         <Box>
//           <Text fontSize="2xl" fontWeight="bold" mb={4}>
//             UNVEIL A NEW YOU, IN SIX FULL MOONS
//           </Text>
//           <Accordion allowMultiple>
//             <TimelineItem
//               month="01"
//               title="Program kick off"
//               content={
//                 <VStack align="start">
//                   {/* <Text>• Have Your First Consultation With An Endocare Specialist</Text>
//                   <Text>• Meet Your Endocare Health And Lifestyle Coach Virtually Or Physically In Our Clinic</Text> */}
//                   <Text>• Start On The GLP-1 Weight Loss Medication, Conveniently Delivered To Your Home</Text>
//                 </VStack>
//               }
//               isOpen={true}
//             />
//             <TimelineItem 
//                 month="1-3" 
//                 title="Develop new habits" 
//                 content={
//                     <VStack align="start">
//                       <Text>• Have Your First Consultation With An Endocare Specialist</Text>
//                       <Text>• Meet Your Endocare Health And Lifestyle Coach Virtually Or Physically In Our Clinic</Text>
//                       <Text>• Start On The GLP-1 Weight Loss Medication, Conveniently Delivered To Your Home</Text>
//                     </VStack>
//                 }
//             />
//             <TimelineItem 
//                 month="3-6" 
//                 title="Keep up momentum" 
//                 content={
//                     <VStack align="start">
//                       <Text>• Have Your First Consultation With An Endocare Specialist</Text>
//                       <Text>• Meet Your Endocare Health And Lifestyle Coach Virtually Or Physically In Our Clinic</Text>
//                       <Text>• Start On The GLP-1 Weight Loss Medication, Conveniently Delivered To Your Home</Text>
//                     </VStack>
//                 }
//             />
//             <TimelineItem 
//                 month="6 AND BEYOND" 
//                 title="Your new normal" 
//                 content={
//                     <VStack align="start">
//                       <Text>• Have Your First Consultation With An Endocare Specialist</Text>
//                       <Text>• Meet Your Endocare Health And Lifestyle Coach Virtually Or Physically In Our Clinic</Text>
//                       <Text>• Start On The GLP-1 Weight Loss Medication, Conveniently Delivered To Your Home</Text>
//                     </VStack>
//                 }
//             />
//           </Accordion>
//         </Box>
//       </VStack>
//     </Box>
//   );
// };

// export default StepIntoNewWorld;

// -------------------------------Good One----------------------------------------------

// import React, { useState } from 'react';
// import { Box, Text, VStack, HStack, Flex, Grid, GridItem, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button } from '@chakra-ui/react';
// import NextImage from 'next/image';

// import Eye from "../public/static/homepage/sleepEye.webp";
// import docIcon from "../public/static/homepage/docIcon.webp";
// import procedureIcon from "../public/static/homepage/procedure.webp";
// import researchIcon from "../public/static/homepage/research.webp";
// import guidanceIcon from "../public/static/homepage/guidance.webp";

// const FeatureCard = ({ icon, title }) => (
//   <Box bg="navy" p={4} borderRadius="md" color="white" textAlign="center">
//     <Box as={NextImage} src={icon} alt={title} width={50} height={50} mx="auto" mb={2} />
//     <Text fontSize="sm">{title}</Text>
//     <Button size="sm" colorScheme="yellow" mt={2}>
//       Learn More
//     </Button>
//   </Box>
// );

// const TimelineItem = ({ month, title, content, index, isExpanded, onToggle }) => (
//   <AccordionItem border="none">
//     <Flex>
//       <VStack align="flex-start" mr={4} flex="1">
//         <Text fontWeight="bold" color="blue.500">MONTH</Text>
//         <Text fontSize="3xl" fontWeight="bold" color="blue.500">{month}</Text>
//         <Box w="2px" h={isExpanded ? "50px" : "0px"} bg="blue.500" transition="height 0.2s" />
//       </VStack>
//       <Box flex="3">
//         <AccordionButton 
//           p={4} 
//           bg="gray.700" 
//           color="white" 
//           _hover={{ bg: "gray.600" }}
//           onClick={() => onToggle(index)}
//         >
//           <Box flex="1" textAlign="left">
//             <Text fontSize="xl" fontWeight="bold">{title}</Text>
//           </Box>
//           <AccordionIcon />
//         </AccordionButton>
//         <AccordionPanel pb={4} bg="gray.700" color="white">
//           {content}
//         </AccordionPanel>
//       </Box>
//     </Flex>
//   </AccordionItem>
// );

// const StepIntoNewWorld = () => {
//   const [expandedIndex, setExpandedIndex] = useState(0);

//   const timelineData = [
//     {
//       month: "01",
//       title: "Program kick off",
//       content: "Start On The GLP-1 Weight Loss Medication, Conveniently Delivered To Your Home"
//     },
//     { 
//         month: "1-3", 
//         title: "Develop new habits", 
//         content: (
//             <VStack align="start" spacing={2}>
//               <Text>• Have Your First Consultation With An Endocare Specialist</Text>
//               <Text>• Meet Your Endocare Health And Lifestyle Coach Virtually Or Physically In Our Clinic</Text>
//               <Text>• Start On The GLP-1 Weight Loss Medication, Conveniently Delivered To Your Home</Text>
//             </VStack>
//         )
//     },
//     { 
//         month: "3-6", 
//         title: "Keep up momentum", 
//         content: (
//             <VStack align="start" spacing={2}>
//               <Text>• Have Your First Consultation With An Endocare Specialist</Text>
//               <Text>• Meet Your Endocare Health And Lifestyle Coach Virtually Or Physically In Our Clinic</Text>
//               <Text>• Start On The GLP-1 Weight Loss Medication, Conveniently Delivered To Your Home</Text>
//             </VStack>
//         ) 
//     },
//     { 
//         month: "6", 
//         title: "Your new normal", 
//         content: (
//             <VStack align="start" spacing={2}>
//               <Text>• Have Your First Consultation With An Endocare Specialist</Text>
//               <Text>• Meet Your Endocare Health And Lifestyle Coach Virtually Or Physically In Our Clinic</Text>
//               <Text>• Start On The GLP-1 Weight Loss Medication, Conveniently Delivered To Your Home</Text>
//             </VStack>
//         ) 
//     }
//   ];

//   return (
//     <Box maxWidth="1200px" margin="auto" p={4}>
//       <VStack spacing={8} align="stretch">
//         <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
//           <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" maxWidth="600px">
//             STEP INTO A NEW WORLD WHERE EVERY STEP FEELS LIGHTER
//           </Text>
//           <Box as={NextImage} src={Eye} alt="Eye" width={100} height={50} />
//         </Flex>

//         <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={4}>
//           <GridItem><FeatureCard icon={docIcon} title="Clinician Prescribed Medications" /></GridItem>
//           <GridItem><FeatureCard icon={procedureIcon} title="Procedures And Interventions" /></GridItem>
//           <GridItem><FeatureCard icon={researchIcon} title="Clinical Research" /></GridItem>
//           <GridItem><FeatureCard icon={guidanceIcon} title="1:1 Doctor Guidance And Coaching" /></GridItem>
//         </Grid>

//         <Box>
//           <Text fontSize="2xl" fontWeight="bold" mb={4}>
//             UNVEIL A NEW YOU, IN SIX FULL MOONS
//           </Text>
//           <Accordion allowToggle index={expandedIndex}>
//             {timelineData.map((item, index) => (
//               <TimelineItem
//                 key={index}
//                 month={item.month}
//                 title={item.title}
//                 content={item.content}
//                 index={index}
//                 isExpanded={index === expandedIndex}
//                 onToggle={setExpandedIndex}
//               />
//             ))}
//           </Accordion>
//         </Box>
//       </VStack>
//     </Box>
//   );
// };

// export default StepIntoNewWorld;

//-------------------------------------slightly good------------------------------------------------

// import React, { useState, useRef, useEffect } from 'react';
// import { Box, Text, VStack, Flex, Grid, GridItem, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button } from '@chakra-ui/react';
// import NextImage from 'next/image';

// import Eye from "../public/static/homepage/sleepEye.webp";
// import docIcon from "../public/static/homepage/docIcon.webp";
// import procedureIcon from "../public/static/homepage/procedure.webp";
// import researchIcon from "../public/static/homepage/research.webp";
// import guidanceIcon from "../public/static/homepage/guidance.webp";

// const FeatureCard = ({ icon, title }) => (
//   <Box bg="navy" p={4} borderRadius="md" color="white" textAlign="center">
//     <Box as={NextImage} src={icon} alt={title} width={50} height={50} mx="auto" mb={2} />
//     <Text fontSize="sm">{title}</Text>
//     <Button size="sm" colorScheme="yellow" mt={2}>
//       Learn More
//     </Button>
//   </Box>
// );

// const TimelineItem = ({ month, title, content, index, isExpanded, onToggle }) => {
//   const contentRef = useRef(null);
//   const [lineHeight, setLineHeight] = useState(0);

//   useEffect(() => {
//     if (isExpanded && contentRef.current) {
//       setLineHeight(contentRef?.current?.offsetHeight);
//     } else {
//       setLineHeight(0);
//     }
//   }, [isExpanded]);

//   return (
//     <AccordionItem border="none">
//       <Flex>
//         <VStack align="flex-start" mr={4} flex="1">
//           <Text fontWeight="bold" color="blue.500">MONTH</Text>
//           <Text fontSize="3xl" fontWeight="bold" color="blue.500">{month}</Text>
//           <Box 
//             w="2px" 
//             h={`${lineHeight}px`} 
//             bg="blue.500" 
//             transition="height 0.2s"
//             visibility={isExpanded ? "visible" : "hidden"}
//           />
//         </VStack>
//         <Box flex="3">
//           <AccordionButton 
//             p={4} 
//             bg="gray.700" 
//             color="white" 
//             _hover={{ bg: "gray.600" }}
//             onClick={() => onToggle(index)}
//           >
//             <Box flex="1" textAlign="left">
//               <Text fontSize="xl" fontWeight="bold">{title}</Text>
//             </Box>
//             <AccordionIcon />
//           </AccordionButton>
//           <AccordionPanel pb={4} bg="gray.700" color="white" ref={contentRef}>
//             {content}
//           </AccordionPanel>
//         </Box>
//       </Flex>
//     </AccordionItem>
//   );
// };

// const StepIntoNewWorld = () => {
//     const [expandedIndex, setExpandedIndex] = useState(0);
  
//     const timelineData = [
//       {
//         month: "01",
//         title: "Program kick off",
//         content: "Start On The GLP-1 Weight Loss Medication, Conveniently Delivered To Your Home"
//       },
//       { 
//           month: "1-3", 
//           title: "Develop new habits", 
//           content: (
//               <VStack align="start" spacing={2}>
//                 <Text>• Have Your First Consultation With An Endocare Specialist</Text>
//                 <Text>• Meet Your Endocare Health And Lifestyle Coach Virtually Or Physically In Our Clinic</Text>
//                 <Text>• Start On The GLP-1 Weight Loss Medication, Conveniently Delivered To Your Home</Text>
//               </VStack>
//           )
//       },
//       { 
//           month: "3-6", 
//           title: "Keep up momentum", 
//           content: (
//               <VStack align="start" spacing={2}>
//                 <Text>• Have Your First Consultation With An Endocare Specialist</Text>
//                 <Text>• Meet Your Endocare Health And Lifestyle Coach Virtually Or Physically In Our Clinic</Text>
//                 <Text>• Start On The GLP-1 Weight Loss Medication, Conveniently Delivered To Your Home</Text>
//               </VStack>
//           ) 
//       },
//       { 
//           month: "6", 
//           title: "Your new normal", 
//           content: (
//               <VStack align="start" spacing={2}>
//                 <Text>• Have Your First Consultation With An Endocare Specialist</Text>
//                 <Text>• Meet Your Endocare Health And Lifestyle Coach Virtually Or Physically In Our Clinic</Text>
//                 <Text>• Start On The GLP-1 Weight Loss Medication, Conveniently Delivered To Your Home</Text>
//               </VStack>
//           ) 
//       }
//     ];
  
//     return (
//       <Box maxWidth="1200px" margin="auto" p={4}>
//         <VStack spacing={8} align="stretch">
//           <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
//             <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" maxWidth="600px">
//               STEP INTO A NEW WORLD WHERE EVERY STEP FEELS LIGHTER
//             </Text>
//             <Box as={NextImage} src={Eye} alt="Eye" width={100} height={50} />
//           </Flex>
  
//           <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={4}>
//             <GridItem><FeatureCard icon={docIcon} title="Clinician Prescribed Medications" /></GridItem>
//             <GridItem><FeatureCard icon={procedureIcon} title="Procedures And Interventions" /></GridItem>
//             <GridItem><FeatureCard icon={researchIcon} title="Clinical Research" /></GridItem>
//             <GridItem><FeatureCard icon={guidanceIcon} title="1:1 Doctor Guidance And Coaching" /></GridItem>
//           </Grid>
  
//           <Box>
//             <Text fontSize="2xl" fontWeight="bold" mb={4}>
//               UNVEIL A NEW YOU, IN SIX FULL MOONS
//             </Text>
//             <Accordion allowToggle index={expandedIndex}>
//               {timelineData.map((item, index) => (
//                 <TimelineItem
//                   key={index}
//                   month={item.month}
//                   title={item.title}
//                   content={item.content}
//                   index={index}
//                   isExpanded={index === expandedIndex}
//                   onToggle={setExpandedIndex}
//                 />
//               ))}
//             </Accordion>
//           </Box>
//         </VStack>
//       </Box>
//     );
//   };

// export default StepIntoNewWorld;

// --------------------------------------next one----------------------------------------

import React, { useState, useRef, useEffect } from 'react';
import { Heading, Box, Text, VStack, Flex, Grid, GridItem, Accordion, Button, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';
import NextImage from 'next/image';
//import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';
import Eye from "../public/static/homepage/sleepEye.webp";
import docIcon from "../public/static/homepage/docIcon.webp";
import procedureIcon from "../public/static/homepage/procedure.webp";
import researchIcon from "../public/static/homepage/research.webp";
import guidanceIcon from "../public/static/homepage/guidance.webp";
import ellipseBg from "../public/static/homepage/EllipseBg.webp"

// const FeatureCard = ({ icon, title }) => (
//   <Box bg="navy" p={4} borderRadius="md" color="white" textAlign="center">
//     <Box as={NextImage} src={icon} alt={title} width={50} height={50} mx="auto" mb={2} />
//     <Text fontSize="sm">{title}</Text>
//     <Button size="sm" colorScheme="yellow" mt={2}>
//       Learn More
//     </Button>
//   </Box>
// );

const FeatureCard = ({ title, icon }) => (
  <Box bg="#000232" color="white" borderRadius="md" textAlign="left" w='246.05px' h='372.5px' p={6}>
    <Image src={icon} alt={title} width={84.01} height={83.58} />
    <Text fontSize="2xl" fontWeight={400} mb={8} mt={16}>
      {title}
    </Text>
    <Button bgColor="#F0BE3C" size="sm" rounded="3xl" p={5}>
      Learn More →
    </Button>
  </Box>
)

const TimelineItem = ({ month, title, content, index, isExpanded, onToggle }) => {
    const contentRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setLineHeight(contentRef.current.offsetHeight);
    } else {
      setLineHeight(0);
    }
  }, [isExpanded]);

  console.log('lineHeight: ', lineHeight);

  return (
    <AccordionItem mb={isExpanded ? 4 : 0}>
      <Flex>
        <VStack align="flex-start" mr={4} flex="1" >
          <Text>MONTH</Text>
          <Text fontSize="3xl" fontWeight="bold" color="#336699">{month}</Text>
          <Box 
            ml="1.5"
            w="2px" 
            h={`${lineHeight-30}px`} 
            bg="#336699" 
            transition="height 0.2s"
            visibility={isExpanded ? "visible" : "hidden"}
          />
        </VStack>
        <Box flex="3">
          <AccordionButton 
            p={4} 
            bg="#404040" 
            color="white" 
            _hover={{ bg: "gray.600" }}
            onClick={() => onToggle(index)}
          >
            <Box flex="1" textAlign="left">
              <Text fontSize="xl" fontWeight="bold">{title}</Text>
            </Box>
            {isExpanded ? (
              <FaMinus color="#F0BE3C" />
            ) : (
              <FaPlus color="#F0BE3C" />
            )}
          </AccordionButton>
          <AccordionPanel pb={4} bg="#404040" color="white" ref={contentRef} fontWeight={400}>
            {content}
          </AccordionPanel>
        </Box>
      </Flex>
    </AccordionItem>
  );
};

const StepIntoNewWorld = () => {
  const [expandedIndex, setExpandedIndex] = useState([0]);

  const timelineData = [
    {
        month: "0-1",
        title: "Program kick off",
        content: (
            <VStack align="start" spacing={2}>
              <Text>• Analyse your body and its unique metabolism</Text>
              <Text>• Set your target and create custom plan with doctor and health coach</Text>
              <Text>• Start on the appropriate medicine and early lifestyle changes</Text>
              <Text>• Your coach will be available on chat 24x7</Text>
            </VStack>
        )
    },
    { 
        month: "1-3", 
        title: "Develop new habits", 
        content: (
            <VStack align="start" spacing={2}>
              <Text>• Start with tiny habits that impact and improve diet, exercise and sleep</Text>
              <Text>• Talk to your doctors once a month and coach weekly for any queries</Text>
            </VStack>
        )
    },
    { 
        month: "3-6", 
        title: "Keep up momentum", 
        content: (
            <VStack align="start" spacing={2}>
              <Text>• Check biomarkers to quantify progress outside of body weight</Text>
              <Text>• Continue momentum by calibrating medication as per doctor’s guidance</Text>
              <Text>• Talk to doctors once a month and coach once in two weeks for any queries</Text>
            </VStack>
        )
    },
    { 
        month: "6+", 
        title: "Your new normal", 
        content: (
            <VStack align="start" spacing={2}>
              <Text>• Initiate weight maintenance and medication wean off program if needed</Text>
              <Text>• It's a new you - now let's keep it that way</Text>
            </VStack>
        )
    }
  ];

  return (
    <Box maxWidth="1200px" margin="auto" p={4} mt={16} pb={16}>
      <VStack spacing={8} align="stretch">
        {/* <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
          <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" maxWidth="600px">
            STEP INTO A NEW WORLD WHERE EVERY STEP FEELS LIGHTER
          </Text>
          <Box as={NextImage} src={Eye} alt="Eye" width={100} height={50} />
        </Flex> */}

<       Flex direction={{ base: "column", md: "row" }} position="relative">
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

        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={4}>
          <GridItem><FeatureCard icon={docIcon} title="Clinician Prescribed Medications" /></GridItem>
          <GridItem><FeatureCard icon={procedureIcon} title="Procedures And Interventions" /></GridItem>
          <GridItem><FeatureCard icon={researchIcon} title="Clinical Research" /></GridItem>
          <GridItem><FeatureCard icon={guidanceIcon} title="1:1 Doctor Guidance And Coaching" /></GridItem>
        </Grid>

        <Box>
            <Heading size="4xl" marginTop={10} marginBottom={16} textColor='#000232' fontWeight={800} textAlign="center">
                UNVEIL A NEW YOU, IN SIX FULL MOONS
            </Heading>
          <Accordion allowMultiple index={expandedIndex}>
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                month={item.month}
                title={item.title}
                content={item.content}
                index={index}
                isExpanded={expandedIndex.includes(index)}
                onToggle={(index) => {
                  setExpandedIndex(prev => 
                    prev.includes(index) 
                      ? prev.filter(i => i !== index) 
                      : [...prev, index]
                  );
                }}
              />
            ))}
          </Accordion>
        </Box>
      </VStack>
    </Box>
  );
};

export default StepIntoNewWorld;

//------------------------------------V0-------------------------------------------------

// import React, { useState } from 'react'
// import {
//   Box,
//   VStack,
//   Text,
//   Flex,
//   Icon,
//   List,
//   ListItem,
//   ListIcon,
// } from '@chakra-ui/react'
// import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
// import { MdCheckCircle } from 'react-icons/md'

// interface AccordionItemProps {
//   title: string
//   content: string[]
//   month: string
//   isOpen: boolean
//   onToggle: () => void
// }

// const AccordionItem: React.FC<AccordionItemProps> = ({
//   title,
//   content,
//   month,
//   isOpen,
//   onToggle,
// }) => {
//   return (
//     <Box position="relative" width="100%">
//       <Flex alignItems="center" mb={4}>
//         <Box width="80px" textAlign="right" mr={4}>
//           <Text fontSize="lg" fontWeight="bold" color="blue.500">
//             MONTH
//           </Text>
//           <Text fontSize="3xl" fontWeight="bold" color="blue.500">
//             {month}
//           </Text>
//         </Box>
//         <Box
//           flex={1}
//           bg="gray.700"
//           borderRadius="md"
//           p={4}
//           cursor="pointer"
//           onClick={onToggle}
//         >
//           <Flex justifyContent="space-between" alignItems="center">
//             <Text fontSize="2xl" fontWeight="bold" color="white">
//               {title}
//             </Text>
//             <Icon
//               as={isOpen ? "+" : "-"}
//               color="white"
//               w={6}
//               h={6}
//             />
//           </Flex>
//           {isOpen && (
//             <List spacing={3} mt={4}>
//               {content.map((item, index) => (
//                 <ListItem key={index} color="white">
//                   <ListIcon as={MdCheckCircle} color="green.500" />
//                   {item}
//                 </ListItem>
//               ))}
//             </List>
//           )}
//         </Box>
//       </Flex>
//       {isOpen && (
//         <Box
//           position="absolute"
//           left="76px"
//           top="0"
//           bottom="-16px"
//           width="2px"
//           bg="blue.500"
//         />
//       )}
//     </Box>
//   )
// }

// const CustomAccordion: React.FC = () => {
//   const [openIndex, setOpenIndex] = useState(0)

//   const items = [
//     {
//       month: '0-1',
//       title: 'Program kick off',
//       content: [
//         'Have Your First Consultation With An Endocare Specialist',
//         'Meet Your Endocare Health And Lifestyle Coach Virtually Or Physically In Our Clinic',
//         'Start On The GLP-1 Weight Loss Medication, Conveniently Delivered To Your Home',
//       ],
//     },
//     {
//       month: '1-3',
//       title: 'Develop new habits',
//       content: ['Content for months 1-3'],
//     },
//     {
//       month: '3-6',
//       title: 'Keep up momentum',
//       content: ['Content for months 3-6'],
//     },
//     {
//       month: '6',
//       title: 'Keep up momentum',
//       content: ['Content for month 6 and beyond'],
//     },
//   ]

//   return (
//     <VStack spacing={4} align="stretch" width="100%" maxWidth="800px" mx="auto">
//       {items.map((item, index) => (
//         <AccordionItem
//           key={index}
//           month={item.month}
//           title={item.title}
//           content={item.content}
//           isOpen={index === openIndex}
//           onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
//         />
//       ))}
//     </VStack>
//   )
// }

// export default CustomAccordion