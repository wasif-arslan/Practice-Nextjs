"use client";

import stlyes from "./page.module.css";
import { Box, Button, Flex, HStack} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      
    <Flex
      as="nav"
      
      justify="space-between"
      textAlign={[ 'left', 'center' ]}
      wrap="wrap"
      padding="2rem"
      color="black"
      boxShadow="md"
    >
      <Link href={"/"}>
        <Image
          src={"/panaverse80_80.png"}
          alt={"Images"}
          width={"50"}
          height={"50"}
        ></Image>
      </Link>
      <Flex
        as="nav"
        placeItems="center"
        justify="space-between"
        wrap="wrap"
        padding="0.5rem"
        color="black"
        boxShadow="md"
        gap={10}
      >
        <Link href={'/'}>Home </Link>

        <Link href="/Courses">Courses</Link>

        <Link href="/Histroy">Histroy</Link>

        <Link href="/Faculty">Faculty</Link>

        <Link href="/ContactUs">Contact Us</Link>
      </Flex>

      <Button colorScheme="red" variant="solid">
        SignUp
      </Button>
    </Flex>
    </>
  );
}