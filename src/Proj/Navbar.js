import React, { createContext, useState, useEffect, useContext } from 'react';
import { Container, Button, Navbar, Nav, Badge, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create a Theme Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get saved theme from localStorage
    return localStorage.getItem('theme') === 'dark';
  });

  // Function to toggle between dark and light modes
  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // Update body class based on theme
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Navbar Component
const NavBar = () => {
  const { isDarkMode } = useContext(ThemeContext);

  // Inline styles for Navbar
  const navbarStyle = {
    backgroundColor: isDarkMode ? 'rgba(52, 58, 64, 1)' : 'rgba(0, 123, 255, 1)',
    color: 'rgba(255, 255, 255, 1)', // White text
  };

  const navLinkStyle = {
    color: 'rgba(255, 255, 255, 1)', // White text
  };

  return (
    <Navbar expand="lg" style={navbarStyle} className="mb-4">
      <Container>
        <Navbar.Brand href="/home"><Badge pill bg='success'>MN Proj</Badge></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" style={navLinkStyle}>Home</Nav.Link>
            <Nav.Link href="/todo" style={navLinkStyle}>Todo</Nav.Link>
            <Nav.Link href="/passgene" style={navLinkStyle}>Pass Generator</Nav.Link>
            <Nav.Link href="/contact" style={navLinkStyle}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Toggle Button Component
const ToggleButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ padding: '20px', textAlign: 'end' }}>
      <p style={{ color: isDarkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)' }}>
        The mode is {isDarkMode ? 'Dark' : 'Light'}
      </p>
      <Button
        onClick={toggleTheme}
        style={{
          padding: '10px',
          fontSize: '16px',
          backgroundColor: isDarkMode ? 'rgba(51, 51, 51, 1)' : 'rgba(0, 123, 255, 1)',
          color: 'rgba(255, 255, 255, 1)'
        }}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </Button>
    </div>
  );
};

// Main App Component
const App = () => {
  // Renamed variable for CSS styles
  const myStyles = `
    .light-mode {
      background-color: rgba(255, 255, 255, 1);
      color: rgba(0, 0, 0, 1);
    }

    .dark-mode {
      background-color: rgba(18, 18, 18, 1);
      color: rgba(255, 255, 255, 1);
    }
    
    .dark-mode button {
      background-color: rgba(51, 51, 51, 1);
      color: rgba(255, 255, 255, 1);
    }

    .light-mode button {
      background-color: rgba(0, 123, 255, 1);
      color: rgba(255, 255, 255, 1);
    }
    
    /* Navbar hover effects */
    .bg-dark .nav-link:hover,
    .bg-primary .nav-link:hover {
      background-color: rgba(0, 86, 179, 1) !important;
      color: rgba(255, 255, 255, 1) !important;
    }
  `;

  // Add global styles to document
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = myStyles;
    document.head.appendChild(styleSheet);

    // Cleanup function to remove the styles
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []); // No dependencies needed

  return (
    <ThemeProvider>
      <NavBar />
      <Container className="mt-4">
        <ToggleButton />
      </Container>
    </ThemeProvider>
  );
};

export default App;
