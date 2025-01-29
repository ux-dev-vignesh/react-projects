import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import OutlookTheme from "./themes/outlookTheme";
import Typography from '@mui/material/Typography'

const App = () => {
  return (

    <ThemeProvider theme={OutlookTheme}>
      <CssBaseline />
      <Typography variant="h4">App</Typography>
    </ThemeProvider>

  )
}

export default App;
