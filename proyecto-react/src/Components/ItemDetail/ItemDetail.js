import { Item } from '../Item/Item';

export const ItemDetail = ({ name, image, description, price }) => {
  return (
    <div>
      <h2>Detalles del producto</h2>
      <Item
      name={name}
      image={image}
      description={description}
      price={price} />
    </div>
  );
};









