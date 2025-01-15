import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  NavigationContainer,
} from '@react-navigation/native'
import { TamaguiProvider } from '@tamagui/core'
import tamaguiConfig from './tamagui.config'

import First from './views/First'
import { useColorScheme } from 'react-native'

const Stack = createNativeStackNavigator()

export default function App() {
  const colorScheme = useColorScheme()

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="First" component={First} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
