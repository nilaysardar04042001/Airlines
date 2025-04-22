import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ThemeProvider,
  createTheme,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Switch,
  Box,
  Container,
  Grid,
  TextField,
  Card,
  CardContent,
} from '@mui/material';

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        {/* Sticky Navigation Bar */}
        <AppBar position="sticky">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <img src="assets/logo.png" alt="AirlinePro" style={{ height: 40 }} />
              <Typography variant="h6" sx={{ ml: 1 }}>AirlinePro</Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button color="inherit" href="#home">Home</Button>
              <Button color="inherit" href="#about">About</Button>
              <Button color="inherit" href="#services">Services</Button>
              <Button color="inherit" href="#booking">Booking</Button>
              <Button color="inherit" href="#register">Register</Button>
              <Button color="inherit" href="#login">Login</Button>
            </Box>
            <Switch checked={darkMode} onChange={handleThemeToggle} />
          </Toolbar>
        </AppBar>

        {/* Header Section */}
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 10, textAlign: 'center' }}>
          <Container>
            <Typography variant="h2">Fly with AirlinePro</Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
              Book your next flight with ease and comfort.
            </Typography>
            <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
              Book Now
            </Button>
          </Container>
        </Box>

        {/* Main Section */}
        <Container sx={{ py: 5 }}>
          <Typography variant="h4" gutterBottom>Flight Search</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField fullWidth label="Origin" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField fullWidth label="Destination" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField fullWidth label="Date" type="date" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button fullWidth variant="contained" color="primary">
                Search Flights
              </Button>
            </Grid>
          </Grid>

          <Typography variant="h4" sx={{ mt: 5 }} gutterBottom>
            Featured Destinations
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">New York</Typography>
                  <Typography>Starting at $199</Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Add more cards */}
          </Grid>
        </Container>

        {/* Footer Section */}
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 5 }}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6">Contact Us</Typography>
                <Typography>Email: support@airlinepro.com</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6">Quick Links</Typography>
                <Button color="inherit" href="#home">Home</Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6">Follow Us</Typography>
                <Button color="inherit">Twitter</Button>
              </Grid>
            </Grid>
            <Typography sx={{ mt: 3, textAlign: 'center' }}>
              © 2025 AirlinePro. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));