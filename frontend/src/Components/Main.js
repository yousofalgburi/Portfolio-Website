import { Container, VStack, Heading, Text, SimpleGrid, GridItem, Image, Flex } from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"

const Main = () => {
    return (
        <Container maxW="container.lg" p={20}>
            <Flex direction="column">
                <VStack w="full" h="full" p={10} spacing={10}>
                    <SimpleGrid columns={5}>
                        <GridItem colSpan={4}>
                            <Heading size="2xl" >👋 Hi! I'm Yousof Algburi.</Heading> 
                        </GridItem>
                        <GridItem colSpan={1} alignSelf="center">
                            <ColorModeSwitcher />
                        </GridItem> 
                    </SimpleGrid>
                    <Text mt={5} fontSize="lg">I'm a self-taught software developer focused on building full-stack web applications.
                        I started learning coding through Youtube, books, and Udemy eight years ago and have been passionately creating 
                        software since.
                    </Text>
                    
                    <Heading size="xl" alignSelf="flex-start">PROJECTS</Heading>
                    <Text>
                        Section to highlight my projects. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laudantium quis quidem et nemo. Deserunt iure dignissimos error deleniti repudiandae, dicta eius asperiores fuga a blanditiis saepe tempora obcaecati sapiente!
                    </Text>

                    <Heading size="xl" alignSelf="flex-start">SKILLS</Heading>
                    <Text>
                        Section to highlight my projects. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laudantium quis quidem et nemo. Deserunt iure dignissimos error deleniti repudiandae, dicta eius asperiores fuga a blanditiis saepe tempora obcaecati sapiente!
                    </Text>

                    <Heading size="xl" alignSelf="flex-start">EDUCATION</Heading>
                    <Text>
                        Section to highlight my projects. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laudantium quis quidem et nemo. Deserunt iure dignissimos error deleniti repudiandae, dicta eius asperiores fuga a blanditiis saepe tempora obcaecati sapiente!
                    </Text>
                </VStack>
            </Flex>
        </Container>
    )
}

export default Main