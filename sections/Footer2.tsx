import { Box, Container, Flex, Text, VStack, HStack, Link, Icon } from "@chakra-ui/react"
import { FaPhone, FaEnvelope } from "react-icons/fa"
import Image from 'next/image';
import logoSrc from '../public/static/homepage/logo.webp';

export default function Footer2() {
  return (
    <Box as="footer" bg="#0A0A2A" color="white" py={8}>
      <Container maxW="container.xl">
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "flex-start", md: "flex-start" }}>
          <VStack align="flex-start" spacing={4} mb={{ base: 8, md: 0 }}>
            <Image
                src={logoSrc} // Use the imported WebP image
                alt="Logo" // Provide an alt text for accessibility
                width={200} // Set the desired width
                height={50} // Set the desired height
                quality={75} // Optional: Set the quality of the image
            />
            <Text maxW="400px" fontSize="sm">
              Lorem ipsum dolor sit amet consectetur. In semper fermentum volutpat amet duis feugiat. Hac libero purus suspendisse vitae tempus elementum sed. Purus nisl amet proin purus imperdiet. Potenti eu lacus aliquet ac condimentum augue.
            </Text>
            <HStack spacing={4}>
              <Icon as={FaPhone} />
              <Text><a href="tel:+1-7252729625">+1-7252729625</a></Text>
            </HStack>
            <HStack spacing={4}>
              <Icon as={FaEnvelope} />
              <Text><a href="mailto:connect@moonwalk.com">connect@moonwalk.com</a></Text>
            </HStack>
          </VStack>

          <VStack align="flex-start" spacing={2}>
            <Link href="#" fontWeight="bold">How it Works</Link>
            <Link href="#" fontWeight="bold">Program</Link>
            <Link href="#" fontWeight="bold">Results</Link>
            <Link href="#" fontWeight="bold">FAQs</Link>
          </VStack>
        </Flex>
      </Container>
    </Box>
  )
}