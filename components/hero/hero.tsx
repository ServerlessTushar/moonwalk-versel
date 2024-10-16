import { Container, Flex, FlexProps, Text, VStack } from '@chakra-ui/react'

interface HeroProps extends Omit<FlexProps, 'title'> {
  title: string | React.ReactNode
  description?: string | React.ReactNode
}

export const Hero = ({ title, description, children, ...rest }: HeroProps) => {
  return (
    <Flex py={{base: "4", md:"20"}} alignItems="center" {...rest}>
      <Container>
        <VStack spacing={[4, null, 8]} alignItems="flex-start">
          <Text 
            as="h1" 
            textStyle="h1" 
            textAlign="left" 
            casing='uppercase' 
            fontFamily='GratelosDisplay' 
            fontSize={{ base: '30px', md: "70px" }} 
            fontWeight={400}
            lineHeight="shorter" 
            letterSpacing="wider"
            w={{base: "90%", md:"165%"}}
            color="#000232"
          >
            {title}
          </Text>
          <Text
            as="div"
            textStyle="subtitle"
            align="left"
            color="#000232"
            _dark={{ color: 'gray.400' }}
          >
            {description}
          </Text>
        </VStack>
        {children}
      </Container>
    </Flex>
  )
}
