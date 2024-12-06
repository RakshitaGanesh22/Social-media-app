import './App.css';
import  MainPage from "./pages/main.jsx";
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, Arial, sans-serif',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="App">
      <MainPage/>
    </div>
    </ThemeProvider>
  );
}

export default App;
