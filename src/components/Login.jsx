import React from 'react';
import { Box, Image, Heading, Text, VStack, Input, Button, useToast } from '@chakra-ui/react';
import { login } from '../auth/keyphrase';
import stacked_logo from '../assets/BIT_Logo_Stacked_White.png';

const Login = ({ setIsAuthenticatedState, keyPhrase, setKeyPhrase }) => {
  const toast = useToast();

  const handleLogin = (event) => {
    event.preventDefault();

    if (login(keyPhrase)) {
      setIsAuthenticatedState(true);
    } else {
      toast({
        title: "Authentication failed",
        description: "Invalid key phrase",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleKeyPhraseChange = (event) => {
    setKeyPhrase(event.target.value);
  };

  return (
    <Box textAlign="center" fontSize="xl">
      <Box p={5}>
        <Image src={stacked_logo} alt="BIT Logo" mx="auto" />
      </Box>
      <VStack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Box rounded={'lg'} boxShadow="lg" p={8}>
          <Heading as="h2" size="xl" textAlign="center" mb={5}>Custom Outreach Generator</Heading>
          <Text fontSize="md">By leveraging the capabilities of OpenAI's GPT-3.5 Turbo, the app generates a unique and engaging outreach letter based on the information you provide.</Text>
          <Box as="form" mt={8} onSubmit={handleLogin}>
            <Input
              variant="filled"
              mb={3}
              type="text"
              name="password"
              placeholder="Password"
              value={keyPhrase}
              onChange={handleKeyPhraseChange}
            />
            <Button width="full" mt={4} type="submit" colorScheme="teal">Login</Button>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default Login;
