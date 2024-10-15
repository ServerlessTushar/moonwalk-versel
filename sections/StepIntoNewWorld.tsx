import React, { useState, useRef, useEffect } from 'react';
import { Heading, Box, Text, VStack, Flex, Grid, GridItem, Accordion, Button, AccordionItem, AccordionButton, AccordionPanel, useBreakpointValue } from '@chakra-ui/react';
import NextImage from 'next/image';
//import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';
import Eye from "../public/static/homepage/sleepEye.webp";
import docIcon from "../public/static/homepage/docIcon.webp";
import procedureIcon from "../public/static/homepage/procedure.webp";
import researchIcon from "../public/static/homepage/research.webp";
import guidanceIcon from "../public/static/homepage/guidance.webp";
import timelineBgImg from "../public/static/homepage/timelineBgImg.webp";
import timelineBgImgMob from "../public/static/homepage/timelineBgImgMob.webp";

const FeatureCard = ({ title, icon }) => (
  <Box bg="#000232" color="white" borderRadius="md" textAlign="left" w='246.05px' h='372.5px' p={6} position="relative">
    <Image src={icon} alt={title} width={84.01} height={83.58} />
    <Text fontSize="2xl" fontWeight={400} mb={8} mt={16}>
      {title}
    </Text>
    <Button bgColor="#F0BE3C" size="sm" rounded="3xl" p={5} position="absolute" bottom={16}>
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
          <Text fontSize="3xl" fontWeight="bold" color="#336699" fontFamily='GratelosDisplay, sans-serif'>{month}</Text>
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
              <Text fontSize="xl" fontWeight="bold" fontFamily='GratelosDisplay, sans-serif'>{title}</Text>
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
  const bgImage = useBreakpointValue({
    base: timelineBgImgMob,
    md: timelineBgImg   
  });

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

  const settings = {
    dots: true, // show navigation dots
    infinite: true, // loop through slides
    speed: 500,
    slidesToShow: 4, // number of slides to show in desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // for tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // for mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box 
      //maxWidth="1200px" 
      margin="auto" 
      p={4} 
      mt={16} 
      pb={16} 
      id='program'
      position="relative"
      bgImage={bgImage.src}
      bgPosition="bottom"
      bgRepeat="no-repeat"
      bgSize="contain"
    >
      <VStack spacing={8}>
        <Flex direction={{ base: "column", md: "row" }} position="relative" alignItems="center">
            <Heading size={{base: "2xl", md:"4xl"}} mb={4} textColor='#000232' fontWeight={800} maxW={900} fontFamily='GratelosDisplay, sans-serif' textAlign={{base: "center", md: "left"}}>
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
            <Heading size={{base: "2xl", md:"4xl"}} marginTop={10} marginBottom={16} textColor='#000232' fontWeight={800} textAlign="center" fontFamily='GratelosDisplay, sans-serif'>
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