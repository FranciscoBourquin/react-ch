import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { mensClothes, womensClothes, tech } from '../Products/Products';

export const ItemDetailContainer = () => {
  const { category, id } = useParams();

  // Lógica para obtener los detalles del producto según la categoría y el ID
  let product;
  switch (category) {

    case 'MensClothes':
      product = mensClothes.find((p) => p.id === parseInt(id));
      break;
    case 'WomensClothes':
      product = womensClothes.find((p) => p.id === parseInt(id));
      break;
    case 'Tech':
      product = tech.find((p) => p.id === parseInt(id));
      break;
    default:
      product = null;
  }
    console.log(product);
  if (!product) {
    // Si no se encuentra el producto, puedes mostrar un mensaje de producto no encontrado
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div>
      <ItemDetail
        name={product.name}
        image={product.image}
        description={product.description}
        price={product.price}
      />
    </div>
  );
};



