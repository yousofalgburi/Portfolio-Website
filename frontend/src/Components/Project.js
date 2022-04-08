import { Image, Box, Text, Link } from "@chakra-ui/react"

const Project = ({ imageUrl, imageAlt, title, githubLink, websiteLink }) => {
    return (
      <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={imageUrl} alt={imageAlt} />

        <Box p='6'>  
          <Box textAlign="center" mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>{title}
            <Text>
              <Link color='teal.500' href={githubLink} isExternal>Github</Link> 
              {websiteLink && <Link color='teal.500' href={websiteLink} isExternal> Website</Link>}
            </Text>
          </Box>
        </Box>
      </Box>
    )
  }

export default Project