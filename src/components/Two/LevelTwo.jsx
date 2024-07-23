import { Button, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const LevelTwo = (props) => {
  return (
    <>
      <Image
        src="/temp/nice.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Text
        fontSize="3xl"
        fontWeight="bold"
        color="black"
        border="2px solid"
        borderColor="teal.500"
        borderRadius="md"
        p={2}
        mb={4}
        textAlign="center"
      >
        Score: {props.score}
      </Text>
      <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => props.changeToNextLevel()}
          colorScheme="teal">WISH HER</MotionButton>
    </>
  )
}

export default LevelTwo;