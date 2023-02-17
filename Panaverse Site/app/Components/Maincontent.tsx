"use client";

import { Button, extendTheme } from "@chakra-ui/react";
import { Box, Text, Heading, useColorModeValue, Image } from "@chakra-ui/react";

export default function MainContent() {
  const textColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box mt={200}  height={"500"}   borderColor={borderColor} borderRadius="lg" p={8} textAlign={[ 'left', 'center' ]}>
      <Heading as="h1" color={"#E53E3E"} size="3xl" mb={6} >
        Certified Web 3.0 and Metaverse Developer
      </Heading>
      <Text color={"#4FD1C5"} fontSize="2xl" mb={4}>
        Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
      </Text>
      <Button mt={5} colorScheme='red' size='lg'> Apply Now</Button>
    </Box>
  );
}
