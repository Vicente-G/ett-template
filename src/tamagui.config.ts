import { createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'
import * as themes from './themes'

const custom_config = createTamagui({
  ...config,
  themes,
})

export default custom_config
