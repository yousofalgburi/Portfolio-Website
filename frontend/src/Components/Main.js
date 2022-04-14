import {
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Image,
  Flex,
  Center,
  Box,
  HStack,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { motion } from "framer-motion"
import Section from "./Section"
import Project from "./Project"
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJava,
  FaPython,
  FaDocker,
} from "react-icons/fa"
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io"
import {
  SiCsharp,
  SiMongodb,
  SiPostgresql,
  SiAmazonaws,
  SiElectron,
  SiKubernetes,
  SiTypescript,
} from "react-icons/si"
import { AiOutlineConsoleSql, AiOutlineCopyrightCircle } from "react-icons/ai"

const Main = () => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
  }

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <Container maxW="container.lg">
        <Box mb={3}>
          <Box m={3} align="right">
            <ColorModeSwitcher />
          </Box>

          <Center>
            <HStack>
              <a
                href="https://github.com/yousofalgburi"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size="30px" />
              </a>
              <a
                href="https://www.linkedin.com/in/yousof-algburi-410b84209/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size="30px" />
              </a>
            </HStack>
          </Center>
        </Box>

        <Flex direction="column">
          <VStack w="full" h="full" p={10} spacing={10}>
            <Section>
              <SimpleGrid columns={3}>
                <GridItem colSpan={[3, 3, 1]}>
                  <Center mb={5}>
                    <Image
                      borderRadius="full"
                      boxSize="200px"
                      src="https://res.cloudinary.com/dcqzhsbcc/image/upload/v1649438524/profile_xzfiqx.jpg"
                      alt="Yousof Algburi"
                    />
                  </Center>
                </GridItem>

                <GridItem colSpan={[3, 3, 2]}>
                  <Heading size="xl">👋 Hi! I'm Yousof Algburi.</Heading>
                  <Text mt={5} fontSize="lg">
                    I'm a self-taught software engineer focused on building
                    full-stack applications. I started learning to code through
                    online courses a few years ago and have been passionately
                    creating software ever since. Through my dedication to
                    learning, I have developed the analytical and
                    problem-solving skills necessary to be a successful software
                    engineer. I'm always eager to learn and I continue to add to
                    my skillset.
                  </Text>
                </GridItem>
              </SimpleGrid>
            </Section>

            <Heading size="xl" alignSelf="flex-start">
              PROJECTS
            </Heading>
            <Section>
              <SimpleGrid columns={2} spacing={5} mt={5}>
                <GridItem colSpan={[2, 2, 1]}>
                  <Project
                    imageUrl="https://res.cloudinary.com/dcqzhsbcc/image/upload/v1649438808/project1_cbxu8s.jpg"
                    imageAlt="Destination Social Media App"
                    title="Social media web app built using React, Redux, Node.js, Express.js, and MongoDB"
                    websiteLink="https://destinationapp.netlify.app/"
                    githubLink="https://github.com/yousofalgburi/destination-mern-stack"
                  />
                </GridItem>
                <GridItem colSpan={[2, 2, 1]}>
                  <Project
                    imageUrl="https://res.cloudinary.com/dcqzhsbcc/image/upload/v1649438808/profile2_s1jnia.jpg"
                    imageAlt="Bug Tracker Team App"
                    title="Bug tracker web app built using React, Node.js, Express.js, and PostgreSQL"
                    websiteLink="https://bugtrackerapplication.herokuapp.com/"
                    githubLink="https://github.com/yousofalgburi/bug-tracker-pern-stack"
                  />
                </GridItem>
                <GridItem colSpan={[2, 2, 1]}>
                  <Project
                    imageUrl="https://res.cloudinary.com/dcqzhsbcc/image/upload/v1649474847/project3_vn3v2l.jpg"
                    imageAlt="Portfolio Website"
                    title="Portfolio website built using React and Chakra UI"
                    githubLink="https://github.com/yousofalgburi/Portfolio-Website"
                  />
                </GridItem>
                <GridItem colSpan={[2, 2, 1]}>
                  <Project
                    imageUrl=""
                    imageAlt="Coming soon.."
                    title="Coming soon.. Next.js & Firebase project"
                    websiteLink=""
                    githubLink=""
                  />
                </GridItem>
              </SimpleGrid>
            </Section>

            <Heading size="xl" alignSelf="flex-start">
              SKILLS
            </Heading>
            <Section>
              <SimpleGrid columns={2} spacing={20}>
                <GridItem colSpan={[2, 2, 1]}>
                  <VStack align="flex-start">
                    <Text size="lg" as="u">
                      Programming
                    </Text>

                    <HStack>
                      <Text fontSize="lg">JavaScript</Text>{" "}
                      <IoLogoJavascript size="25px" />
                    </HStack>

                    <HStack>
                      <Text fontSize="lg">TypeScript</Text>
                      <SiTypescript size="25px" />
                    </HStack>

                    <HStack>
                      <Text fontSize="lg">Python</Text> <FaPython size="25px" />
                    </HStack>

                    <HStack>
                      <Text fontSize="lg">Java</Text> <FaJava size="25px" />
                    </HStack>

                    <HStack>
                      <Text fontSize="lg">C#</Text> <SiCsharp size="25px" />
                    </HStack>

                    <HStack>
                      <Text fontSize="lg">SQL</Text>
                      <AiOutlineConsoleSql size="25px" />
                    </HStack>

                    <HStack>
                      <Text fontSize="lg">HTML5 & CSS3</Text>
                      <FaHtml5 size="25px" /> <IoLogoCss3 size="25px" />
                    </HStack>
                  </VStack>
                </GridItem>

                <GridItem colSpan={[2, 2, 1]}>
                  <VStack align="flex-start">
                    <Text size="lg" as="u">
                      Technologies & Tools
                    </Text>
                    <SimpleGrid columns={2} spacing={[0, 0, 5]}>
                      <GridItem colSpan={[2, 2, 1]}>
                        <HStack>
                          <Text fontSize="lg">React / Redux</Text>
                          <FaReact size="25px" />
                        </HStack>

                        <HStack>
                          <Text fontSize="lg">Node.js / Express.js</Text>
                          <FaNodeJs size="25px" />
                        </HStack>

                        <HStack>
                          <Text fontSize="lg">Github / Git</Text>
                          <FaGithub size="25px" />
                        </HStack>

                        <HStack>
                          <Text fontSize="lg">React Native</Text>
                        </HStack>

                        <HStack>
                          <Text fontSize="lg">Next.js</Text>
                        </HStack>

                        <HStack>
                          <Text fontSize="lg">Electron</Text>
                          <SiElectron size="25px" />
                        </HStack>

                        <HStack>
                          <Text fontSize="lg">Testing Libraries</Text>
                        </HStack>
                      </GridItem>

                      <GridItem colSpan={[2, 2, 1]}>
                        <HStack>
                          <Text fontSize="lg">AWS</Text>
                          <SiAmazonaws size="25px" />
                        </HStack>

                        <HStack>
                          <Text fontSize="lg">Docker</Text>
                          <FaDocker size="25px" />
                        </HStack>

                        <HStack>
                          <Text fontSize="lg">Kubernetes</Text>
                          <SiKubernetes size="25px" />
                        </HStack>

                        <HStack>
                          <Text fontSize="lg">Mongodb</Text>
                          <SiMongodb size="25px" />
                        </HStack>

                        <HStack>
                          <Text fontSize="lg">Postgresql</Text>
                          <SiPostgresql size="25px" />
                        </HStack>

                        <HStack>
                          <Text fontSize="lg">Material UI / Chakra UI</Text>
                        </HStack>

                        <HStack>
                          <Text fontSize="lg">Bootstrap / Bulma</Text>
                        </HStack>
                      </GridItem>
                    </SimpleGrid>
                  </VStack>
                </GridItem>
              </SimpleGrid>
            </Section>

            <Heading size="xl" alignSelf="flex-start">
              EDUCATION
            </Heading>
            <Section>
              <Text>- PVCC - A.S. in Computer Science</Text>
              <Text>
                - Udemy: The Web Developer Bootcamp 2022 by Colt Steele
              </Text>
              <Text>
                - Udemy: React - The Complete Guide (incl Hooks, React Router,
                Redux) by Maximilian Schwarzmüller
              </Text>
            </Section>
          </VStack>
        </Flex>

        <Center mt={3} mb={5}>
          <HStack>
            <AiOutlineCopyrightCircle /> <Text>Yousof Algburi</Text>
          </HStack>
        </Center>
      </Container>
    </motion.article>
  )
}

export default Main
