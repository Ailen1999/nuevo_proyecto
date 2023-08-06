import ProductCard from "../../common/productCard/productCard";
const ItemList = ({ items }) => {
 

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          margin: "30px",
          fontSize: "2.6rem",
          padding: "10px",
          fontWeight: "400",
          letterSpacing: "7px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap:"40px"
          }}
        >
          {items.map((products) => {
            return <ProductCard key={products.id} products={products} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
