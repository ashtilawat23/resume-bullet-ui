import React from 'react';
import { Box, Image, Heading, Text, VStack, Input, Button, useToast, Flex } from '@chakra-ui/react';
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
    <>
    <Flex justifyContent="center" position='fixed' top="10%" width="full">
      <Box boxSize='md'> 
        <Image src={stacked_logo} alt='BloomTech' />
      </Box>
    </Flex>
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <VStack spacing={10} mx="auto" maxW="lg" py={12} px={6}>
        <Box borderRadius='md' boxShadow="lg" p={8} backgroundColor='white' >
          <Heading as="h3" size="xl" textAlign="center" mb={5}>Resume Bullet Generator</Heading>
          <Text fontSize="sm">This app uses OpenAI's GPT-4 to create custom resume bullets, helping job seekers match their resumes to specific job ads for a better chance at landing interviews.</Text>
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
            <Button width="full" mt={4} type="submit" colorScheme="gray">Login</Button>
          </Box>
        </Box>
      </VStack>
    </Flex>
    </>
  );
};

export default Login;
