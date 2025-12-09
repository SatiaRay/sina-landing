export default function Team() {
  return (
    <section className="team-two-section ptb-100 gray-light-bg" id="team">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-8">
            <div className="section-heading text-center">
              <h2>تیم ما</h2>
              <p>سینا توسط تیمی باتجربه در AI و محصول ساخته شده است.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
              <img
                src="/assets/img/team/team-member-1.png"
                alt="عضو تیم"
                width="120"
                className="img-fluid m-auto pb-4"
              />
              <div className="team-content">
                <h5 className="mb-0">مهدی محمودی</h5>
                <span>مدیر پروژه · Full-Stack developer</span>
                <p className="mt-3">
                  هدایت توسعه محصول و نظارت بر معماری و کیفیت کلی Sina AI.
                </p>
                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
                  <li className="list-inline-item">
                    <a
                      className="github"
                      href="https://github.com/devmahmoudi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
              <img
                src="/assets/img/team/team-member-5.png"
                alt="عضو تیم"
                width="120"
                className="img-fluid m-auto pb-4"
              />
              <div className="team-content">
                <h5 className="mb-0">امیرعلی محمودی</h5>
                <span>توسعه‌دهنده reactJS و PHP / Laravel</span>
                <p className="mt-3">
                   توسعه رابط کاربری و بهبود بخش‌های فنی پروژه.
                </p>
                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
                  <li className="list-inline-item">
                    <a
                      className="github"
                      href="https://github.com/AmirPhpDeveloper"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
              <img
                src="/assets/img/team/team-member-2.png"
                alt="عضو تیم"
                width="120"
                className="img-fluid m-auto pb-4"
              />
              <div className="team-content">
                <h5 className="mb-0">محیا جعفری</h5>
                <span>توسعه‌دهنده فرانت‌اند · React / Next.js</span>
                <p className="mt-3">
                  پیاده‌سازی رابط کاربری، لندینگ و تجربه ریسپانسیو RTL.
                </p>
                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
                  <li className="list-inline-item">
                    <a
                      className="github"
                      href="https://github.com/mahya-jafari"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
              <img
                src="/assets/img/team/team-member-3.png"
                alt="عضو تیم"
                width="120"
                className="img-fluid m-auto pb-4"
              />
              <div className="team-content">
                <h5 className="mb-0">محمد غفاری</h5>
                <span>توسعه‌دهنده بک‌اند</span>
                <p className="mt-3">
                  طراحی و پیاده‌سازی سرویس‌های بک‌اند و اتصال به داده‌های اختصاصی.
                </p>
                <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
                  <li className="list-inline-item">
                    <a
                      className="github"
                      href="https://github.com/mg-7"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
