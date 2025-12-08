export default function Clients() {
    return (
      <section className="client-section ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5">
                <h2>مشتریان ما</h2>
                <p>برندهایی که به Sina AI اعتماد کرده‌اند.</p>
              </div>
            </div>
          </div>
  
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme clients-carousel dot-indicator">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div className="item single-customer" key={i}>
                    <img
                      src={`/assets/img/customers/clients-logo-0${i}.png`}
                      alt="لوگو مشتری"
                      className="customer-logo"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  