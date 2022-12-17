import {
  Container,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get(`https://localhost:5001/product/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Typography>Yükleniyor</Typography>;
  }
  if (product == null) {
    return <Typography>Ürün Bulunamadı</Typography>;
  }

  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img src={product.pictureUrl} style={{ width: "%100" }}></img>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3">{product.name}</Typography>
          <Divider sx={{ mb: 6 }} />
          <Typography variant="h4" color="secondary">
            ${(product.price / 100).toFixed(2)}
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{product.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>{product.type}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brand</TableCell>
                  <TableCell>{product.brand}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Quantity in stock</TableCell>
                  <TableCell>{product.quantityInStock}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
