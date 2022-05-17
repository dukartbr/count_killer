import React from "react";
import {
  ChakraProvider,
  Container,
  Heading,
  Box,
  Button,
  Text,
  Flex,
  Image,
  Progress,
  Spacer,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

function App() {
  const [mode, setMode] = React.useState("delay");

  return (
    <ChakraProvider>
      <Box h='100vh' bg='gray.700'>
        <Container py={6} textAlign='center'>
          <Flex
            direction='row'
            border='2px solid'
            borderColor='blue.400'
            borderRadius={16}
            py={4}
            px={16}
          >
            <Button onClick={() => setMode("delay")}>Delay</Button>
            <Spacer />
            <Button onClick={() => setMode("color")}>Color</Button>
          </Flex>
          {mode === "delay" && <DelayMode />}
          {mode === "color" && <ColorMode />}
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;

function DelayMode() {
  const [limit, setLimit] = React.useState(0);
  const [current, setCurrent] = React.useState(0);
  const [delay, setDelay] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      if (current < limit) {
        setCurrent(() => current + 1);
      }
    }, delay);
  }, [limit, current, delay]);
  return (
    <Box>
      <Box border='2px solid tan' borderRadius={16} p={4} my={6}>
        <Heading color='tan'>Count Delay</Heading>
        <Text color='white' fontWeight='bold' my={5}>
          Current: {current}
        </Text>
        <Text color='white' fontWeight='bold' my={5}>
          Limit: {limit}
        </Text>
        <Box my={4}>
          <Progress value={current / 10} />
        </Box>
        <Button
          onClick={() => {
            setCurrent(0);
            setLimit(Math.round(Math.random() * 1000));
          }}
        >
          Start
        </Button>
      </Box>
      <Box border='2px solid tan' borderRadius={16} p={4} my={6}>
        <Text color='white' fontWeight='bold' my={5}>
          Delay: {delay}ms
        </Text>
        <Slider
          aria-label='slider-ex-1'
          defaultValue={0}
          onChange={(val) => {
            setDelay(val);
          }}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      <Box>
        <Text color='white' fontWeight='bold'>
          State
        </Text>
        <Box py={4} bg='orange.400' borderRadius={16} textAlign='left' px={5}>
          <pre>
            {JSON.stringify(
              {
                limit,
                current,
                delay,
              },
              null,
              2
            )}
          </pre>
        </Box>
      </Box>
    </Box>
  );
}

function ColorMode() {
  const [opacity, setOpacity] = React.useState(100);
  const [red, setRed] = React.useState(0);
  const [blue, setBlue] = React.useState(0);
  const [yellow, setYellow] = React.useState(0);

  console.log("colors :>> ", {
    opacity,
    red,
    blue,
    yellow,
  });

  return (
    <Box>
      <Heading mt={8} color='white'>
        Color Mode
      </Heading>
      <Container centerContent py={8} maxW='2xl'>
        <Box>
          <Box
            h='500px'
            w='500px'
            backgroundColor='red'
            position='absolute'
            opacity={`${red}%`}
          ></Box>
          <Box
            h='500px'
            w='500px'
            backgroundColor='blue'
            position='absolute'
            opacity={`${blue}%`}
          ></Box>
          <Box
            h='500px'
            w='500px'
            backgroundColor='yellow'
            position='absolute'
            opacity={`${yellow}%`}
          ></Box>
          <Box opacity={`${opacity}%`}>
            <Image
              backgroundImage='https://media.istockphoto.com/photos/white-lipped-frog-standing-in-the-branch-picture-id1215976010?k=20&m=1215976010&s=612x612&w=0&h=y297fYiveWpiCFDNWIWaOfFUwuOtPV1Ajp8rfrnnFTo='
              h='500px'
              w='500px'
            />
          </Box>
        </Box>
        <Box
          border='2px solid'
          borderColor='blue.400'
          borderRadius={16}
          bg='gray.700'
          py={4}
          px={4}
          my={5}
          w='600px'
        >
          <Heading color='white'>Image Opacity</Heading>
          <Text color='white' fontWeight='bold'>
            Opacity: {opacity}
          </Text>
          <Slider
            aria-label='slider-ex-1'
            defaultValue={100}
            onChange={(val) => {
              console.log(val);
              setOpacity(val);
            }}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>

        <Box
          border='2px solid'
          borderColor='blue.400'
          borderRadius={16}
          bg='gray.700'
          py={4}
          px={4}
          my={5}
          w='600px'
        >
          <Heading color='white'>Color Layers</Heading>
          <Box mt={6}>
            <Text color='red.400' fontWeight='bold'>
              Red: {red}%
            </Text>
            <Slider
              aria-label='slider-ex-1'
              defaultValue={red}
              onChange={(val) => {
                setRed(val);
              }}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <Box>
            <Text color='blue.400' fontWeight='bold'>
              Blue: {blue}%
            </Text>
            <Slider
              aria-label='slider-ex-1'
              defaultValue={blue}
              onChange={(val) => {
                setBlue(val);
              }}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <Box>
            <Text color='yellow.400' fontWeight='bold'>
              Yellow: {yellow}%
            </Text>
            <Slider
              aria-label='slider-ex-1'
              defaultValue={yellow}
              onChange={(val) => {
                setYellow(val);
              }}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
