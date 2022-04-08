import { Container, VStack, Heading, Text, SimpleGrid, GridItem, Image, Flex, Center, Box, HStack } from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { motion } from "framer-motion"
import Section from "./Section"
import Project from "./Project"
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaHtml5, FaJava, FaPython, FaDocker } from "react-icons/fa"
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io'
import { SiCsharp, SiMongodb, SiPostgresql } from 'react-icons/si'
import { AiOutlineConsoleSql, AiOutlineCopyrightCircle } from 'react-icons/ai'
import { DiGit } from 'react-icons/di'

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
                            <a href="https://github.com/yousofalgburi" target="_blank" rel="noreferrer"><FaGithub size="30px" /></a>
                            <a href="https://www.linkedin.com/in/yousof-algburi-410b84209/" target="_blank" rel="noreferrer"><FaLinkedin size="30px"/></a>
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
                                    <Project 
                                    imageUrl="https://res.cloudinary.com/dcqzhsbcc/image/upload/v1649438808/project1_cbxu8s.jpg" 
                                    imageAlt="Destination Social Media App" 
                                    title="Social media web app built using React, Redux, Node.js, Express.js, and MongoDB" 
                                    websiteLink="https://destinationapp.netlify.app/" 
                                    githubLink="https://github.com/yousofalgburi/destination-mern-stack" />
                                </GridItem>
                                <GridItem>
                                    <Project 
                                    imageUrl="https://res.cloudinary.com/dcqzhsbcc/image/upload/v1649438808/profile2_s1jnia.jpg" 
                                    imageAlt="Bug Tracker Team App" 
                                    title="Bug tracker web app built using React, Node.js, Express.js, and PostgreSQL"
                                    websiteLink="https://bugtrackerapplication.herokuapp.com/"
                                    githubLink="https://github.com/yousofalgburi/bug-tracker-pern-stack" />
                                </GridItem>
                                <GridItem>
                                    <Project 
                                    imageUrl="https://res.cloudinary.com/dcqzhsbcc/image/upload/v1649439049/project3_tgs1x5.png" 
                                    imageAlt="Portfolio Website" 
                                    title="Portfolio website built using React and Chakra UI" 
                                    githubLink="https://github.com/yousofalgburi/Portfolio-Website" />
                                </GridItem>
                            </SimpleGrid>
                        </Section>
                        
                        <Heading size="xl" alignSelf="flex-start">SKILLS</Heading>
                        <Section>
                            <SimpleGrid columns={2} spacing={20}>
                                <VStack align="flex-start">
                                    <Text size="lg" as="u">Programming</Text>
                                    <HStack> <Text fontSize="lg">JavaScript</Text> <IoLogoJavascript size="25px"/></HStack>
                                    <HStack> <Text fontSize="lg">Python</Text> <FaPython size="25px"/></HStack>
                                    <HStack> <Text fontSize="lg">Java</Text> <FaJava size="25px"/></HStack>
                                    <HStack> <Text fontSize="lg">C#</Text> <SiCsharp size="25px"/></HStack>
                                    <HStack> <Text fontSize="lg">SQL</Text> < AiOutlineConsoleSql size="25px"/></HStack>
                                    <HStack> <Text fontSize="lg">HTML5 & CSS3</Text> <FaHtml5 size="25px"/> <IoLogoCss3 size="25px"/></HStack>
                                </VStack>
                                <VStack align="flex-start">
                                    <Text size="lg" as="u">Technologies & Tools</Text>
                                    <HStack> <Text fontSize="lg">React / Redux</Text> <FaReact size="25px"/></HStack>
                                    <HStack> <Text fontSize="lg">Node.js / Express.js</Text> <FaNodeJs size="25px"/></HStack>
                                    <HStack> <Text fontSize="lg">Github / Git</Text> <FaGithub size="25px"/> <DiGit size="25px"/></HStack>
                                    <HStack> <Text fontSize="lg">Mongodb</Text> <SiMongodb size="25px"/></HStack>
                                    <HStack> <Text fontSize="lg">Postgresql</Text> <SiPostgresql size="25px"/></HStack>
                                    <HStack> <Text fontSize="lg">Docker</Text> <FaDocker size="25px"/></HStack>
                                </VStack>
                            </SimpleGrid>
                        </Section>

                        <Heading size="xl" alignSelf="flex-start">EDUCATION</Heading>
                        <Section>
                            <Text>- PVCC - A.S. in Computer Science</Text>
                            <Text>- The Web Developer Bootcamp 2022 by Colt Steele</Text>
                            <Text>- React - The Complete Guide (incl Hooks, React Router, Redux) by Maximilian Schwarzmüller</Text>
                        </Section>
                    </VStack>
                </Flex>

                <Center mt={3} mb={5}>
                    <HStack>
                        <AiOutlineCopyrightCircle/> <Text>Yousof Algburi</Text> 
                    </HStack>
                </Center>
            </Container>
        </motion.article>
    )
}

export default Main