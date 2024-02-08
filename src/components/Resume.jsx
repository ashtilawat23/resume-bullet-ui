import React, { useState } from 'react';
import {
  Textarea,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Box,
  IconButton,
  VStack
} from "@chakra-ui/react";
import { CloseIcon, AddIcon } from '@chakra-ui/icons';

const ExperienceForm = ({ onDelete }) => (
  <Box border="1px" borderColor="gray.200" p={4} borderRadius="md" mb={4} position="relative">
    <FormControl isRequired>
      <FormLabel>Employer</FormLabel>
      <Input size='md' placeholder="e.g., Google" />
    </FormControl>
    <FormControl isRequired mt={4}>
      <FormLabel>Job Title</FormLabel>
      <Input size='md' placeholder="e.g., Software Engineer" />
    </FormControl>
    <FormControl isRequired mt={4}>
      <FormLabel>Relevant Experience or Projects</FormLabel>
      <Textarea size='sm' placeholder="Paste or enter relevant experience from your resume here" />
      <FormHelperText>Copy and paste relevant experience from your updated resume, or describe it in 5-7 sentences. Include projects, and use commas or new lines to separate items. Highlight quantifiable achievements where possible.</FormHelperText>
    </FormControl>
    <IconButton
      aria-label="Delete experience"
      icon={<CloseIcon />}
      size="sm"
      position="absolute"
      top={2}
      right={2}
      onClick={onDelete}
    />
  </Box>
);

const Resume = () => {
  const [experiences, setExperiences] = useState([{ id: Date.now() }]);

  const addExperience = () => {
    setExperiences([...experiences, { id: Date.now() }]);
  };

  const deleteExperience = (id) => {
    setExperiences(experiences.filter(experience => experience.id !== id));
  };

  return (
    <>
      <VStack spacing={4} align="stretch">
        {experiences.map((experience, index) => (
          <ExperienceForm key={experience.id} onDelete={() => deleteExperience(experience.id)} />
        ))}
        <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={addExperience}>
          Add Experience
        </Button>
      </VStack>
    </>
  );
};

export default Resume;
