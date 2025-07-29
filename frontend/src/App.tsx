
import React from 'react'
import { Button, Heading } from '@chakra-ui/react'
import { useColorMode } from './components/ui/color-mode'

function App() {
  // const [count, setCount] = useState(0)
  const { toggleColorMode } = useColorMode()
  return (
    <>
      
      <Heading as="h1" size="2xl" mb={4}>Yi YUVA MEC</Heading>
      <Button onClick={toggleColorMode} mb={4}>
        Toggle Color Mode
      </Button>
    </>
  )
}

export default App
