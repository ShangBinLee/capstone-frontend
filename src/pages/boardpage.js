// import * as React from 'react';
import { useEffect, useState } from 'react';
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
import BookCard from '../components/BookCard.js';
import axios from 'axios';
import {useCookies} from 'react-cookie';
import DetailInfo from '../components/DetailInfo.js';

// const cards = [1, 2, 3, 4, 5, 6, 7, 8];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


export default function Boardpage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get('http://203.247.40.158:8080/api/saleproduct/find/all', {"Content-Type": 'application/json'});
      setProducts(result.data.data);
    };
  
    aaa();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8}} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {products.map((product) => {
              const mainInfo = {
                infoText : {
                  title : product.title,
                  author : product.studentId,
                  price : 15000,
                  date : product.create_date
                },
                img : {
                  width: 115,
                  height: 168,
                  src : product.imgUrl
                }
              }
              const detailInfo = {
                department : "",
                lecture : "",
                professor : "",
                seller : "신현수"
              }

              const bookCardInfo = {
                mainInfo,
                detailInfo
              }
              return (
              <Grid item key={product.id} xs={12} sm={3} md={6}>
                <BookCard bookCardInfo={bookCardInfo}/>
              </Grid>);
            })
              
            }
          </Grid>
        </Container>
      </main>
      
    </ThemeProvider>
    
  );
}