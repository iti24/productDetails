import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid, TextField } from "@mui/material";
import ProductCard from "./ProductCard";
import Button from "@mui/material/Button";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch the product data from your API
  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get("http://localhost:3000/api/book");
      console.log("response", response.data);
      setProducts(response.data);
    };
    getProduct();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/book/search/searchterm",
        {
          params: { search },
        }
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error searching for products:", error);
    }
  };
  return (
    <Container>
      <TextField
        label="Search Products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <Button
        size="medium"
        variant="outlined"
        onClick={handleSearch}
        style={{ margin: "10px", color: "black" }}
      >
        Search
      </Button>
      {/* <button onClick={handleSearch}>Search</button> */}
      <Grid container spacing={2}>
        {products?.map((product) => (
          <Grid item key={product?._id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
