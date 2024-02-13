import React from 'react';
import { Box, Button, Flex, VStack, Text, HStack} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import JobInfo from '../components/JobInfo';
import JobPosting from '../components/JobPosting';
import Resume from '../components/Resume';

const steps = [
  { title: 'First', description: 'Step 1: Target Job Info', content: <JobInfo /> },
  { title: 'Second', description: 'Step 2: Job Posting Specifics', content: <JobPosting /> },
  { title: 'Third', description: 'Step 3: Relevant Experience', content: <Resume /> },
];

const Form = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => setActiveStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
  const handlePrevious = () => setActiveStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  const isLastStep = activeStep === steps.length - 1;

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box h="80vh" w="80vw" p="10" bg="white" borderRadius="md" boxShadow="lg">
        <VStack spacing={10}>
          {/* Step Indicators */}
          <HStack spacing={20}>
            {steps.map((step, index) => (
              <HStack key={index} align="center">
                {index < activeStep && <CheckIcon color="green.600" />}
                <Text as='em' fontSize='lg' color={index < activeStep ? 'green.600' : index === activeStep ? 'gray.600' : 'gray.400'}>
                  {step.description}
                </Text>
              </HStack>
            ))}
          </HStack>

          {/* Step Content */}
          <Box w="full" h='50vh' overflowY='auto'>
            {steps[activeStep].content}
          </Box>

          {/* Navigation Buttons */}
          <Flex w="full" justify="flex-end" mt={5}>
            <Button mr={4} onClick={handlePrevious} isDisabled={activeStep === 0}>
              Previous
            </Button>
            <Button colorScheme="teal" onClick={handleNext}>
              {isLastStep ? 'Finish' : 'Next'}
            </Button>
          </Flex>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Form;
