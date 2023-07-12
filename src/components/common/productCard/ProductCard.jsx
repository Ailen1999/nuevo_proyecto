import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";


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
              
                <Button size="small">Detalle</Button>
          
              <Button size="small">Comprar</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default productCard;
