import React, { useState } from 'react';
import {
  Input,
  Select,
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
  VStack
} from '@chakra-ui/react';

const JobInfo = ({ updateJobInfo }) => {
  const [jobInfo, setJobInfo] = useState({
    target_job_title: '',
    target_company: '',
    target_industry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedJobInfo = { ...jobInfo, [name]: value };
    setJobInfo(updatedJobInfo);
    updateJobInfo(updatedJobInfo);
  };

  return (
    <Box p={4} borderRadius="md">
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel>Target Job Title</FormLabel>
          <Input
            size='md'
            variant='outline'
            placeholder="Software Engineer"
            name="target_job_title"
            value={jobInfo.target_job_title}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Target Company</FormLabel>
          <Input
            size='md'
            variant='outline'
            placeholder="Google"
            name="target_company"
            value={jobInfo.target_company}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Target Industry</FormLabel>
          <Select
            size='md'
            variant='outline'
            placeholder="Technology"
            name="target_industry"
            value={jobInfo.target_industry}
            onChange={handleChange}
            color='gray.500'
          >
            <option value="Online Retail">Online Retail</option>
            <option value="Consulting">Consulting</option>
            <option value="Engineering">Engineering</option>
            <option value="Advisory and Financial Services">Advisory and Financial Services</option>
            <option value="Insurance">Insurance</option>
            <option value="Healthcare and Pharmaceuticals">Healthcare and Pharmaceuticals</option>
            <option value="Media and Telecommunications">Media and Telecommunications</option>
            <option value="Life Sciences">Life Sciences</option>
            <option value="Technology">Technology</option>
            <option value="Transport and Logistics">Transport and Logistics</option>
            <option value="Manufacturing">Manufacturing</option>
          </Select>
          <FormHelperText>Select the industry related to your desired job and company for more tailored recommendations. Unsure? Choose the closest match to your career field.</FormHelperText>
        </FormControl>
      </VStack>
    </Box>
  );
}

export default JobInfo;
