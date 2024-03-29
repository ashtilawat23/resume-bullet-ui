import React, { useState } from 'react';
import { Box, Button, Flex, VStack, Text, HStack, Image} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import JobInfo from '../components/JobInfo';
import JobPosting from '../components/JobPosting';
import Resume from '../components/Resume';

const Form = () => {
  const updateJobInfo = (info) => {
    setFormData({ ...formData, ...info });
  };

  const updateJobPosting = (posting) => {
    setFormData({ ...formData, ...posting });
  };

  const updateExperience = (newExperience) => {
    setFormData({ ...formData, experience: newExperience });
  };

  const steps = [
    { title: 'First', description: 'Step 1: Target Job Info', content: <JobInfo updateJobInfo={updateJobInfo} /> },
    { title: 'Second', description: 'Step 2: Job Posting Specifics', content: <JobPosting updateJobPosting={updateJobPosting} /> },
    { title: 'Third', description: 'Step 3: Relevant Experience', content: <Resume updateExperience={updateExperience} /> },
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = useState({
    target_job_title: '',
    target_company: '',
    target_industry: '',
    job_overview: '',
    minimum_requirements: '',
    experience: []
  });

  const handleSubmit = () => {
    console.log(formData); // Log the current state to the console
    // Additional submission logic can go here
  };

  const handleNext = () => setActiveStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
  const handlePrevious = () => setActiveStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  const isLastStep = activeStep === steps.length - 1;

  return (
    <>
    <Box boxSize='sm' position='fixed' top={10} left={10}> 
      <Image src='./src/assets/BIT_Logo_Full_White.png' alt='BloomTech' />
    </Box>
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box h="70vh" w="80vw" p="10" bg="white" borderRadius="md" boxShadow="lg">
        <VStack spacing={5}>
          {/* Step Indicators */}
          <HStack spacing={20}>
            {steps.map((step, index) => (
              <HStack key={index} align="center">
                {index < activeStep && <CheckIcon color="green.600" />}
                <Text as='b' fontSize='lg' color={index < activeStep ? 'green.600' : index === activeStep ? 'gray.600' : 'gray.400'}>
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
          <Flex w="full" justify="flex-end">
            <Button mr={4} onClick={handlePrevious} isDisabled={activeStep === 0}>
              Previous
            </Button>
            <Button colorScheme='gray' onClick={isLastStep ? handleSubmit : handleNext}>
              {isLastStep ? 'Submit' : 'Next'}
            </Button>
          </Flex>
        </VStack>
      </Box>
    </Flex>
    </>
  );
};

export default Form;
