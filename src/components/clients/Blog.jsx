import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function Blog() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ width: "700px" }}>
        <Box sx={{ bgcolor: "#cfe8fc", paddingTop: "82px" }}>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            How To Start A Design Business
          </Typography>

          <Typography
            variant="subtitle2"
            noWrap
            component="a"
            marginTop="24px"
            marginBottom="24px"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            BY VLAD
          </Typography>
        </Box>
        <Box sx={{ width: 652 }} >
          <img  
            srcSet={"https://demo.athemes.com/sydney-photography/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/144/2022/01/pexels-julia-volk-5273354.jpg.webp?w=164&h=164&fit=crop&auto=format&dpr=2 2x"}
            src={"https://demo.athemes.com/sydney-photography/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/144/2022/01/pexels-julia-volk-5273354.jpg.webp?w=164&h=164&fit=crop&auto=format"}
            alt={"house"}
            loading="lazy"
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Điều này giúp ảnh phủ hết diện tích mà không bị biến dạng
            }}
          />
        </Box>

        <Box sx={{ bgcolor: "#cfe8fc",  marginTop:'24px' }}>
          <Typography
            variant="subtitle2"
            Wrap
            sx={{
              fontFamily: "Roboto",
              color: "inherit",
              textDecoration: "none",
              textAlign: "Left",
            }}
          >
            Similique quis a libero enim quod corporis saepe quis. Perspiciatis velit quae consectetur consequatur eligendi. Omnis officiis quis culpa possimus exercitationem nesciunt commodi mollitia. Aut eum in est. In facere non. Corporis cumque sapiente deleniti placeat magnam sunt excepturi est sit.
          </Typography>
          </Box>
      </Container>
    </React.Fragment>
  );
}
