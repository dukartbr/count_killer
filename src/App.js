import React from "react";
import {
  ChakraProvider,
  Container,
  Heading,
  Box,
  Button,
  Text,
  Progress,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

function App() {
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
    <ChakraProvider>
      <Box h='100vh' bg='teal'>
        <Container py={6} textAlign='center'>
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
            <Box py={4} bg='orange'>
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
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
