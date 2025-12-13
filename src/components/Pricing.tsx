export default function Pricing() {
    return (
      <section id="pricing" className="pricing-section ptb-100 gray-light-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-8">
              <div className="section-heading text-center mb-4">
                <h2>پلن‌های قیمت‌گذاری</h2>
                <p>برای هر اندازه تیم یک پلن داریم.</p>
              </div>
            </div>
          </div>
  
          <div className="row align-items-center justify-content-md-center justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="text-center bg-white single-pricing-pack mt-4">
                <div className="price-img pt-4">
                  <img
                    src="/assets/img/priching-img-1.png"
                    alt="پلن استاندارد"
                    width="120"
                    className="img-fluid"
                  />
                </div>
                <div className="py-4 border-0 pricing-header">
                  <div className="price text-center mb-0 color-secondary">
                    ۱۹ تومان / ماه
                  </div>
                </div>
                <div className="price-name">
                  <h5 className="mb-0">استاندارد</h5>
                </div>
                <div className="pricing-content">
                  <ul className="list-unstyled mb-4 pricing-feature-list">
                    <li>ساخت ۱ بات</li>
                    <li>دسترسی محدود به دانش</li>
                    <li>پشتیبانی ایمیلی</li>
                  </ul>
                  <a href="/register" className="btn btn-outline-brand-02 btn-rounded mb-3">
                    شروع رایگان
                  </a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="popular-price bg-white text-center single-pricing-pack mt-4">
                <div className="price-img pt-4">
                  <img
                    src="/assets/img/priching-img-2.png"
                    alt="پلن حرفه‌ای"
                    width="120"
                    className="img-fluid"
                  />
                </div>
                <div className="py-4 border-0 pricing-header">
                  <div className="price text-center mb-0 color-secondary">
                    ۴۹ تومان / ماه
                  </div>
                </div>
                <div className="price-name">
                  <h5 className="mb-0">حرفه‌ای</h5>
                </div>
                <div className="pricing-content">
                  <ul className="list-unstyled mb-4 pricing-feature-list">
                    <li>ساخت ۵ بات</li>
                    <li>دسترسی کامل به دانش</li>
                    <li>پشتیبانی اولویت‌دار</li>
                  </ul>
                  <a href="/register" className="btn btn-brand-02 btn-rounded mb-3">
                    انتخاب پلن
                  </a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="text-center bg-white single-pricing-pack mt-4">
                <div className="price-img pt-4">
                  <img
                    src="/assets/img/priching-img-3.png"
                    alt="پلن سازمانی"
                    width="120"
                    className="img-fluid"
                  />
                </div>
                <div className="py-4 border-0 pricing-header">
                  <div className="price text-center mb-0 color-secondary">
                    تماس بگیرید
                  </div>
                </div>
                <div className="price-name">
                  <h5 className="mb-0">سازمانی</h5>
                </div>
                <div className="pricing-content">
                  <ul className="list-unstyled mb-4 pricing-feature-list">
                    <li>بات نامحدود</li>
                    <li>SLA و امنیت سازمانی</li>
                    <li>استقرار اختصاصی</li>
                  </ul>
                  <a href="#contact" className="btn btn-outline-brand-02 btn-rounded mb-3">
                    مشاوره
                  </a>
                </div>
              </div>
            </div>
  
            <div className="col-12">
              <div className="support-cta text-center mt-5">
                <h5 className="mb-1">
                  <span className="ti-headphone-alt color-primary me-3"></span>
                  نیاز به راهنمایی دارید؟
                </h5>
                <p>
                  سوال دارید؟ <a href="#contact">با ما تماس بگیرید</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  