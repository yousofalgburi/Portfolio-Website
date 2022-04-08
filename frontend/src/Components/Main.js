import { Container, VStack, Heading, Text, SimpleGrid, GridItem } from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"

const Main = () => {
    return (
        <Container maxW="container.lg" p={20}>
            <VStack w="full" h="full" p={10} spacing={10}>
                <SimpleGrid columns={5} columnGap={3}>
                    <GridItem colSpan={4}>
                        <Heading size="2xl">👋 Hi! I'm Yousof Algburi.</Heading> 
                    </GridItem>
                    <GridItem colSpan={1} alignSelf="center">
                        <ColorModeSwitcher />
                    </GridItem>
                </SimpleGrid>
                <Text>I'm a self-taught software developer focused on building full-stack web applications.
                    I started coding eight years ago and have been passionately creating software since.
                </Text>
            </VStack>
        </Container>
    )
}

export default Main