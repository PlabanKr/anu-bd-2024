import { useState } from "react";
import { Box } from "@chakra-ui/react";
import LevelZero from "./components/Zero/LevelZero";
import LevelOne from "./components/One/LevelOne";
import LevelTwo from "./components/Two/LevelTwo";
import LevelThree from "./components/Three/LevelThree";


function App() {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);

  const changeToNextLevel = () => {
    setLevel(previousLevel => previousLevel < 3 ? previousLevel + 1 : previousLevel);
  }

  const scoreUp = () => {
    setScore(score => score + 1);
  }

  const renderLevel = () => {
    switch (level) {
      case 0:
        return <LevelZero changeToNextLevel={changeToNextLevel} />;
      case 1:
        return <LevelOne changeToNextLevel={changeToNextLevel} scoreUp={scoreUp} />;
      case 2:
        return <LevelTwo changeToNextLevel={changeToNextLevel} score={score} />;
      case 3:
        return <LevelThree />
      default:
        return <Box p={4} bg="red.100" borderRadius="md">Invalid Level from App.jsx</Box>;
    }
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={4}
        borderRadius="md"
      >
        {renderLevel()}

        {/* <Box>
        {level > 0 ? score : ""}
      </Box> */}
      </Box>
    </>
  );
}

export default App;
