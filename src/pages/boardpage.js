import * as React from 'react';
import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from './Card.js'
import Pagenation from './Pagenation.js'

const cards = [1, 2, 3, 4, 5, 6, 7, 8]; //한 페이지당 card 9개

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <main sx={{maxWidth:"1024px", minHeight:"1131px"}}>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={3} md={6}>
                <Card/>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container>
          
        </Container>
      </main>
      
    </ThemeProvider>
    
  );
}