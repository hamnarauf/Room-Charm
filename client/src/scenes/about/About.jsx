import React from 'react';
import { Typography, Box, Grid, Paper, Card, CardMedia, CardContent  } from '@mui/material';


const About = () => {
  return (
    <Box sx={{ padding: '40px' }}>
    <Typography variant="h4" sx={{ marginBottom: '20px' }}>
      About Us
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image="/images/about-us-img1.jpg"
            alt="About Us Image 1"
          />
          <CardContent>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>
              Our Story
            </Typography>
            <Typography variant="body1">
              At Room Decor Ecommerce, we are passionate about helping you create a space that reflects your
              personal style and brings comfort and joy to your everyday life. Our journey started with a simple
              idea: to provide a curated collection of high-quality room decor items that inspire and elevate
              your living spaces.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '20px' }}>
              Over the years, we have carefully sourced unique and stylish products from around the world,
              collaborating with talented artisans and designers. We believe that every room has the potential
              to tell a story, and our mission is to offer you the finest selection of room decor that allows
              you to express your individuality and create a home you love.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image="/images/about-us-img2.jpg"
            alt="About Us Image 2"
          />
          <CardContent>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>
              Our Vision
            </Typography>
            <Typography variant="body1">
              Our vision is to inspire and empower individuals to transform their living spaces into havens of
              beauty, comfort, and self-expression. We believe that a well-designed room can positively impact
              your mood, productivity, and overall well-being. By offering a carefully curated collection of
              room decor items, we aim to make it easier for you to find the perfect pieces that reflect your
              style and create a space that truly feels like home.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
  );
};

export default About;
