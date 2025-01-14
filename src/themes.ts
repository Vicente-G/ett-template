type Theme = {
  accentBackground: string
  accentColor: string
  background0: string
  background025: string
  background05: string
  background075: string
  color1: string
  color2: string
  color3: string
  color4: string
  color5: string
  color6: string
  color7: string
  color8: string
  color9: string
  color10: string
  color11: string
  color12: string
  color0: string
  color025: string
  color05: string
  color075: string
  background: string
  backgroundHover: string
  backgroundPress: string
  backgroundFocus: string
  borderColor: string
  borderColorHover: string
  borderColorPress: string
  borderColorFocus: string
  color: string
  colorHover: string
  colorPress: string
  colorFocus: string
  colorTransparent: string
  placeholderColor: string
  outlineColor: string
}

function t(a: [number, number][]) {
  let res: Record<string, string> = {}
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string
  }
  return res as Theme
}
const vs = [
  'hsla(126, 70%, 48%, 1)',
  'hsla(240, 20%, 99%, 0)',
  'hsla(240, 20%, 99%, 0.25)',
  'hsla(240, 20%, 99%, 0.5)',
  'hsla(240, 20%, 99%, 0.75)',
  'hsla(219, 15%, 99%, 1)',
  'hsla(219, 15%, 93%, 1)',
  'hsla(219, 15%, 88%, 1)',
  'hsla(219, 15%, 82%, 1)',
  'hsla(219, 15%, 77%, 1)',
  'hsla(219, 15%, 72%, 1)',
  'hsla(219, 15%, 66%, 1)',
  'hsla(219, 15%, 61%, 1)',
  'hsla(219, 15%, 55%, 1)',
  'hsla(219, 15%, 50%, 1)',
  'hsla(218, 15%, 14%, 1)',
  'hsla(218, 15%, 10%, 1)',
  'hsla(223, 14%, 10%, 0)',
  'hsla(223, 14%, 10%, 0.25)',
  'hsla(223, 14%, 10%, 0.5)',
  'hsla(223, 14%, 10%, 0.75)',
  'hsla(126, 70%, 57%, 1)',
  'hsla(219, 15%, 10%, 1)',
  'hsla(219, 15%, 14%, 1)',
  'hsla(219, 15%, 19%, 1)',
  'hsla(219, 15%, 23%, 1)',
  'hsla(219, 15%, 28%, 1)',
  'hsla(219, 15%, 32%, 1)',
  'hsla(219, 15%, 37%, 1)',
  'hsla(219, 15%, 41%, 1)',
  'hsla(219, 15%, 46%, 1)',
  'hsla(218, 15%, 93%, 1)',
  'hsla(218, 15%, 95%, 1)',
  'hsla(210, 15%, 95%, 0)',
  'hsla(210, 15%, 95%, 0.25)',
  'hsla(210, 15%, 95%, 0.5)',
  'hsla(210, 15%, 95%, 0.75)',
  'hsla(126, 70%, 40%, 0)',
  'hsla(126, 70%, 40%, 0.25)',
  'hsla(126, 70%, 40%, 0.5)',
  'hsla(126, 70%, 40%, 0.75)',
  'hsla(126, 70%, 40%, 1)',
  'hsla(126, 70%, 43%, 1)',
  'hsla(126, 70%, 46%, 1)',
  'hsla(126, 70%, 51%, 1)',
  'hsla(126, 70%, 54%, 1)',
  'hsla(126, 70%, 59%, 1)',
  'hsla(126, 70%, 62%, 1)',
  'hsla(126, 70%, 65%, 1)',
  'hsla(250, 50%, 95%, 1)',
  'hsla(249, 52%, 95%, 0)',
  'hsla(249, 52%, 95%, 0.25)',
  'hsla(249, 52%, 95%, 0.5)',
  'hsla(249, 52%, 95%, 0.75)',
  'hsla(126, 70%, 35%, 0)',
  'hsla(126, 70%, 35%, 0.25)',
  'hsla(126, 70%, 35%, 0.5)',
  'hsla(126, 70%, 35%, 0.75)',
  'hsla(126, 70%, 35%, 1)',
  'hsla(126, 70%, 38%, 1)',
  'hsla(126, 70%, 41%, 1)',
  'hsla(126, 70%, 49%, 1)',
  'hsla(126, 70%, 52%, 1)',
  'hsla(126, 70%, 60%, 1)',
  'hsla(250, 50%, 90%, 1)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.8)',
]

const ks = [
  'accentBackground',
  'accentColor',
  'background0',
  'background025',
  'background05',
  'background075',
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
  'color9',
  'color10',
  'color11',
  'color12',
  'color0',
  'color025',
  'color05',
  'color075',
  'background',
  'backgroundHover',
  'backgroundPress',
  'backgroundFocus',
  'borderColor',
  'borderColorHover',
  'borderColorPress',
  'borderColorFocus',
  'color',
  'colorHover',
  'colorPress',
  'colorFocus',
  'colorTransparent',
  'placeholderColor',
  'outlineColor',
]

const n1 = t([
  [0, 0],
  [1, 0],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 4],
  [6, 5],
  [7, 6],
  [8, 7],
  [9, 8],
  [10, 9],
  [11, 10],
  [12, 11],
  [13, 12],
  [14, 13],
  [15, 14],
  [16, 15],
  [17, 16],
  [18, 17],
  [19, 18],
  [20, 19],
  [21, 20],
  [22, 5],
  [23, 4],
  [24, 6],
  [25, 6],
  [26, 8],
  [27, 7],
  [28, 9],
  [29, 8],
  [30, 16],
  [31, 15],
  [32, 16],
  [33, 15],
  [34, 17],
  [35, 13],
  [36, 18],
])

export const light = n1
const n2 = t([
  [0, 21],
  [1, 21],
  [2, 17],
  [3, 18],
  [4, 19],
  [5, 20],
  [6, 22],
  [7, 23],
  [8, 24],
  [9, 25],
  [10, 26],
  [11, 27],
  [12, 28],
  [13, 29],
  [14, 30],
  [15, 14],
  [16, 31],
  [17, 32],
  [18, 33],
  [19, 34],
  [20, 35],
  [21, 36],
  [22, 22],
  [23, 23],
  [24, 20],
  [25, 20],
  [26, 25],
  [27, 26],
  [28, 24],
  [29, 25],
  [30, 32],
  [31, 31],
  [32, 32],
  [33, 31],
  [34, 33],
  [35, 30],
  [36, 34],
])

export const dark = n2
const n3 = t([
  [0, 8],
  [1, 8],
  [2, 37],
  [3, 38],
  [4, 39],
  [5, 40],
  [6, 41],
  [7, 42],
  [8, 43],
  [9, 0],
  [10, 44],
  [11, 45],
  [12, 21],
  [13, 46],
  [14, 47],
  [15, 48],
  [16, 49],
  [17, 49],
  [18, 50],
  [19, 51],
  [20, 52],
  [21, 53],
  [22, 41],
  [23, 40],
  [24, 42],
  [25, 42],
  [26, 0],
  [27, 43],
  [28, 44],
  [29, 0],
  [30, 49],
  [31, 49],
  [32, 49],
  [33, 49],
  [34, 50],
  [35, 47],
  [36, 51],
])

export const light_accent = n3
const n4 = t([
  [0, 30],
  [1, 30],
  [2, 54],
  [3, 55],
  [4, 56],
  [5, 57],
  [6, 58],
  [7, 59],
  [8, 60],
  [9, 42],
  [10, 43],
  [11, 61],
  [12, 62],
  [13, 45],
  [14, 21],
  [15, 63],
  [16, 64],
  [17, 49],
  [18, 50],
  [19, 51],
  [20, 52],
  [21, 53],
  [22, 58],
  [23, 59],
  [24, 57],
  [25, 57],
  [26, 42],
  [27, 43],
  [28, 60],
  [29, 42],
  [30, 49],
  [31, 64],
  [32, 49],
  [33, 64],
  [34, 50],
  [35, 21],
  [36, 51],
])

export const dark_accent = n4
const n5 = t([
  [30, 15],
  [31, 14],
  [32, 15],
  [33, 14],
])

export const light_alt1 = n5
const n6 = t([
  [30, 14],
  [31, 13],
  [32, 14],
  [33, 13],
])

export const light_alt2 = n6
const n7 = t([
  [22, 8],
  [23, 7],
  [24, 9],
  [25, 9],
  [26, 11],
  [27, 10],
  [29, 11],
  [28, 12],
])

export const light_active = n7
export const light_surface3 = n7
export const light_Button = n7
export const light_SliderTrackActive = n7
const n8 = t([
  [22, 6],
  [23, 5],
  [24, 7],
  [25, 7],
  [26, 9],
  [27, 8],
  [29, 9],
  [28, 10],
])

export const light_surface1 = n8
export const light_ListItem = n8
export const light_SelectTrigger = n8
export const light_Card = n8
export const light_Progress = n8
export const light_TooltipArrow = n8
export const light_SliderTrack = n8
export const light_Input = n8
export const light_TextArea = n8
const n9 = t([
  [22, 7],
  [23, 6],
  [24, 8],
  [25, 8],
  [26, 10],
  [27, 9],
  [29, 10],
  [28, 11],
])

export const light_surface2 = n9
export const light_Checkbox = n9
export const light_Switch = n9
export const light_TooltipContent = n9
export const light_RadioGroupItem = n9
const n10 = t([
  [22, 10],
  [23, 10],
  [24, 11],
  [25, 11],
  [26, 10],
  [27, 10],
  [29, 11],
  [28, 11],
])

export const light_surface4 = n10
const n11 = t([
  [30, 31],
  [31, 14],
  [32, 31],
  [33, 14],
])

export const dark_alt1 = n11
const n12 = t([
  [30, 14],
  [31, 30],
  [32, 14],
  [33, 30],
])

export const dark_alt2 = n12
const n13 = t([
  [22, 25],
  [23, 26],
  [24, 24],
  [25, 24],
  [26, 28],
  [27, 29],
  [29, 28],
  [28, 27],
])

export const dark_active = n13
export const dark_surface3 = n13
export const dark_Button = n13
export const dark_SliderTrackActive = n13
const n14 = t([
  [22, 23],
  [23, 24],
  [24, 22],
  [25, 22],
  [26, 26],
  [27, 27],
  [29, 26],
  [28, 25],
])

export const dark_surface1 = n14
export const dark_ListItem = n14
export const dark_SelectTrigger = n14
export const dark_Card = n14
export const dark_Progress = n14
export const dark_TooltipArrow = n14
export const dark_SliderTrack = n14
export const dark_Input = n14
export const dark_TextArea = n14
const n15 = t([
  [22, 24],
  [23, 25],
  [24, 23],
  [25, 23],
  [26, 27],
  [27, 28],
  [29, 27],
  [28, 26],
])

export const dark_surface2 = n15
export const dark_Checkbox = n15
export const dark_Switch = n15
export const dark_TooltipContent = n15
export const dark_RadioGroupItem = n15
const n16 = t([
  [22, 27],
  [23, 27],
  [24, 26],
  [25, 26],
  [26, 27],
  [27, 27],
  [29, 26],
  [28, 26],
])

export const dark_surface4 = n16
const n17 = t([
  [30, 49],
  [31, 48],
  [32, 49],
  [33, 48],
])

export const light_accent_alt1 = n17
const n18 = t([
  [30, 48],
  [31, 47],
  [32, 48],
  [33, 47],
])

export const light_accent_alt2 = n18
const n19 = t([
  [22, 0],
  [23, 43],
  [24, 44],
  [25, 44],
  [26, 21],
  [27, 45],
  [29, 21],
  [28, 46],
])

export const light_accent_active = n19
export const light_accent_surface3 = n19
export const light_accent_Button = n19
export const light_accent_SliderTrackActive = n19
const n20 = t([
  [22, 42],
  [23, 41],
  [24, 43],
  [25, 43],
  [26, 44],
  [27, 0],
  [29, 44],
  [28, 45],
])

export const light_accent_surface1 = n20
export const light_accent_ListItem = n20
export const light_accent_SelectTrigger = n20
export const light_accent_Card = n20
export const light_accent_Progress = n20
export const light_accent_TooltipArrow = n20
export const light_accent_SliderTrack = n20
export const light_accent_Input = n20
export const light_accent_TextArea = n20
const n21 = t([
  [22, 43],
  [23, 42],
  [24, 0],
  [25, 0],
  [26, 45],
  [27, 44],
  [29, 45],
  [28, 21],
])

export const light_accent_surface2 = n21
export const light_accent_Checkbox = n21
export const light_accent_Switch = n21
export const light_accent_TooltipContent = n21
export const light_accent_RadioGroupItem = n21
const n22 = t([
  [22, 45],
  [23, 45],
  [24, 21],
  [25, 21],
  [26, 45],
  [27, 45],
  [29, 21],
  [28, 21],
])

export const light_accent_surface4 = n22
const n23 = t([
  [30, 64],
  [31, 63],
  [32, 64],
  [33, 63],
])

export const dark_accent_alt1 = n23
const n24 = t([
  [30, 63],
  [31, 21],
  [32, 63],
  [33, 21],
])

export const dark_accent_alt2 = n24
const n25 = t([
  [22, 42],
  [23, 43],
  [24, 60],
  [25, 60],
  [26, 62],
  [27, 45],
  [29, 62],
  [28, 61],
])

export const dark_accent_active = n25
export const dark_accent_surface3 = n25
export const dark_accent_Button = n25
export const dark_accent_SliderTrackActive = n25
const n26 = t([
  [22, 59],
  [23, 60],
  [24, 58],
  [25, 58],
  [26, 43],
  [27, 61],
  [29, 43],
  [28, 42],
])

export const dark_accent_surface1 = n26
export const dark_accent_ListItem = n26
export const dark_accent_SelectTrigger = n26
export const dark_accent_Card = n26
export const dark_accent_Progress = n26
export const dark_accent_TooltipArrow = n26
export const dark_accent_SliderTrack = n26
export const dark_accent_Input = n26
export const dark_accent_TextArea = n26
const n27 = t([
  [22, 60],
  [23, 42],
  [24, 59],
  [25, 59],
  [26, 61],
  [27, 62],
  [29, 61],
  [28, 43],
])

export const dark_accent_surface2 = n27
export const dark_accent_Checkbox = n27
export const dark_accent_Switch = n27
export const dark_accent_TooltipContent = n27
export const dark_accent_RadioGroupItem = n27
const n28 = t([
  [22, 61],
  [23, 61],
  [24, 43],
  [25, 43],
  [26, 61],
  [27, 61],
  [29, 43],
  [28, 43],
])

export const dark_accent_surface4 = n28
const n29 = t([
  [30, 6],
  [31, 5],
  [32, 7],
  [33, 7],
  [22, 16],
  [23, 15],
  [24, 16],
  [25, 15],
  [26, 14],
  [27, 13],
  [29, 12],
  [28, 11],
])

export const light_SwitchThumb = n29
export const light_SliderThumb = n29
export const light_Tooltip = n29
export const light_ProgressIndicator = n29
const n30 = t([[22, 65]])

export const light_SheetOverlay = n30
export const light_DialogOverlay = n30
export const light_ModalOverlay = n30
export const light_accent_SheetOverlay = n30
export const light_accent_DialogOverlay = n30
export const light_accent_ModalOverlay = n30
const n31 = t([
  [30, 23],
  [31, 24],
  [32, 22],
  [33, 22],
  [22, 32],
  [23, 31],
  [24, 32],
  [25, 31],
  [26, 14],
  [27, 30],
  [29, 29],
  [28, 28],
])

export const dark_SwitchThumb = n31
export const dark_SliderThumb = n31
export const dark_Tooltip = n31
export const dark_ProgressIndicator = n31
const n32 = t([[22, 66]])

export const dark_SheetOverlay = n32
export const dark_DialogOverlay = n32
export const dark_ModalOverlay = n32
export const dark_accent_SheetOverlay = n32
export const dark_accent_DialogOverlay = n32
export const dark_accent_ModalOverlay = n32
const n33 = t([
  [30, 42],
  [31, 41],
  [32, 43],
  [33, 43],
  [22, 49],
  [23, 49],
  [24, 49],
  [25, 49],
  [26, 48],
  [27, 47],
  [29, 46],
  [28, 21],
])

export const light_accent_SwitchThumb = n33
export const light_accent_SliderThumb = n33
export const light_accent_Tooltip = n33
export const light_accent_ProgressIndicator = n33
const n34 = t([
  [30, 59],
  [31, 60],
  [32, 58],
  [33, 58],
  [22, 49],
  [23, 64],
  [24, 49],
  [25, 64],
  [26, 63],
  [27, 21],
  [29, 45],
  [28, 62],
])

export const dark_accent_SwitchThumb = n34
export const dark_accent_SliderThumb = n34
export const dark_accent_Tooltip = n34
export const dark_accent_ProgressIndicator = n34
