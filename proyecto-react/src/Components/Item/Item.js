export const Item = ({ name, image, description, price }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};
