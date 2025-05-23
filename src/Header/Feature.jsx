const FeatureHeader = () => {
  return (
    <div id="Content">
      <div className="container">
        <div className="feautres">
          <div className="box">
            <div className="icon">
              <i class="fas fa-truck"></i>
            </div>
            <div className="info">
              <div className="info__box">Free Shipping</div>
              <div className="info__box">Free shipping on all your order</div>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i class="fas fa-shopping-bag"></i>
            </div>
            <div className="info">
              <div className="info__box">100% Secure Payment</div>
              <div className="info__box">We ensure your money is save</div>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i class="fas fa-box"></i>
            </div>
            <div className="info">
              <div className="info__box">Money-Back Guarantee</div>
              <div className="info__box">30 Days Money-Back Guarantee</div>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i class="fas fa-headphones"></i>
            </div>
            <div className="info">
              <div className="info__box">Customer Support 24/7</div>
              <div className="info__box">Instant access to Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHeader;
