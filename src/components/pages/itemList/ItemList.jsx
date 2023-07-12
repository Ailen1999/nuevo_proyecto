import ProductCard from "../../common/productCard/productCard";
const ItemList = ({items}) => {
  console.log("items: ", items)
  
  return (
      <div>
        {items.map((products) => {
          return <ProductCard key={products.id} products= {products} />
          ;
        })}
      </div>
  );
};

export default ItemList;
