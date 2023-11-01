// import React from 'react';
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,

// } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   card: {
//     display: 'flex',
//     flexDirection: 'column',
//     borderRadius: 0, // Remove card border radius
//     boxShadow: 'none', // Remove card box shadow
//     '&:hover': {
//       boxShadow: '0 0 16px rgba(0, 0, 0, 0.2)', // Add box shadow on hover
//     },
//   },
//   media: {
//     paddingTop: '75%', // 4:3 aspect ratio for the product image
//   },
//   title: {
//     fontSize: '1rem',
//     fontWeight: '600',
//   },
//   description: {
//     fontSize: '0.875rem',
//     color: theme.palette.text.secondary,
//   },
//   price: {
//     fontSize: '1.125rem',
//     fontWeight: '600',
//   },
// }));

// const ProductCard = ({ product }) => {
//   const classes = useStyles();

//   return (
//     <Card className={classes.card}>
//       <CardMedia
//         className={classes.media}
//         image="https://m.media-amazon.com/images/I/61rW00o2wHL._AC_SL1500_.jpg"
//         title={product.title}
//       />
//       <CardContent>
//         <Typography className={classes.title} gutterBottom variant="body2">
//           {product?.title}
//         </Typography>
//         <Typography className={classes.description} variant="body2">
//           {product?.description}
//         </Typography>
//         <Typography className={classes.price} variant="body1">
//           ${product?.price}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductCard;
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 0, // Remove card border radius
    boxShadow: "none", // Remove card box shadow
    "&:hover": {
      boxShadow: "0 0 16px rgba(0, 0, 0, 0.2)", // Add box shadow on hover
    },
    // Change the background color or image here
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", // Example gradient background
  },
  media: {
    paddingTop: "75%", // 4:3 aspect ratio for the product image
  },
  title: {
    fontSize: "1rem",
    fontWeight: "600",
  },
  description: {
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
  },
  price: {
    fontSize: "1.125rem",
    fontWeight: "600",
  },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={product?.imageUrl}
        title={product.title}
      />
      <CardContent>
        <Typography className={classes.title} gutterBottom variant="body2">
          {product?.title}
        </Typography>
        <Typography className={classes.description} variant="body2">
          {product?.description}
        </Typography>
        <Typography className={classes.price} variant="body1">
          Price : ₹{product?.price}
        </Typography>
        <Typography className={classes.price} variant="body1">
          In Stock : {product?.stock}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
