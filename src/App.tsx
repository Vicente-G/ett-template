import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'
import * as themes from './themes'

import First from './views/First'

const tamaguiConfig = createTamagui({ ...config, themes })
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="First" component={First} />
        </Stack.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
  )
}
