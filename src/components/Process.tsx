export default function Process() {
  return (
    <section
      id="process"
      className="work-process-section position-relative ptb-100"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-8">
            <div className="section-heading text-center mb-5">
              <h2>چگونه سینا به شما کمک می‌کند؟</h2>
              <p>در سه گام ساده پاسخ صحیح و راهکار مناسب دریافت کنید.</p>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-md-center justify-content-sm-center">
          <div className="col-md-12 col-lg-6">
            <div className="work-process-wrap">

              <div className="process-single-item">
                <div className="process-icon-item left-shape">
                  <div className="d-flex align-items-center">
                    <div className="process-icon me-4">
                      <i className="fas fa-question-circle color-primary"></i>
                    </div>
                    <div className="process-content text-left">
                      <h5>۱) بپرسید</h5>
                      <p>
                        سوال یا نیاز خود درباره خدمات اینترنت ساتیا را مطرح کنید — از تعرفه‌ها تا پشتیبانی و ثبت گزارش در سامانه ۱۳۷.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="process-single-item">
                <div className="process-icon-item right-shape">
                  <div className="d-flex align-items-center">
                    <div className="process-icon ms-4">
                      <i className="fas fa-brain color-primary"></i>
                    </div>
                    <div className="process-content text-right">
                      <h5>۲) تحلیل دانش</h5>
                      <p>
                        سینا با استفاده از دانش مستندات، تعرفه‌ها و تجربه کاربران، بهترین جواب را تحلیل و آماده می‌کند.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="process-single-item">
                <div className="process-icon-item left-shape mb-0">
                  <div className="d-flex align-items-center">
                    <div className="process-icon me-4">
                      <i className="fas fa-check-circle color-primary"></i>
                    </div>
                    <div className="process-content text-left">
                      <h5>۳) پاسخ و راهکار</h5>
                      <p>
                        پاسخ دقیق، گام‌به‌گام و قابل اجرا دریافت کنید — برای سوالات فنی، تعرفه‌ها، پشتیبانی و پیگیری سرویس.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="img-wrap">
              <img
                src="/assets/img/app-mobile-image-3.png"
                alt="فرآیند پاسخ‌دهی سینا"
                className="img-fluid"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
