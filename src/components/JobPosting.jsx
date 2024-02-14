import React, { useState } from 'react';
import {
  Textarea,
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
  VStack
} from "@chakra-ui/react";

const JobPosting = ({ updateJobPosting }) => {
  const [jobPosting, setJobPosting] = useState({
    job_overview: '',
    minimum_requirements: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedJobPosting = { ...jobPosting, [name]: value };
    setJobPosting(updatedJobPosting);
    updateJobPosting(updatedJobPosting);
  };

  return (
    <Box border="1px" borderColor="gray.200" p={4} borderRadius="md">
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel>Job Overview</FormLabel>
          <Textarea
            size='sm'
            placeholder="Paste relevant portions of the job posting here"
            name="job_overview"
            value={jobPosting.job_overview}
            onChange={handleChange}
          />
          <FormHelperText>Copy and paste the overview or description directly from a job posting that interests you. Focus on including the job's main responsibilities. This information will aid us in better aligning resume bullets with your career goals.</FormHelperText>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Minimum Requirements</FormLabel>
          <Textarea
            size='sm'
            placeholder="Paste the minimum requirements for the job here"
            name="minimum_requirements"
            value={jobPosting.minimum_requirements}
            onChange={handleChange}
          />
          <FormHelperText>Please list or copy and paste the minimum qualifications required for your target job from the job posting. Include education, skills, and experience. Separate each qualification with a comma or by starting a new line.</FormHelperText>
        </FormControl>
      </VStack>
    </Box>
  );
}

export default JobPosting;
