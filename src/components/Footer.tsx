export default function Footer() {
  return (
    <>
      <footer className="footer-1 gradient-bg ptb-60 footer-with-newsletter">
        <div className="container">
          <div className="row newsletter-wrap primary-bg rounded shadow-lg p-5">
            <div className="col-md-6 col-lg-7 mb-4 mb-md-0 mb-sm-4 mb-lg-0">
              <div className="newsletter-content text-white">
                <h3 className="mb-0 text-white">در خبرنامه ما عضو شوید</h3>
                <p className="mb-0">
                  برای دریافت آپدیت‌های Sina ایمیل خود را وارد کنید.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <form className="newsletter-form position-relative">
                <input
                  type="email"
                  className="input-newsletter form-control"
                  placeholder="ایمیل شما"
                  name="email"
                  required
                  autoComplete="off"
                />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="container pt-5">
          <div className="row align-items-center justify-content-between">

            <div className="col-md-12 col-lg-4 mb-4 mb-lg-0 text-center text-lg-start">
                <span style={{ marginLeft: 8, color: "#fff", fontWeight: 800 }}>
                  SINA AI
                </span>

              <p className="mt-2 text-white">
                اینترنت ساتیا - شرکت ساتیاری ارتباط پارس، ارائه‌دهنده خدمات هوشمند و راهکارهای دیجیتال.
              </p>

              <div className="social-list-default mt-3">
                <a
                  href="https://www.linkedin.com/company/satianet/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 text-white"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>

                <a
                  href="https://satia.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 text-white"
                >
                  <i className="fas fa-globe fa-lg"></i>
                </a>

                <a
                  href="https://www.instagram.com/satianet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 text-white"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>

                <a
                  href="https://t.me/satianet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="fab fa-telegram fa-lg"></i>
                </a>
              </div>
            </div>

            <div className="col-md-12 col-lg-7">
              <div className="row text-center text-lg-start">
                <div className="col-sm-6 col-md-3 mb-4">
                  <h6 className="text-uppercase text-white">منابع</h6>
                  <ul className="list-unstyled">
                    <li><a className="text-white" href="#about">درباره ما</a></li>
                    <li><a className="text-white" href="#features">امکانات</a></li>
                    <li><a className="text-white" href="#pricing">قیمت‌گذاری</a></li>
                  </ul>
                </div>

                <div className="col-sm-6 col-md-3 mb-4">
                  <h6 className="text-uppercase text-white">ارتباط</h6>
                  <ul className="list-unstyled">
                    <li><a className="text-white" href="#contact">تماس با ما</a></li>
                    <li><a className="text-white" href="mailto:info@satiaisp.com">ایمیل</a></li>
                    <li><a className="text-white" href="tel:+98863380510">تلفن</a></li>
                  </ul>
                </div>

                <div className="col-sm-6 col-md-3 mb-4">
                  <h6 className="text-uppercase text-white">سایر</h6>
                  <ul className="list-unstyled">
                    <li><a className="text-white" href="/demo">دمو زنده</a></li>
                  </ul>
                </div>

                <div className="col-sm-6 col-md-3 mb-4">
                  <h6 className="text-uppercase text-white">پشتیبانی</h6>
                  <ul className="list-unstyled">
                    <li><a className="text-white" href="#">سوالات متداول</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>

      <div className="footer-bottom py-3 gray-light-bg text-center text-md-start">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-7">
              <p className="mb-0 small">
                © سینا — کلیه حقوق محفوظ است
              </p>
            </div>
            <div className="col-md-6 col-lg-5">
              <ul className="list-inline text-center text-md-end mb-0">
                <li className="list-inline-item"><a className="small-text" href="#">مقررات</a></li>
                <li className="list-inline-item"><a className="small-text" href="#">امنیت</a></li>
                <li className="list-inline-item"><a className="small-text" href="#">حریم خصوصی</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-top scroll-to-target primary-bg text-white" data-bs-target="html">
        <span className="fas fa-hand-point-up"></span>
      </div>
    </>
  );
}
