import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Stack, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";

export default function Dashboard() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ height: "100vh" }}>
        <Stack spacing={10}>
          <Box
            className="session-1"
            sx={{
              maxHeigh: "lg",
            }}
          >
            <Grid2
              sx={{ marginTop: "50px" }}
              container
              spacing={4}
              alignItems="stretch"
            >
              <Grid2 size={7}>
                <Box>
                  <Typography
                    variant="h3"
                    wrap="true"
                    sx={{
                      fontFamily: "Roboto",
                      color: "inherit",
                      textDecoration: "none",
                      textAlign: "Left",
                      marginBottom: "55px",
                      fontFamily: "Cormorant Garamond,serif",
                    }}
                  >
                    We are a photography agency, creating memories through lens.
                  </Typography>
                </Box>
                <Box sx={{ aspectRatio: "auto", overflow: "hidden" }}>
                  <img
                    src={
                      "https://demo.athemes.com/sydney-photography/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/144/2022/12/Mask-group.jpg.webp?w=164&h=164&fit=crop&auto=format"
                    }
                    alt={"house"}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: 3,
                    }}
                  />
                </Box>
              </Grid2>
              <Grid2 size={5}>
                <Box
                  sx={{
                    aspectRatio: "auto",
                    overflow: "hidden",
                    maxHeight: "md",
                    marginBottom: "5px",
                  }}
                >
                  <img
                    src={
                      "https://demo.athemes.com/sydney-photography/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/144/2022/12/h2.jpg.webp?w=164&h=164&fit=crop&auto=format"
                    }
                    alt={"house"}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: 3,
                    }}
                  />
                </Box>
                <Box sx={{}}>
                  <Typography
                    variant="p"
                    wrap="true"
                    sx={{
                      fontFamily: "Roboto",
                      color: "inherit",
                      textDecoration: "none",
                      textAlign: "Left",

                      fontFamily: "Cormorant Garamond,serif",
                    }}
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Exercitation veniam.
                  </Typography>
                </Box>
                <Box sx={{}}>
                  <Typography
                    variant="h6"
                    wrap="true"
                    sx={{
                      fontFamily: "Roboto",
                      color: "inherit",
                      textDecoration: "none",
                      textAlign: "Left",
                      marginTop: "20px",
                      fontFamily: "Cormorant Garamond,serif",
                    }}
                  >
                    More Photo
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>
          </Box>

          <Box
            className="session-2"
            sx={{
              maxHeigh: "lg",
            }}
          >
            <Box>
              <Grid2 sx={{ marginTop: "50px" }} container spacing={2}>
                <Grid2 size={3}>
                  <Box sx={{ aspectRatio: "auto", overflow: "hidden" }}>
                    <Typography
                      variant="h4"
                      wrap="false"
                      sx={{
                        fontFamily: "Roboto",
                        color: "inherit",
                        textDecoration: "none",
                        textAlign: "Left",
                        fontFamily: "Cormorant Garamond,serif",
                      }}
                    >
                      Our Philosophy
                    </Typography>
                  </Box>
                </Grid2>
                <Grid2 size={9}>
                  <Box>
                    <hr />
                  </Box>
                </Grid2>
              </Grid2>
            </Box>
            <Box
              sx={{
                paddingTop: "40px",
                paddingBottom: "40px",
              }}
            >
              <Typography
                variant="p"
                wrap="true"
                sx={{
                  fontFamily: "Roboto",
                  color: "inherit",
                  textDecoration: "none",
                  textAlign: "Left",
                  fontSize: "17px",
                  fontFamily: "Cormorant Garamond,serif",
                }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Exercitation veniam. Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet sint. Exercitation veniam.
              </Typography>
            </Box>
            <Box>
              <Grid2 sx={{}} container spacing={4} alignItems="stretch">
                <Grid2 size={4}>
                  <Box sx={{ aspectRatio: "auto", overflow: "hidden" }}>
                    <img
                      src={
                        "https://demo.athemes.com/sydney-photography/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/144/2022/12/Rectangle-698.jpg.webp?w=164&h=164&fit=crop&auto=format"
                      }
                      alt={"house"}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 3,
                      }}
                    />
                  </Box>
                </Grid2>
                <Grid2 size={8}>
                  <Box sx={{}}>
                    <Typography
                      variant="h6"
                      wrap="true"
                      sx={{
                        fontFamily: "Roboto",
                        color: "inherit",
                        textDecoration: "none",
                        textAlign: "Right",
                        marginBottom: "25px",
                        fontFamily: "Cormorant Garamond,serif",
                      }}
                    >
                      More Photo
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      aspectRatio: "auto",
                      overflow: "hidden",
                      marginBottom: "5px",
                    }}
                  >
                    <img
                      src={
                        "https://demo.athemes.com/sydney-photography/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/144/2022/12/Rectangle-699.jpg.webp?w=164&h=164&fit=crop&auto=format"
                      }
                      alt={"house"}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 3,
                      }}
                    />
                  </Box>
                </Grid2>
              </Grid2>
            </Box>
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  );
}
