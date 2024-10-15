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
  Spinner
} from '@chakra-ui/react';
import axios from 'axios';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),
  mobileNumber: z.string().min(1, 'Mobile number is required').regex(/^[6-9]\d{9}$/ , 'Invalid mobile number'),
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

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/contactForm', {
        name: data.name,
        phone: data.mobileNumber,
      });
      console.log("response: ", response);
      reset();
      toast({
        title: "Form submitted successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right"
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "An error occurred",
        description: "Unable to submit form. Please try again.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="380px" centerContent bg="#F4F3ED" rounded="xl" boxShadow="md" marginTop={{base: "", md: "-40"}} marginRight="24" zIndex={1}>
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
                <Input
                  id="mobileNumber"
                  placeholder="Enter your mobile number"
                  {...register('mobileNumber')}
                />
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
    </Container>
  );
};

export default ContactForm;