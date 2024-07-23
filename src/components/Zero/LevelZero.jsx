import { useState } from "react";
import { Image, Button, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);


const Img1 = () => {
  return (
    <>
      <Image
        src="/temp/1.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
        loading="lazy"
      />
      <Image
        src="/temp/a1.jpg"
        alt="Sample"
        boxSize="40%"
        objectFit="contain"
        mb={4}
        loading="lazy"
      />
    </>
  )
}
const Img2 = () => {
  return (
    <>
      <Image
        src="/temp/2.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
        loading="lazy"
      />
      <Image
        src="/temp/a2.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
        loading="lazy"
      />
    </>
  )
}
const Img3 = () => {
  return (
    <>
      <Image
        src="/temp/3.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
        loading="lazy"
      />
      <Image
        src="/temp/a3.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
        loading="lazy"
      />
    </>
  )
}
const Img4 = () => {
  return (
    <>
      <Image
        src="/temp/4.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
        loading="lazy"
      />
      <Image
        src="/temp/a4.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
        loading="lazy"
      />
    </>
  )
}
const Img5 = () => {
  return (
    <>
      <Image
        src="/temp/5.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
        loading="lazy"
      />
      <Image
        src="/temp/a5.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
        loading="lazy"
      />
    </>
  )
}
const Img6 = () => {
  return (
    <>
      <Image
        src="/temp/6.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
        loading="lazy"
      />
      <Image
        src="/temp/a6.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
        loading="lazy"
      />
    </>
  )
}
const Img7 = () => {
  return (
    <>
      <Image
        src="/temp/7.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
        loading="lazy"
      />
      <Image
        src="/temp/a7.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
        loading="lazy"
      />
    </>
  )
}
const Img8 = () => {
  return (
    <>
      <Image
        src="/temp/8.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/a8.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}


const LevelZero = (props) => {
  const [img, setImg] = useState(1);

  const renderImage = () => {
    switch (img) {
      case 1:
        return <Img1 />
      case 2:
        return <Img2 />
      case 3:
        return <Img3 />
      case 4:
        return <Img4 />
      case 5:
        return <Img5 />
      case 6:
        return <Img6 />
      case 7:
        return <Img7 />
      case 8:
        return <Img8 />
      default:
        return <p>Invalid</p>;
    }
  }

  const nextImg = () => {
    setImg(prevImg => prevImg < 9 ? prevImg + 1 : prevImg);
  }

  return (
    <>
      {renderImage()}
      <SimpleGrid columns={2} spacing={4}>
        {img == 1 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Yeah</MotionButton>
          : <></>
        }
        {img == 1 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Obviously</MotionButton>
          : <></>
        }

        {img == 2 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">OH!</MotionButton>
          : <></>
        }
        {img == 2 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">I gotta wish her!</MotionButton>
          : <></>
        }

        {img == 3 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">What?</MotionButton>
          : <></>
        }
        {img == 3 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">...</MotionButton>
          : <></>
        }

        {img == 4 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Oh My!!</MotionButton>
          : <></>
        }
        {img == 4 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">sad</MotionButton>
          : <></>
        }

        {img == 5 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Can&apos;t you buy another cake?</MotionButton>
          : <></>
        }
        {img == 5 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Okay</MotionButton>
          : <></>
        }

        {img == 6 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Aye Captain!</MotionButton>
          : <></>
        }
        {img == 6 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Okay</MotionButton>
          : <></>
        }

        {img == 7 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Sure</MotionButton>
          : <></>
        }
        {img == 7 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Heh! A game would stop her! How?</MotionButton>
          : <></>
        }

        {img == 8 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => props.changeToNextLevel()}
          colorScheme="teal">Let&apos;s Give It a Try!</MotionButton>
          : <></>
        }
        {img == 8 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
        onClick={() => props.changeToNextLevel()}
          colorScheme="teal">On My Way</MotionButton>
          : <></>
        }
      </SimpleGrid>
    </>
  )
}

export default LevelZero;