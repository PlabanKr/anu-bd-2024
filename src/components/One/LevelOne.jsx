import { useState } from "react";
import { Image, Box, Button, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);


const Img0 = () => {
  return (
    <>
      <Image
        src="/temp/1.0.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/ab0.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}
const Img1 = () => {
  return (
    <>
      <Image
        src="/temp/1.1.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/ab1.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}
const Img2 = () => {
  return (
    <>
      <Image
        src="/temp/1.2.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/ab2.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}
const Img3 = () => {
  return (
    <>
      <Image
        src="/temp/1.3.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/ab3.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}
const Img4 = () => {
  return (
    <>
      <Image
        src="/temp/1.4.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/ab4.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}
const Img5 = () => {
  return (
    <>
      <Image
        src="/temp/1.5.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/ab5.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}
const Img6 = () => {
  return (
    <>
      <Image
        src="/temp/1.6.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/ab6.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}
const Img7 = () => {
  return (
    <>
      <Image
        src="/temp/1.7.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/ab7.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}
const Img8 = () => {
  return (
    <>
      <Image
        src="/temp/1.8.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/ab8.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}
const Img9 = () => {
  return (
    <>
      <Image
        src="/temp/1.9.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/ab9.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}
const Img10 = () => {
  return (
    <>
      <Image
        src="/temp/1.10.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/ab10.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}
const Img11 = () => {
  return (
    <>
      <Image
        src="/temp/1.11.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/ab11.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}
const Img12 = () => {
  return (
    <>
      <Image
        src="/temp/1.12.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/ab12.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}
const Img13 = () => {
  return (
    <>
      <Image
        src="/temp/1.13.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/ab13.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}
const Img14 = () => {
  return (
    <>
      <Image
        src="/temp/1.14.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/ab14.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}
const Img15 = () => {
  return (
    <>
      <Image
        src="/temp/1.15.png"
        alt="Sample"
        boxSize="100%"
        objectFit="contain"
        mb={4}
      />
      <Image
        src="/temp/ab15.jpg"
        alt="Sample"
        boxSize="15%"
        objectFit="contain"
        mb={4}
      />
    </>
  )
}


const LevelOne = (props) => {
  const [img, setImg] = useState(0);

  const renderImage = () => {
    switch (img) {
      case 0:
        return <Img0 />
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
      case 9:
        return <Img9 />
      case 10:
        return <Img10 />
      case 11:
        return <Img11 />
      case 12:
        return <Img12 />
      case 13:
        return <Img13 />
      case 14:
        return <Img14 />
      case 15:
        return <Img15 />
      default:
        return <Box p={4} bg="red.100" borderRadius="md">Invalid Level from LevelOne.jsx</Box>;
    }
  }

  const nextImg = () => {
    setImg(prevImg => prevImg < 16 ? prevImg + 1 : prevImg);
  }

  return (
    <>
      {renderImage()}
      <SimpleGrid columns={2} spacing={4}>
        {img == 0 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Okayy</MotionButton>
          : <></>
        }


        {img == 1 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Cristiano Ronaldo</MotionButton>
          : <></>
        }
        {img == 1 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal"> Neymar Jr.</MotionButton>
          : <></>
        }
        {img == 1 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => { props.scoreUp(); nextImg(); }}
          colorScheme="teal">Lionel Messi</MotionButton>
          : <></>
        }
        {img == 1 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Kylian Mbappe</MotionButton>
          : <></>
        }

        {img == 2 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">PUBG Mobile</MotionButton>
          : <></>
        }
        {img == 2 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Fortnite</MotionButton>
          : <></>
        }
        {img == 2 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Free Fire</MotionButton>
          : <></>
        }
        {img == 2 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => { props.scoreUp(); nextImg(); }}
          colorScheme="teal">Call of Duty Mobile</MotionButton>
          : <></>
        }

        {img == 3 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Cooking Fever</MotionButton>
          : <></>
        }
        {img == 3 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => { props.scoreUp(); nextImg(); }}
          colorScheme="teal">Good Pizza, Great Pizza</MotionButton>
          : <></>
        }
        {img == 3 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Restaurant Story</MotionButton>
          : <></>
        }
        {img == 3 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Bakery Blitz
        </MotionButton>
          : <></>
        }

        {img == 4 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">BLACKPINK</MotionButton>
          : <></>
        }
        {img == 4 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">EXO</MotionButton>
          : <></>
        }
        {img == 4 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">TWICE</MotionButton>
          : <></>
        }
        {img == 4 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => { props.scoreUp(); nextImg(); }}
          colorScheme="teal">BTS</MotionButton>
          : <></>
        }

        {img == 5 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Cooking</MotionButton>
          : <></>
        }
        {img == 5 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => { props.scoreUp(); nextImg(); }}
          colorScheme="teal">Traveling</MotionButton>
          : <></>
        }
        {img == 5 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Reading</MotionButton>
          : <></>
        }
        {img == 5 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Painting</MotionButton>
          : <></>
        }

        {img == 6 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">DC</MotionButton>
          : <></>
        }
        {img == 6 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Star Wars</MotionButton>
          : <></>
        }
        {img == 6 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal"> Harry Potter</MotionButton>
          : <></>
        }
        {img == 6 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => { props.scoreUp(); nextImg(); }}
          colorScheme="teal">Marvel</MotionButton>
          : <></>
        }

        {img == 7 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => { props.scoreUp(); nextImg(); }}
          colorScheme="teal">South Korea</MotionButton>
          : <></>
        }
        {img == 7 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Japan</MotionButton>
          : <></>
        }
        {img == 7 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Thailand</MotionButton>
          : <></>
        }
        {img == 7 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">China</MotionButton>
          : <></>
        }


        {img == 8 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Samosas</MotionButton>
          : <></>
        }
        {img == 8 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Kachori</MotionButton>
          : <></>
        }
        {img == 8 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => { props.scoreUp(); nextImg(); }}
          colorScheme="teal">Momo</MotionButton>
          : <></>
        }
        {img == 8 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Falafel</MotionButton>
          : <></>
        }



        {img == 9 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Japanese</MotionButton>
          : <></>
        }
        {img == 9 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => { props.scoreUp(); nextImg(); }}
          colorScheme="teal">Korean</MotionButton>
          : <></>
        }
        {img == 9 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Indian</MotionButton>
          : <></>
        }
        {img == 9 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">American</MotionButton>
          : <></>
        }




        {img == 10 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Strawberry shake</MotionButton>
          : <></>
        }
        {img == 10 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Green tea</MotionButton>
          : <></>
        }
        {img == 10 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Lemonade</MotionButton>
          : <></>
        }
        {img == 10 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => { props.scoreUp(); nextImg(); }}
          colorScheme="teal">Black coffee</MotionButton>
          : <></>
        }



        {img == 11 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Pasta</MotionButton>
          : <></>
        }
        {img == 11 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => { props.scoreUp(); nextImg(); }}
          colorScheme="teal">Chili chicken and chicken fried rice</MotionButton>
          : <></>
        }
        {img == 11 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Chicken Biryani</MotionButton>
          : <></>
        }
        {img == 11 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Naan and Butter Chicken</MotionButton>
          : <></>
        }



        {img == 12 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Piano</MotionButton>
          : <></>
        }
        {img == 12 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Violin</MotionButton>
          : <></>
        }
        {img == 12 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Drums</MotionButton>
          : <></>
        }
        {img == 12 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => { props.scoreUp(); nextImg(); }}
          colorScheme="teal">Guitar</MotionButton>
          : <></>
        }



        {img == 13 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Archery</MotionButton>
          : <></>
        }
        {img == 13 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Hiking</MotionButton>
          : <></>
        }
        {img == 13 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => { props.scoreUp(); nextImg(); }}
          colorScheme="teal">Dancing</MotionButton>
          : <></>
        }
        {img == 13 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Gardening</MotionButton>
          : <></>
        }

        {img == 14 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">German</MotionButton>
          : <></>
        }
        {img == 14 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Japanese</MotionButton>
          : <></>
        }
        {img == 14 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">French</MotionButton>
          : <></>
        }
        {img == 14 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => { props.scoreUp(); nextImg(); }}
          colorScheme="teal">Korean</MotionButton>
          : <></>
        }


        {img == 15 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => { 
            props.scoreUp(); 
            nextImg();
            props.changeToNextLevel() 
          }}
          colorScheme="teal">Range Rover</MotionButton>
          : <></>
        }
        {img == 15 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => {
            props.changeToNextLevel()
          }}
          colorScheme="teal">BMW</MotionButton>
          : <></>
        }
        {img == 15 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => props.changeToNextLevel()}
          colorScheme="teal">Audi</MotionButton>
          : <></>
        }
        {img == 15 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => props.changeToNextLevel()}
          colorScheme="teal">Mercedes-Benz</MotionButton>
          : <></>
        }

        {/* {img == 2 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">PUBG Mobile</MotionButton>
          : <></>
        }
        {img == 2 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Fortnite</MotionButton>
          : <></>
        }
        {img == 2 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={nextImg}
          colorScheme="teal">Free Fire</MotionButton>
          : <></>
        }
        {img == 2 ? <MotionButton whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
          onClick={() => { props.scoreUp(); nextImg(); }}
          colorScheme="teal">Call of Duty Mobile</MotionButton>
          : <></>
        } */}
      </SimpleGrid>
      
    </>
  )
}

export default LevelOne;