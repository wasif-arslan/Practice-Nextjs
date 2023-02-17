"use client"
import { Box, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
  const footerBgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box bg={footerBgColor} p={4} textAlign="center">
      <p>&copy; 2023 Metaverse Company. All rights reserved.</p>
    </Box>
  );
};

;
