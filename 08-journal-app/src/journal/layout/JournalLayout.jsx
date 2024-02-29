import { Box } from "@mui/material"
import { Navbar } from "../components/Navbar"

const drawerWidth = 240

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>

        <Navbar drawerWidth={ drawerWidth }/>

        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            { children }
        </Box>
    </Box>
  )
}
