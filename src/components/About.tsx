export default function About() {
    return (
      <div className="overflow-hidden">
        <section
          id="about"
          className="about-us ptb-100 background-shape-img position-relative"
        >
          <div className="animated-shape-wrap">
            <div className="animated-shape-item"></div>
            <div className="animated-shape-item"></div>
            <div className="animated-shape-item"></div>
            <div className="animated-shape-item"></div>
            <div className="animated-shape-item"></div>
          </div>
  
          <div className="container">
            <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
              <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                <div className="about-content-left">
                  <h2>Sina AI همه چیز را برای شما هوشمند می‌کند</h2>
                  <p>
                    با سینا می‌توانید چت‌بات‌های سفارشی، اتوماسیون‌های گفتگومحور و
                    دستیارهای خاص کسب‌وکار خود را بسازید و بدون نیاز به تیم فنی
                    توسعه دهید.
                  </p>
  
                  <ul className="dot-circle pt-3">
                    <li>پشتیبانی کامل از زبان فارسی و RTL</li>
                    <li>قابل اتصال به دیتابیس‌ها و CRMهای شما</li>
                    <li>ارائه پاسخ‌های دقیق بر اساس دانش اختصاصی</li>
                    <li>آنالیتیکس و گزارش‌های کاربردی برای بهبود</li>
                    <li>امنیت و حریم خصوصی در سطح سازمانی</li>
                    <li>راه‌اندازی سریع و بدون دردسر</li>
                  </ul>
  
                  <div className="row pt-3">
                    <div className="col-4 col-lg-3 border-right">
                      <div className="count-data text-center">
                        <h4 className="count-number mb-0 color-primary font-weight-bold">
                          1023
                        </h4>
                        <span>مشتری</span>
                      </div>
                    </div>
                    <div className="col-4 col-lg-3 border-right">
                      <div className="count-data text-center">
                        <h4 className="count-number mb-0 color-primary font-weight-bold">
                          5470
                        </h4>
                        <span>بارگیری‌ها</span>
                      </div>
                    </div>
                    <div className="col-4 col-lg-3 border-right">
                      <div className="count-data text-center">
                        <h4 className="count-number mb-0 color-primary font-weight-bold">
                          3560
                        </h4>
                        <span>رضایت مشتری</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="col-sm-5 col-md-5 col-lg-4 d-flex justify-content-center">
                <div className="about-content-right text-center">
                  <img
                    src="/assets/img/app-mobile-image-2.png"
                    alt="درباره ما"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section className="position-relative feature-section ptb-100">
          <div className="container">
            <div className="row align-items-center justify-content-between justify-content-sm-center justify-content-md-center">
              <div className="col-sm-5 col-md-6 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                <div className="download-img">
                  <img
                    src="/assets/img/about-us.png"
                    alt="دانلود"
                    className="img-fluid"
                  />
                </div>
              </div>
  
              <div className="col-md-12 col-lg-6">
                <div className="feature-contents">
                  <h2>به راحتی دستیارهای هوشمند بسازید</h2>
                  <p>
                    سینا AI ابزارهای آماده‌ای برای ساخت، تست و دیپلوی چت‌بات و
                    دستیارهای سازمانی دارد.
                  </p>
                  <p>
                    همه چیز به‌صورت drag & drop قابل ساختن است؛ از سناریوهای ساده
                    تا اتوماسیون‌های پیچیده.
                  </p>
  
                  <ul className="dot-circle pt-2">
                    <li>بدون نیاز به کدنویسی</li>
                    <li>قابل یادگیری برای تیم‌های غیر فنی</li>
                    <li>اتصال به منابع داده شما</li>
                    <li>دیپلوی سریع روی وب و پیام‌رسان‌ها</li>
                  </ul>
  
                  <div className="action-btns mt-4">
                    <a href="/register" className="btn btn-brand-02 me-3">
                      شروع کنید
                    </a>
                    <a href="#features" className="btn btn-outline-brand-02">
                      امکانات
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  