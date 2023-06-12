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
import Header from '../headfoot/header.js'
import Footer from '../headfoot/footer.js'
import {fetchSellerProductsAll, fetchProduct, fetchMyProductsAll} from '../lib/fetch_product.js'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
// const SellerProductsAll  = fetchSellerProductsAll();


export default function Boardpage({rootUrl}) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const aaa = async () => {
      const allproducts = await fetchSellerProductsAll(rootUrl);
      setProducts(allproducts);
    };

    aaa();
  }, []);

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <Header/>
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
                  price : product.amount,
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
                seller : {
                  name:"신현수",
                  rating:0
                }
              }

              const productId = product.id;

              const bookCardInfo = {
                mainInfo,
                detailInfo,
                productId
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
      <Footer/>
    </ThemeProvider>
    
  );
}