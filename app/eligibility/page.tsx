'use client'

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'
import DrLedSection from 'sections/DrLedSection'
import WeightLossGraphImg from '../../public/static/homepage/WeightLossGraphImg.webp'
import StepIntoNewWorld from '../../sections/StepIntoNewWorld'
import WeightLossSection from 'sections/WeightLossSection'
import WeightLossGraphImgMob from '../../public/static/homepage/WeightLossGraphImgMob.webp'
import ScienceSlider from 'sections/ScienceSlider'
import ContactForm from '#components/ContactForm'

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <DrLedSection />
      <HighlightsSection />
      {/* <WeightLossSection /> */}

      <StepIntoNewWorld />
      <ScienceSlider />
      {/* <FeaturesSection /> */}

      <TestimonialsSection />

      {/* <PricingSection /> */}
      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden" bg="#E6E5DE">
      {/* <BackgroundGradient height="100%" zIndex="-1" /> */}
      <Container maxW="container.xl" pt={{ base: 20, lg: 30 }} pb={{base: "10", md: "40"}}>
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                START YOUR <Br />TRANSFORMATION 
                <Br />Today 
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium" marginTop={{base: 4, md:16}} marginBottom={8}>
                Sustainable Weight Loss, <Br />Backed by Science. <Br />Book free Consultation. Today!
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink
                  size="lg"
                  href="/eligibility"
                  variant="solid"
                  colorScheme="yellow"
                  rounded="3xl"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Lets Moonwalk
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>

          <Box marginLeft={{ base: 0, lg: "-52" }} marginTop={{ base: 4, lg: "60" }}>
            <Image
              src="/static/homepage/HeroImg.webp"
              width={400}
              height={300}
              alt="New Image"
              quality="75"
            />
          </Box>

          <ContactForm />

          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '50%', xl: '55%' }}
            top={{ lg: '-20%', xl: '-15%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/homepage/HeroSideImg.webp"
                  width={1088}
                  height={1299}
                  alt="Moon Img"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights bg="#E6E5DE" title='LOSE UPTO 20% BODY WEIGHT, GUANRANTEED' color='#000232'>
      <HighlightsItem colSpan={[1, null, 2]}>
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize={{base: "sm", md: "xl"}} fontWeight={300}>
            We are your complete guide to weight loss, committed to doing whatever it takes to ensure you 
            receive the best scientific and clinical care. Our approach focuses on your unique biology, 
            personalized coaching, GLP-1 or other medicines, science-backed procedures and intuitive 
            educational resources to help you address all factors that will get you to your target weight.
          </Text>
          <Text fontWeight={400} textColor="#000232">
            Moonwalk delivers better results than standalone solutions, guaranteed.
          </Text>
          <Button
              rightIcon={<FiArrowRight />}
              bg="yellow.400"
              color="black"
              size="lg"
              rounded="3xl"
              _hover={{ bg: "yellow.500" }}
              width={173}
          >
            Learn More
          </Button>
        </VStack>
      </HighlightsItem>
        <Box position="relative" width="100%" height="100%" boxShadow="none">
          {/* <Image
            src={WeightLossGraphImg}
            alt="Weight Loss Graph"
            layout="fill"
            objectFit="cover"
            className='hidden md:block border-2 border-gray-300 rounded-md'
          /> */}
          <Image
            src={WeightLossGraphImgMob}
            alt="Weight Loss Graph"
            layout="fill"
            objectFit="cover"
            className='border-2 border-gray-300 rounded-md'
          />
          {/* <Text color="#000232" fontSize="3xl" fontWeight={700} position={'absolute'} right={20} top={{base: 4, md:16}} fontFamily="Oswald, sans-serif">
            Lose up to <Text as='span' color="#F0BE3C">20%</Text><Br/> of your weight
          </Text> */}
        </Box>
        </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> dashboard template.
        </Heading>
      }
      description={
        <>
          Saas UI Pro includes everything you need to build modern frontends.
          <Br />
          Use it as a template for your next product or foundation for your
          design system.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: '#components.',
          icon: FiBox,
          description:
            'All premium components are available on a private NPM registery, no more copy pasting and always up-to-date.',
          variant: 'inline',
        },
        {
          title: 'Starterkits.',
          icon: FiLock,
          description:
            'Example apps in Next.JS, Electron. Including authentication, billing, example pages, everything you need to get started FAST.',
          variant: 'inline',
        },
        {
          title: 'Documentation.',
          icon: FiSearch,
          description:
            'Extensively documented, including storybooks, best practices, use-cases and examples.',
          variant: 'inline',
        },
        {
          title: 'Onboarding.',
          icon: FiUserPlus,
          description:
            'Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.',
          variant: 'inline',
        },
        {
          title: 'Feature flags.',
          icon: FiFlag,
          description:
            "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
          variant: 'inline',
        },
        {
          title: 'Upselling.',
          icon: FiTrendingUp,
          description:
            '#components and hooks for upgrade flows designed to make upgrading inside your app frictionless.',
          variant: 'inline',
        },
        {
          title: 'Themes.',
          icon: FiToggleLeft,
          description:
            'Includes multiple themes with darkmode support, always have the perfect starting point for your next project.',
          variant: 'inline',
        },
        {
          title: 'Generators.',
          icon: FiTerminal,
          description:
            'Extend your design system while maintaininig code quality and consistency with built-in generators.',
          variant: 'inline',
        },
        {
          title: 'Monorepo.',
          icon: FiCode,
          description: (
            <>
              All code is available as packages in a high-performance{' '}
              <Link href="https://turborepo.com">Turborepo</Link>, you have full
              control to modify and adjust it to your workflow.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
      id='results'
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home