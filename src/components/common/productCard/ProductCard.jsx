import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";



const productCard = ({ products }) => {
  return (
    <div className="cards">
      <div>
        <div>
          <Card>
            <CardMedia
              component="img"
              alt=""
              height="140"
              image={products.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {products.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {products.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/ItemDetail/${products.id}`}>
                <Button size="small">Detalle</Button>
              </Link>

              {/* <Button size="small">Comprar</Button> */}
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default productCard;
