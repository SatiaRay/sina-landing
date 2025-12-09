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
                    برای دریافت آپدیت‌های Sina AI ایمیل خود را وارد کنید.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <form className="newsletter-form position-relative">
                  <input
                    type="text"
                    className="input-newsletter form-control"
                    placeholder="ایمیل شما"
                    name="email"
                    required
                    autoComplete="off"
                  />
                  <button type="submit" className="disabled">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
  
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
                <a href="/" className="navbar-brand mb-2">
                  <img
                    src="/assets/img/logo-white.png"
                    alt="لوگو"
                    className="img-fluid"
                  />
                </a>
                <p>
                  Sina AI پلتفرم ساخت دستیارهای هوشمند برای کسب‌وکارها.
                </p>
                <div className="list-inline social-list-default background-color social-hover-2 mt-2 text-center">
                  <li className="list-inline-item">
                    <a className="twitter" href="#"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li className="list-inline-item">
                    <a className="linkedin" href="#"><i className="fab fa-linkedin-in"></i></a>
                  </li>
                </div>
              </div>
  
              <div className="col-md-12 col-lg-8 text-center">
                <div className="row mt-0">
                  <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
                    <h6 className="text-uppercase">منابع</h6>
                    <ul>
                      <li><a href="#">راهنما</a></li>
                    </ul>
                  </div>
  
                  <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
                    <h6 className="text-uppercase">محصول</h6>
                    <ul>
                      <li><a href="#features">امکانات</a></li>
                      <li><a href="#pricing">قیمت گذاری</a></li>
                      <li><a href="/demo">دمو</a></li>
                    </ul>
                  </div>
  
                  <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
                    <h6 className="text-uppercase">شرکت</h6>
                    <ul>
                      <li><a href="#about">درباره ما</a></li>
                      <li><a href="#contact">تماس</a></li>
                    </ul>
                  </div>
  
                  <div className="col-sm-6 col-md-3 col-lg-3">
                    <h6 className="text-uppercase">پشتیبانی</h6>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </footer>
  
        <div className="footer-bottom py-3 gray-light-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-7">
                <div className="copyright-wrap small-text">
                  <p className="mb-0">© Sina AI — کلیه حقوق محفوظ است</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="terms-policy-wrap text-lg-right text-md-right text-left">
                  <ul className="list-inline">
                    <li className="list-inline-item"><a className="small-text" href="#">مقررات</a></li>
                    <li className="list-inline-item"><a className="small-text" href="#">امنیت</a></li>
                    <li className="list-inline-item"><a className="small-text" href="#">حریم خصوصی</a></li>
                  </ul>
                </div>
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