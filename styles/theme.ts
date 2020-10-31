export interface StandardColor {
  superlight: string;
  light: string;
  main: string;
  dark: string;
}

export interface ButtonColor {
  main: string;
  hover: string;
}

const blue: StandardColor = {
  superlight: '#CAF1F1',
  light: '#5EE6E9',
  main: '#10ECFE',
  dark: '#0E2A47'
};

const purple: StandardColor = {
  superlight: '#DBC2FF',
  light: '#B196FE',
  main: '#3E22BC',
  dark: '#441985'
};

const pink: StandardColor = {
  superlight: '#FFDDF4',
  light: '#F3A9DD',
  main: '#FE65D4',
  dark: '#B41A83'
};

const red: StandardColor = {
  superlight: '#FBBCC7',
  light: '#FE94AB',
  main: '#FE5981',
  dark: '#AC0B3D'
};

const purpleButton: ButtonColor = {
  main: '#623FA2',
  hover: '#936bd4'
};

const blueButton : ButtonColor = {
  main: '#00B6F1',
  hover: '#5EE6E9'
};

const lightBlueButton: ButtonColor = {
  main: '#5FE6EA',
  hover: '#98ffff'
};

const pinkButton: ButtonColor = {
  main: '#fe789a',
  hover: '#ffaacb'
};

const darkPinkButton : ButtonColor = {
  main: '#FE65D4',
  hover: '#F3A9DD'
};

export const Theme = {
  colors: {
    blue,
    purple,
    pink,
    red
  },
  buttonColors: {
    blueButton,
    lightBlueButton,
    pinkButton,
    darkPinkButton,
    purpleButton,
  },
  bgColors: {
    whblpi: 'linear-gradient(to bottom, #FFFFFF 4%, #DAFFFF 44%, #FFDFF2 93%)', // White blue pink
    whpipl: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.26) 0.19%, rgba(255, 163, 186, 0.38) 59.95%, rgba(168, 142, 215, 0.56) 100%);', // White pink purple
    whblpl: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 17.32%, rgba(0, 255, 255, 0.21) 56.34%, rgba(218, 125, 218, 0.58) 100%);' // White blue purple
  },
  headerColors: {
    plbl: 'linear-gradient(120deg, #835FBF, #835FBF, #30C5E8)', // Purple blue (e.g on competition page)
    plpi: 'linear-gradient(120deg, #623FA2 25%, #FE5982 100%)'
  }
};