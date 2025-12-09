export default function Hero() {
    return (
      <section
        className="ptb-100 bg-image overflow-hidden"
        image-overlay="10"
      >
        <div
          className="hero-bottom-shape-two"
          style={{
            background:
              "url('/assets/img/hero-bottom-shape-2.svg') no-repeat bottom center",
          }}
        ></div>
  
        <div className="container text-center">
          <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
            <div className="col-md-12 col-lg-6">
              <div className="hero-slider-content text-white pt-5">
                <h1 className="text-white">
                  Sina AI — دستیار هوشمند کسب‌وکار شما
                </h1>
                <p className="lead">
                  با سینا در چند دقیقه چت‌بات و دستیارهای سفارشی بسازید، به
                  داده‌های خودتان وصل کنید و تجربه مشتریان را متحول کنید.
                </p>
  
                <div className="action-btns mt-3">
                  <a
                    href="/register"
                    className="btn btn-brand-03 btn-rounded me-3"
                  >
                    شروع رایگان <i className="fas fa-cloud-download-alt ps-2"></i>
                  </a>
  
                  <a
                    href="/demo"
                    className="btn btn-white btn-circle btn-icon"
                  >
                    <i className="fas fa-play"></i>
                  </a>
                  <span className="ps-2">دموی زنده</span>
                </div>
  
                <div className="hero-counter mt-4">
                  <div className="row justify-content-center text-center">
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="counter-item d-flex align-items-center justify-content-center py-3">
                        <div className="single-counter-item text-center">
                          <span className="h4 count-number text-white d-block">61,172</span>
                          <h6 className="text-white mb-0">نصب‌ها</h6>
                        </div>
                        <span className="color-6 ms-2 p-2 rounded-circle">
                          <i className="fas fa-arrow-up icon-sm"></i>
                        </span>
                      </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="counter-item d-flex align-items-center justify-content-center py-3">
                        <div className="single-counter-item text-center">
                          <span className="h4 count-number text-white d-block">143,870</span>
                          <h6 className="text-white mb-0">گفتگوها</h6>
                        </div>
                        <span className="color-6 ms-2 p-2 rounded-circle">
                          <i className="fas fa-arrow-up icon-sm"></i>
                        </span>
                      </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="counter-item d-flex align-items-center justify-content-center py-3">
                        <div className="single-counter-item text-center">
                          <span className="h4 count-number text-white d-block">31,191</span>
                          <h6 className="text-white mb-0">کاربران فعال</h6>
                        </div>
                        <span className="color-6 ms-2 p-2 rounded-circle">
                          <i className="fas fa-arrow-up icon-sm"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-md-6 col-sm-6 col-lg-5 d-flex justify-content-center">
              <div className="img-wrap text-center">
                <img
                  src="/assets/img/app-mobile-image.png"
                  alt="تصویر اپ"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }  