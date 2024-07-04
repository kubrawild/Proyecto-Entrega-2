import CounterContainer from "../../components/counter/CounterContainer";
import "./itemDetail.css";
const ItemDetail = ({ item, onAdd }) => {
  return (
    <>
      <div>
        <div className={"containerItemDetail"}>
          <div className={"containerImage"}>
            <img src={item.img} alt="" />
          </div>

          <div className={"containerDetail"}>
            <h2 style={{ fontFamily: "monospace" }}>
              <span style={{ fontSize: "20px" }}>Nombre:</span> {item.title}
            </h2>
            <h2 style={{ fontFamily: "monospace" }}>
              <span style={{ fontSize: "20px" }}>Descripcion:</span>{" "}
              {item.description}
            </h2>
            <h2 style={{ fontFamily: "monospace" }}>
              <span style={{ fontSize: "20px" }}>Precio:</span> ${item.price}.-
            </h2>
          </div>
        </div>
        <CounterContainer onAdd={onAdd} />
      </div>
    </>
  );
};

export default ItemDetail;
