const LoadingMessage = () => {
  return (
    <>
      <div className="d-flex flex-column flex-grow-1 justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="spinner-border" role="status"></div>
              <h2 className="tittleProductList">Cargandoo...</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingMessage;
