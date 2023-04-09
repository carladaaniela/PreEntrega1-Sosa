import { useCartContext } from "../../context";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { productsAdded, totalQuantity, totalPrice, deleteProduct, emptyCart } =
    useCartContext();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailRepeated, setEmailRepeated] = useState("");
  const [isEmailRepeated, setEmailValidator] = useState(false);

  const handleEmailValidator = () => {
    try {
      if (email.toLowerCase() !== emailRepeated.toLocaleLowerCase()) {
        setEmailValidator(false);
      } else {
        setEmailValidator(true);
      }
    } catch (error) {
      setEmailValidator(false);
      alert(error.message);
    }
  };

  useEffect(() => {
    handleEmailValidator();
  }, [email, emailRepeated]);
  return (
    <>
      <div className="container-fluid">
        <h1 className="tittleProductList">Carrito</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {productsAdded.length > 0 ? (
                <>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Precio</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {productsAdded.map((data) => {
                        console.log(data);
                        return (
                          <tr key={data.id}>
                            <td>{data.selectedQuantity}</td>
                            <td>{data.title}</td>
                            <td>{data.category}</td>
                            <td>${data.price * data.selectedQuantity}</td>
                            <td className="text-end">
                              <button
                                onClick={() => deleteProduct(data.id)}
                                className="link-danger"
                              >
                                Eliminar producto
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="text-end my-1">
                    Cantidad total de productos elegidos: {totalQuantity()}
                  </div>
                  <div className="text-end  my-1">Total: $ {totalPrice()}</div>
                  <div className="text-end">
                    <button
                      type="button"
                      onClick={emptyCart}
                      className="btn btn-danger"
                    >
                      Vaciar carrito
                    </button>
                  </div>

                  <h1 className="tittleProductList">Datos personales</h1>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <form>
                          <div className="mb-3">
                            <label for="name" className="col-form-label">
                              Nombre completo:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </form>
                      </div>
                      <div className="col-md-6">
                        <form>
                          <div className="mb-3">
                            <label for="phone" className="col-form-label">
                              Telefono:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                        </form>
                      </div>
                      <div className="col-md-6">
                        <form>
                          <div className="mb-3">
                            <label for="email" className="col-form-label">
                              Email:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </form>
                      </div>
                      <div className="col-md-6">
                        <form>
                          <div className="mb-3">
                            <label for="repeatEmail" className="col-form-label">
                              Repetir email:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="repeatEmail"
                              value={emailRepeated}
                              onChange={(e) => setEmailRepeated(e.target.value)}
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                    {!isEmailRepeated && (
                      <div className="row">
                        <div className="col-md-12">
                          <div className="alert alert-danger" role="alert">
                            Los mails ingresados no coinciden
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="text-end">
                          <button
                            type="button"
                            onClick={emptyCart}
                            className={`btn ${
                              name.length && phone.length > 0 && isEmailRepeated
                                ? "btn-primary"
                                : "btn-secondary"
                            }`}
                          >
                            Completar compra
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <h2 className="tittleProductList">
                    No tenes agregado ningun producto, pero puedes visitar
                    nuestro catalogo de productos
                  </h2>
                  <Link to={"/"}>
                    <button type="button" className="btn btn-primary">
                      Productos
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
