import { createTheme } from "@mui/material/styles";

const OutlookTheme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#ffffff',
        }
    },
    typography: {
        h4: { fontSize: '1em', color: "green" }
    },
    components: {
        MuiButton: {

        }
    }

}

)

export default OutlookTheme