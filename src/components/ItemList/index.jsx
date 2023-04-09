import Item from "../Item/index";

const ItemList = ({ items }) => {
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div className="col-md-6 col-lg-4 ">
            <Item key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
