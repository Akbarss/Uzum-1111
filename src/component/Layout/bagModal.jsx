import { Link } from "react-router-dom";
import GetGoods from "../../hooks/getGoods";

const BagModal = ({ item }) => {
  const { bagGoods } = GetGoods();

  const myProd = bagGoods && bagGoods.find((good) => +good.prod_id === +item.id);

  return (
    <>
      {item && (
        <Link to={`/product?id=${item.id}`}>
          <div key={item.id}>
            <img style={{ width: "100px", height: "10px" }} src={item.media[0]} alt="" />
            <div>
              <p>{item.title.slice(0, 40)}...</p>
              <span>
                {item.price -
                  Math.floor((item.price * item.salePercentage) / 100)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
                  " "}
                руб X {myProd && myProd.num}
              </span>
            </div>
            {/* <img className="w-4 h-fit" src={trash_icon} alt="" /> */}
          </div>
        </Link>
      )}
    </>
  );
};
export default BagModal;
