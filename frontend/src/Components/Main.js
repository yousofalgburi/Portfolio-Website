import { Container, VStack, Heading, Text, SimpleGrid, GridItem, Image, Flex, Center, Box, HStack } from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { motion } from "framer-motion"
import Section from "./Section"
import Project from "./Project"
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa"

const Main = () => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -0, y: 20 }
    }

    return (
        <motion.article initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.4, type: 'easeInOut' }} style={{ position: 'relative' }}>
            <Container>
                <Box mb={3}>
                    <Box m={3} align="right">
                        <ColorModeSwitcher />
                    </Box>
                    
                    <Center>    
                        <HStack>
                            <FaGithub size="30px" />
                            <FaLinkedin size="30px" />
                        </HStack>
                    </Center>
                </Box>

                <Flex direction="column">
                    <VStack w="full" h="full" p={10} spacing={10}>
                        <Section>
                            <Center mb={5}>
                                <Image borderRadius='full' boxSize='200px' src='https://res.cloudinary.com/dcqzhsbcc/image/upload/v1649438524/profile_xzfiqx.jpg' alt='Dan Abramov'/>
                            </Center>

                            <Heading size="xl" >👋 Hi! I'm Yousof Algburi.</Heading> 

                            <Text mt={5} fontSize="lg">I'm a self-taught software developer focused on building full-stack web applications.
                                I started learning coding through Youtube, books, and Udemy eight years ago and have been passionately creating 
                                software since.
                            </Text>
                        </Section>

                        <Heading size="xl" alignSelf="flex-start" >PROJECTS</Heading>
                        <Section>
                            <SimpleGrid spacing={5} mt={5}>
                                <GridItem>
                                    <Project imageUrl="https://res.cloudinary.com/dcqzhsbcc/image/upload/v1649438808/project1_cbxu8s.jpg" imageAlt="Destination Social Media App" title="Social media web app build using React, Redux, Node.js, Express.js, and MongoDB" />
                                </GridItem>
                                <GridItem>
                                    <Project imageUrl="https://res.cloudinary.com/dcqzhsbcc/image/upload/v1649438808/profile2_s1jnia.jpg" imageAlt="Bug Tracker Team App" title="Bug tracker web app built using React, Node.js, Express.js, and PostgreSQL" />
                                </GridItem>
                                <GridItem>
                                    <Project imageUrl="https://res.cloudinary.com/dcqzhsbcc/image/upload/v1649439049/project3_tgs1x5.png" imageAlt="Portfolio Website" title="Portfolio website build using React, ChakraUI, and Three.js" />
                                </GridItem>
                            </SimpleGrid>
                        </Section>
                        
                        <Heading size="xl" alignSelf="flex-start">SKILLS</Heading>
                        <Section>    
                            <VStack>
                                <HStack> <Text fontSize="xl">Frontend Development</Text> < FaReact size="25px" /></HStack>
                                <HStack> <Text fontSize="xl">Backend Development</Text> <FaNodeJs size="25px" /></HStack>
                            </VStack>
                        </Section>

                        <Heading size="xl" alignSelf="flex-start">EDUCATION</Heading>
                        <Section>
                            <Text> PVCC - AS in Computer Science </Text>
                            <Text> Udemy Certificate 1</Text>
                            <Text> Udemy Certificate 2</Text>
                        </Section>
                    </VStack>
                </Flex>
            </Container>
        </motion.article>
    )
}

export default Main