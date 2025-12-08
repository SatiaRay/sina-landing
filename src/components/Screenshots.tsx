export default function Screenshots() {
    return (
      <section
        id="screenshots"
        className="screenshots-section pb-100 pt-100 gray-light-bg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-8">
              <div className="section-heading text-center mb-5">
                <h2>نمایی از پلتفرم</h2>
                <p>
                  چند تصویر از محیط ساخت و مدیریت بات‌ها در سینا AI.
                </p>
              </div>
            </div>
          </div>
  
          <div className="screenshot-wrap">
            <div className="screenshot-frame"></div>
            <div className="screen-carousel owl-carousel owl-theme dot-indicator">
              <img src="/assets/img/01.jpg" className="img-fluid" alt="اسکرین‌شات 1" />
              <img src="/assets/img/02.jpg" className="img-fluid" alt="اسکرین‌شات 2" />
              <img src="/assets/img/03.jpg" className="img-fluid" alt="اسکرین‌شات 3" />
              <img src="/assets/img/04.jpg" className="img-fluid" alt="اسکرین‌شات 4" />
              <img src="/assets/img/05.jpg" className="img-fluid" alt="اسکرین‌شات 5" />
              <img src="/assets/img/06.jpg" className="img-fluid" alt="اسکرین‌شات 6" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  