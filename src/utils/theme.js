import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#3f8efc',
      contrastText: '#fafafa',
    },
    secondary: {
      light: '#acf370',
      main: '#79c040',
      contrastText: '#fafafa',
    },
    tertiary: {
      main: '#383838',
    },
  },
  typography: {
    fontFamily: "'ProximaNova', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    useNextVariants: true,
  },
})

export default theme
