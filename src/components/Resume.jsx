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

const ExperienceForm = ({ experience, onUpdate, onDelete }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate({ ...experience, [name]: value });
  };

  return (
    <Box border="1px" borderColor="gray.200" p={4} borderRadius="md" mb={4} position="relative">
      <FormControl isRequired>
        <FormLabel>Employer</FormLabel>
        <Input
          size='md'
          placeholder="e.g., Google"
          name="employer"
          value={experience.employer || ''}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired mt={4}>
        <FormLabel>Job Title</FormLabel>
        <Input
          size='md'
          placeholder="e.g., Software Engineer"
          name="job_title"
          value={experience.job_title || ''}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired mt={4}>
        <FormLabel>Relevant Experience or Projects</FormLabel>
        <Textarea
          size='sm'
          placeholder="Paste or enter relevant experience from your resume here"
          name="relevant_experience"
          value={experience.relevant_experience || ''}
          onChange={handleChange}
        />
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
};

const Resume = ({ updateExperience }) => {
  const [experiences, setExperiences] = useState([{ id: Date.now(), employer: '', job_title: '', relevant_experience: '' }]);

  const handleUpdateExperience = (index, updatedExperience) => {
    const newExperiences = experiences.map((exp, i) => i === index ? updatedExperience : exp);
    setExperiences(newExperiences);
    updateExperience(newExperiences);
  };

  const addExperience = () => {
    setExperiences([...experiences, { id: Date.now(), employer: '', job_title: '', relevant_experience: '' }]);
  };

  const deleteExperience = (id) => {
    const newExperiences = experiences.filter(experience => experience.id !== id);
    setExperiences(newExperiences);
    updateExperience(newExperiences);
  };

  return (
    <>
      <VStack spacing={4} align="stretch">
        {experiences.map((experience, index) => (
          <ExperienceForm
            key={experience.id}
            experience={experience}
            onUpdate={(updatedExperience) => handleUpdateExperience(index, updatedExperience)}
            onDelete={() => deleteExperience(experience.id)}
          />
        ))}
        <Button leftIcon={<AddIcon />} colorScheme="gray" onClick={addExperience}>
          Add Experience
        </Button>
      </VStack>
    </>
  );
};

export default Resume;
