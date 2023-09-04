import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import Products from '../Products/Products.json';

export const ItemDetailContainer = () => {
  const { category, id } = useParams();

  // Lógica para obtener los detalles del producto según la categoría y el ID
  let product;
  switch (category) {

    case 'MensClothes':
      product = Products.mensClothes.find((p) => p.id === parseInt(id));
      break;
    case 'WomensClothes':
      product = Products.womensClothes.find((p) => p.id === parseInt(id));
      break;
    case 'Tech':
      product = Products.tech.find((p) => p.id === parseInt(id));
      break;
    default:
      product = null;
  }

  if (!product) {
    // Si no se encuentra el producto, puedes mostrar un mensaje de producto no encontrado
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div>
      <ItemDetail
        id = {product.id}
        name={product.name}
        image={product.image}
        description={product.description}
        price={product.price}
      />
    </div>
  );
};



