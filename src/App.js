import "./App.css";
// import ReactDOM from "react-dom/client";
import {Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./components/sidebar";
import ProfileCard from "./components/ProfileCard";
import EzClothing from "./components/card";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Abcd from './components/Mini-ProfileCard';
import { Code, Whatshot } from "@mui/icons-material";
import { pink,blue } from '@mui/material/colors';
import { useState } from "react";


const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
  },
});
function App() {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 960)
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const Frontend = [
    {
      name: "React.js",
      dec: "React is a JavaScript library for building modern applications. React is used for handling the view layer and can be used for development of both web and mobile applications. React is used for single site devlopment",
      image: "./react.jpg",
    },
    {
      name: "Material ui",
      dec: "Material UI is an open-source React component library that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.",
      image: "./MaterialUi.png",
    },
    {
      name: "JavaScript",
      dec: "JavaScript is a scripting language used to develop web pages. Developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions.",
      image: "./js.jpg",
    },
    {
      name: "HTML",
      dec: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies .",
      image: "./html.png",
    },
    {
      name: "CSS",
      dec: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript",
      image: "./css.jpg",
    },
    {
      name: "Bootstrap",
      dec: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
      image: "./boot.png",
    },
  ];
  const Backend = [
    {
      name: "Django",
      dec: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel",
      image: "./django.jpg",
    },
    {
      name: "Node.js",
      dec: "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers ",
      image: "./NODE.png",
    },
    {
      name: "MongoDB",
      dec: "MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas. As a document database, MongoDB makes it easy for developers to store structured or unstructured data.",
      image: "./mon.jpg",
    },
    {
      name: "MySql",
      dec: "A relational database stores data in separate tables rather than putting all the data in one big storeroom. The database structure is organized into physical files optimized for speed.MySQL is ideal for both small and large applications and it store only structured data.",
      image: "./sql.png",
    },
  ];
  const project = [
    {
      name: "Live Long",
      dec: "Live Long is an innovative online platform that allows patients to easily book online appointments with doctors and purchase medical products from the comfort of their homes.Tools:- django,mongodb,html,css,javascrpt and ajax",
      image: "./doc.png",
      button:"https://github.com/rahul-pandey-hub/Live-Long"
     
    },
    {
      name: "Urban-Paws",
      dec: " This project is an online platform that offers customers the ability to purchase pet products and read related blogs in one place. This project is created using Node.js, mongodb,html,css,javascrpt and ajax",
      image: "./dog.png",
      button:"https://github.com/rahul-pandey-hub/Urban-Paws"
    },
    {
      name: "Brewer Cafe & Restro",
      dec: "Welcome to Brewer Cafe - where coffee meets technology. Enjoy our curated coffee blends and order with ease on our web platform crafted with Django, SQL, JavaScript, HTML, and CSS. Your perfect cup is just a click away!",
      image: "./cafe.jpg",
      button:"https://github.com/rahul-pandey-hub/BrewHub-Cafe-Restro"
    },
    {
      name: "Variety",
      dec: "Discover top-quality salon products on our captivating web platform. From hair care to skincare, we have everything you need to look and feel your best. Our web platform crafted with Django, SQL, JavaScript, HTML, and CSS. !",
      image: "./Logo.jpeg",
      button:"https://github.com/rahul-pandey-hub/Variety"
    },];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar toggleSidebar={toggleSidebar} />
       {showSidebar && <Sidebar toggleSidebar={toggleSidebar}  />}
      
      <div style={{marginBottom:'2%'}}>
        
          <Routes>
          <Route
              path="/"
              element={<>
              <Box
                sx={{
                  marginLeft: { lg: "11%", sm: "2%", xs: "3vh" },
                  marginTop: "1%",
                }}>
              <Abcd/>
              </Box>

              <Box
                sx={{
                  marginLeft: { lg: "12%", sm: "2%", xs: "3vh" },
                  marginTop: "2%",
                }}>
                 <Typography style={{marginBottom:'2%'}} variant="h3"> <Whatshot fontSize="large" sx={{ color: pink[500] }}/> Skills </Typography>
                <Typography SX={{marginTop:'3%'}} variant="h5">Frontend </Typography>
              </Box>
              <Grid
                container
                spacing={3}
                sx={{
                  marginLeft: { lg: "12%", sm: "2%", xs: "3vh" },
                  marginTop: "1%",
                  width: { lg: "88%", sm: "100%", xs: "88%" },
                }}>
                {Frontend.map((i) => (
                  <>
                    <Grid
                      iteam
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      sx={{ marginTop: { lg: "1%", xs: "4%" } }}>
                      <EzClothing
                        name={i.name}
                        dec={i.dec}
                        image={i.image}
                      />
                    </Grid>
                  </>
                ))}
              </Grid>
            
            
              <Box
                sx={{
                  marginLeft: { lg: "12%", sm: "2%", xs: "3vh" },
                  marginTop: "2%",
                }}>
                <Typography variant="h5">Backend & DataBase</Typography>
              </Box>
              <Grid
                container
                spacing={3}
                sx={{
                  marginLeft: { lg: "12%", sm: "2%", xs: "3vh" },
                  marginTop: "1%",
                  width: { lg: "88%", sm: "100%", xs: "88%" },
                }}>
                {Backend.map((i) => (
                  <>
                    <Grid
                      iteam
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      sx={{ marginTop: { lg: "1%", xs: "4%" } }}>
                      <EzClothing
                        name={i.name}
                        dec={i.dec}
                        image={i.image}
                      />
                    </Grid>
                  </>
                ))}
              </Grid>
              <Box
                    sx={{
                      marginLeft: { lg: "12%", sm: "2%", xs: "3vh" },
                      marginTop: "2%",
                    }}>
                      <Typography style={{marginBottom:'2%'}} variant="h4"> <Code fontSize="large" sx={{ color: blue[600] }}/> PROJECTS </Typography>
                   
                  </Box>
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      marginLeft: { lg: "12%", sm: "2%", xs: "3vh" },
                      marginTop: "1%",
                      width: { lg: "88%", sm: "100%", xs: "88%" },
                    }}>
                    {project.map((i) => (
                      <>
                        <Grid
                          iteam
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          sx={{ marginTop: { lg: "1%", xs: "4%" } }}>
                          <EzClothing
                            name={i.name}
                            dec={i.dec}
                            image={i.image}
                            hight='240px'
                            button={i.button}
                            
                          />
                        </Grid>
                      </>
                    ))}
                  </Grid>
              
              </>}/>
            <Route
              path="skills"
              element={
                <>
                <ProfileCard />
                  <Box
                    sx={{
                      marginLeft: { lg: "12%", sm: "2%", xs: "3vh" },
                      marginTop: "2%",
                    }}>
                      <Typography style={{marginBottom:'2%'}} variant="h4"> <Whatshot fontSize="large" sx={{ color: pink[500] }}/> Skills </Typography>
                    <Typography variant="h5">Frontend </Typography>
                  </Box>
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      marginLeft: { lg: "12%", sm: "2%", xs: "3vh" },
                      marginTop: "1%",
                      width: { lg: "88%", sm: "100%", xs: "88%" },
                    }}>
                    {Frontend.map((i) => (
                      <>
                        <Grid
                          iteam
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          sx={{ marginTop: { lg: "1%", xs: "4%" } }}>
                          <EzClothing
                            name={i.name}
                            dec={i.dec}
                            image={i.image}
                          />
                        </Grid>
                      </>
                    ))}
                  </Grid>
                
                
                  <Box
                    sx={{
                      marginLeft: { lg: "12%", sm: "2%", xs: "3vh" },
                      marginTop: "2%",
                    }}>
                    <Typography variant="h5">Backend & DataBase</Typography>
                  </Box>
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      marginLeft: { lg: "12%", sm: "2%", xs: "3vh" },
                      marginTop: "1%",
                      width: { lg: "88%", sm: "100%", xs: "88%" },
                    }}>
                    {Backend.map((i) => (
                      <>
                        <Grid
                          iteam
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          sx={{ marginTop: { lg: "1%", xs: "4%" } }}>
                          <EzClothing
                            name={i.name}
                            dec={i.dec}
                            image={i.image}
                          />
                        </Grid>
                      </>
                    ))}
                  </Grid>
                </>
              }
            />
             <Route
              path="projects"
              element={

<>
<ProfileCard />
<Box
                    sx={{
                      marginLeft: { lg: "12%", sm: "2%", xs: "3vh" },
                      marginTop: "2%",
                    }}>
                    <Typography style={{marginBottom:'2%'}} variant="h5"> <Code fontSize="large" sx={{ color: blue[600] }}/> PROJECTS </Typography>
                  </Box>
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      marginLeft: { lg: "12%", sm: "2%", xs: "3vh" },
                      marginTop: "1%",
                      width: { lg: "88%", sm: "100%", xs: "88%" },
                    }}>
                    {project.map((i) => (
                      <>
                        <Grid
                          iteam
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          sx={{ marginTop: { lg: "1%", xs: "4%" } }}>
                          <EzClothing
                            name={i.name}
                            dec={i.dec}
                            image={i.image}
                            hight='240px'
                            button={i.button}
                            
                          />
                        </Grid>
                      </>
                    ))}
                  </Grid>
</>

              }/>
          </Routes>
       
      </div>
    </ThemeProvider>
  );
}

export default App;
