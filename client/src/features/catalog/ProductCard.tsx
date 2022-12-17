import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            src=""
            title={product.name}
            sx={{ backgroundColor: "secondary.main" }}
          ></Avatar>
        }
        title={product.brand + " - " + product.name}
        titleTypographyProps={{
          sx: {
            fontWeight: "bold",
            color: "primary.main",
          },
        }}
      ></CardHeader>
      <CardMedia
        component="img"
        height="140"
        image={product.pictureUrl}
        sx={{ objectFit: "contain", bgcolor:"primary.light"}}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add To Cart</Button>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
      </CardActions>
    </Card>
  );
}
