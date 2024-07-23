import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Create a motion-enhanced version of the Chakra UI Box
const MotionBox = motion(Box);


const LevelThree = () => {

  const images = [
    "/temp/bal1.png",
    "/temp/bal2.png",
  ];

  return (
    <>

      <Box position="relative" height="100vh" overflow="hidden">
        <Image
          src="/temp/hbd.png"
          alt="Sample"
          boxSize="100%"
          objectFit="contain"
          mb={4}
        />
        <Box>
          PS. idk why the balloons are only on the left side :/
        </Box>
        {images.map((src, index) => (
          <MotionBox
            key={index}
            position="absolute"
            bottom="0"
            width="100px"
            height="100px"
            left={`${index * 100}px`} // Adjust this value to position the images horizontally
            zIndex={10}
            bg="white"
            borderRadius="md"
            display="flex"
            justifyContent="center"
            alignItems="center"
            initial={{ y: "100vh" }}
            animate={{ y: "-100vh" }}
            transition={{
              duration: 5,
              delay: index * 2, // Different start times for each image
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <Image src={src} alt={`Moving image ${index + 1}`} boxSize="100%" objectFit="contain" />
          </MotionBox>
        ))}
      </Box>
    </>
  );
}

export default LevelThree;