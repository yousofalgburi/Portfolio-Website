import { Image, Box } from "@chakra-ui/react"

const Project = ({ imageUrl, imageAlt, title }) => {
    return (
      <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={imageUrl} alt={imageAlt} />

        <Box p='6'>  
          <Box textAlign="center" mt='1' fontWeight='semibold' as='h4' lineHeight='tight'> {title}</Box>
        </Box>
      </Box>
    )
  }

export default Project