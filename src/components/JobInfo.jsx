import {
    Input, 
    Select,
    FormControl,
    FormLabel,
    FormHelperText,
} from '@chakra-ui/react'


const JobInfo = () => {

  return (
    <>
    <FormControl isRequired>
        <FormLabel>Target Job Title</FormLabel>
            <Input size='md' placeholder="Software Engineer" />
        <FormLabel>Target Company</FormLabel>
            <Input size='md' placeholder="Google" />
        <FormLabel>Target Industry</FormLabel>
            <Select size='md' placeholder="Technology">
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
    </>
  )
}

export default JobInfo