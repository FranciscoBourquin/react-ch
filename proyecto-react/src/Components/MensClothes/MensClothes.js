import { Link } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import { Item } from '../Item/Item';
import { mensClothes } from '../Products/Products';
import { Button } from '../Button/Button';

export const MensClothes = () => {
  return (
    <ItemList>
      {mensClothes.map((item) => (
        <div key={item.id}>
          <Item name={item.name} image={item.image} />
          <Link to={`/MensClothes/${item.id}`}>
            <Button texto="Ver detalles" />
          </Link>
        </div>
      ))}
    </ItemList>
  );
};



