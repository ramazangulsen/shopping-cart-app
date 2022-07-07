import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { Drawer, LinearProgress, Grid, Typography } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Wrapperr } from "./App.styles";
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  price: number;
  image: string;
  title: string;
  amount: number;
}





const getProduct = async () =>
  await (await fetch("https://fakestoreapi.com/products/1")).json();

const App = () => {
  return <div className="App">start</div>;
};

export default App;
