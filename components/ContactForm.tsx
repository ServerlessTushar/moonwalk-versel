// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   VStack,
//   FormErrorMessage,
//   Container,
//   Heading,
//   useToast,
//   Spinner
// } from '@chakra-ui/react';
// import axios from 'axios';
// import { InputGroup } from '@chakra-ui/react';
// import { InputLeftAddon } from '@chakra-ui/react';

// const formSchema = z.object({
//   name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),
//   mobileNumber: z.string().min(1, 'Mobile number is required').regex(/^[0-9]{9}$/ , 'Invalid mobile number'),
// });

// type FormData = z.infer<typeof formSchema>;

// const ContactForm: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//   });
//   const [loading, setLoading] = useState(false);
//   const toast = useToast();

//   const onSubmit = async (data: FormData) => {
//     setLoading(true);
//     try {
//       const response = await axios.post('/api/contactForm', {
//         name: data.name,
//         phone: data.mobileNumber,
//       });
//       console.log("response: ", response);
//       reset();
//       toast({
//         title: "Form submitted successfully",
//         status: "success",
//         duration: 2000,
//         isClosable: true,
//         position: "top-right"
//       });
//     } catch (error) {
//       console.error('Error:', error);
//       toast({
//         title: "An error occurred",
//         description: "Unable to submit form. Please try again.",
//         status: "error",
//         duration: 2000,
//         isClosable: true,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxW="380px" centerContent bg="#F4F3ED" rounded="xl" boxShadow="md" marginTop={{base: "", md: "-40"}} marginRight="24" zIndex={1} textColor="#000232">
//       <Box w="100%" h="100%" p={4}>
//         <VStack spacing={4} align="stretch">
//           <Heading size="lg" textAlign="center" mb={2}>Book Free Consultation</Heading>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <VStack spacing={3}>
//               <FormControl isInvalid={!!errors.name}>
//                 <FormLabel htmlFor="name">Name</FormLabel>
//                 <Input
//                   id="name"
//                   placeholder="Enter your name"
//                   {...register('name')}
//                 />
//                 <FormErrorMessage>
//                   {errors.name && errors.name.message}
//                 </FormErrorMessage>
//               </FormControl>

//               <FormControl isInvalid={!!errors.mobileNumber}>
//                 <FormLabel htmlFor="mobileNumber">Mobile Number</FormLabel>
//                 {/* <Input
//                   id="mobileNumber"
//                   placeholder="Enter your mobile number"
//                   {...register('mobileNumber')}
//                 /> */}
//                 <InputGroup>
//                   <InputLeftAddon bg="#F4F3ED" borderWidth="1px" borderStyle="solid" borderColor="blackAlpha.300">
//                     +971
//                   </InputLeftAddon>
//                   <Input
//                     id="mobileNumber"
//                     placeholder="Enter your mobile number"
//                     {...register('mobileNumber')}
//                     maxLength={9}
//                   />
//                 </InputGroup>
//                 <FormErrorMessage>
//                   {errors.mobileNumber && errors.mobileNumber.message}
//                 </FormErrorMessage>
//               </FormControl>

//               <Button 
//                 type="submit" 
//                 colorScheme="yellow" 
//                 width="full" mt={2} 
//                 rounded="3xl" 
//                 paddingY="5" 
//                 maxWidth={200}
//                 isLoading={loading} // Show loading state
//                 loadingText="Submitting" // Loading text
//                 isDisabled={loading} // Disable button during loading
//               >
//                 Submit
//               </Button>
//             </VStack>
//           </form>
//         </VStack>
//       </Box>
//     </Container>
//   );
// };

// export default ContactForm;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  FormErrorMessage,
  Container,
  Heading,
  useToast,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import { InputGroup } from '@chakra-ui/react';
import { InputLeftAddon } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),
  mobileNumber: z.string().min(1, 'Mobile number is required').regex(/^[0-9]{9}$/ , 'Invalid mobile number'),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { isOpen: isSuccessOpen, onOpen: onSuccessOpen, onClose: onSuccessClose } = useDisclosure();
  const { isOpen: isErrorOpen, onOpen: onErrorOpen, onClose: onErrorClose } = useDisclosure();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/contactForm', {
        name: data.name,
        phone: data.mobileNumber,
      });
      console.log("response: ", response);
      reset();
      // toast({
      //   title: "Form submitted successfully",
      //   status: "success",
      //   duration: 2000,
      //   isClosable: true,
      //   position: "top-right"
      // });
      onSuccessOpen();
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while submitting the form')
      // toast({
      //   title: "An error occurred",
      //   description: "Unable to submit form. Please try again.",
      //   status: "error",
      //   duration: 2000,
      //   isClosable: true,
      // });
      onErrorOpen();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="380px" centerContent bg="#F4F3ED" rounded="xl" boxShadow="md" marginTop={{base: "", md: "-40"}} marginRight="24" zIndex={1} textColor="#000232">
      <Box w="100%" h="100%" p={4}>
        <VStack spacing={4} align="stretch">
          <Heading size="lg" textAlign="center" mb={2}>Book Free Consultation</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={3}>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  {...register('name')}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.mobileNumber}>
                <FormLabel htmlFor="mobileNumber">Mobile Number</FormLabel>
                {/* <Input
                  id="mobileNumber"
                  placeholder="Enter your mobile number"
                  {...register('mobileNumber')}
                /> */}
                <InputGroup>
                  <InputLeftAddon bg="#F4F3ED" borderWidth="1px" borderStyle="solid" borderColor="blackAlpha.300">
                    +971
                  </InputLeftAddon>
                  <Input
                    id="mobileNumber"
                    placeholder="Enter your mobile number"
                    {...register('mobileNumber')}
                    maxLength={9}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.mobileNumber && errors.mobileNumber.message}
                </FormErrorMessage>
              </FormControl>

              <Button 
                type="submit" 
                colorScheme="yellow" 
                width="full" mt={2} 
                rounded="3xl" 
                paddingY="5" 
                maxWidth={200}
                isLoading={loading} // Show loading state
                loadingText="Submitting" // Loading text
                isDisabled={loading} // Disable button during loading
              >
                Submit
              </Button>
            </VStack>
          </form>
        </VStack>
      </Box>
      <Modal isOpen={isSuccessOpen} onClose={onSuccessClose}>
        <ModalOverlay />
        <ModalContent w="380px" h="290px" top={{base: 20, md: 9}} left={{base: 10, md: "340px"}} textColor='white'>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            h="100%"
            p={4}
            bg="#000232"
            rounded="lg"
            textAlign="center"
          >
            <ModalHeader fontSize={"3xl"} mt={6}>Awesome!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              We&apos;ll be in touch soon to kickstart your personalized weight loss journey. Stay tuned!
            </ModalBody>
            {/* <ModalFooter>
              <Button colorScheme="yellow" mr={3} onClick={onSuccessClose}>
                Close
              </Button>
            </ModalFooter> */}
          </Flex>
        </ModalContent>
      </Modal>

      <Modal isOpen={isErrorOpen} onClose={onErrorClose}>
        <ModalOverlay />
        <ModalContent w="380px" h="290px" top={9} left="340px" textColor='white'>
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            h="100%"
            p={4}
            bg="red.600"
            rounded="lg"
          >
            <ModalHeader>Error</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {errorMessage}
            </ModalBody>
            {/* <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onErrorClose}>
                Close
              </Button>
            </ModalFooter> */}
          </Flex>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default ContactForm;