"use client";
import {
  Box,
  Text,
  Image,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";

const Navigation = () => {
  const navBgColor = useColorModeValue("white", "gray.800");

  return (
    <Box>
      <Flex justifyContent="center" py={3} margin={"auto"} gap={10}>
        <Card maxW="sm" mt={-10}>
          <CardBody>
            <Image
              src={"/ai.jpg"}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3" textAlign="center">
              <Heading size="md">
                Artificial Intelligence (AI) and Deep Learning Specialization
              </Heading>
              <Text>
                The AI and Deep Learning specialization focuses on building and
                deploying intelligent APIs using OpenAI models and building
                custom Deep Learning Tensorflow models.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent="center">
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="red">
                Apply Now
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="sm" mt={-10}>
          <CardBody>
            <Image
              src={"/clo.jpg"}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3" textAlign="center">
              <Heading size="md">Cloud-Native Computing Specialization</Heading>
              <Text>
                The Cloud-Native Computing Specialization focuses on Containers,
                Kubernetes, and CDK for Kubernetes.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent="center">
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="red">
                Apply Now
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="sm" mt={-10}>
          <CardBody>
            <Image
              src={"/iot.jfif"}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3" textAlign="center">
              <Heading size="md">
                Ambient Computing and IoT Specialization
              </Heading>
              <Text>
                The Ambient Computing and IoT Specialization focuses on building
                Smart Homes, Offices, Factories, and Cities using Voice
                computing, Matter and Embedded Devices.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent="center">
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="red">
                Apply Now
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="sm" mt={-10}>
          <CardBody>
            <Image
              src={"/web.jpg"}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3" textAlign="center">
              <Heading size="md">
                Web 3.0 (Blockchain) and Metaverse Specialization
              </Heading>
              <Text>
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0 and Metaverse experiences for the next
                generation of the internet by specializing in building worlds
                that merge the best of cutting-edge decentralized distributed
                blockchains with 3D metaverse client experiences.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent="center">
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="red">
                Apply Now
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Flex>
    </Box>
  );
};

export default Navigation;
