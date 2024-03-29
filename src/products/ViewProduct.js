import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import configData from "../config.json";
export default function ViewProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { id } = useParams();
  
  useEffect(() => {
    loadProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadProduct = async () => {
    const result = await axios.get(`http://139.162.220.224:8080/product/${id}`);
    setProduct(result.data);
  };

  return (
    <div className="container content-container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Product Details</h2>
          <div className="card">
            <div className="card-header">
              Details of product id : {product.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name: </b>
                  {product.name}
                </li>
                <li className="list-group-item">
                  <b>Price: </b>
                  {product.price}
                </li>
                <li className="list-group-item">
                  <b>Image: </b>
                  {/* process.env.PUBLIC_URL + "/" +  */}
                  <img style={{resizeMode: 'contain',height: 100,width: 125,}} src={product.image} alt="product"/>
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/homeOld"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}