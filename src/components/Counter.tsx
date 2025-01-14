import { useState } from 'react'
import { Label, Button } from 'tamagui'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Label>Count: {count}</Label>
      <Button onPress={() => setCount(count + 1)}>Increment</Button>
    </>
  )
}
