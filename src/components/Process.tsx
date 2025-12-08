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
                <h2>چطور کار می‌کند؟</h2>
                <p>در سه مرحله بات خودتان را بسازید و منتشر کنید.</p>
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
                        <i className="fas fa-project-diagram color-primary"></i>
                      </div>
                      <div className="process-content text-left">
                        <h5>۱) ساخت سناریو</h5>
                        <p>گفتگوها و منطق بات را با ابزارهای آماده بسازید.</p>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="process-single-item">
                  <div className="process-icon-item right-shape">
                    <div className="d-flex align-items-center">
                      <div className="process-icon ms-4">
                        <i className="fas fa-puzzle-piece color-primary"></i>
                      </div>
                      <div className="process-content text-right">
                        <h5>۲) اتصال دانش و داده</h5>
                        <p>اسناد، سایت یا API خود را وصل کنید تا بات دقیق شود.</p>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="process-single-item">
                  <div className="process-icon-item left-shape mb-0">
                    <div className="d-flex align-items-center">
                      <div className="process-icon me-4">
                        <i className="fas fa-truck color-primary"></i>
                      </div>
                      <div className="process-content text-left">
                        <h5>۳) انتشار و مانیتور</h5>
                        <p>در چند دقیقه روی وب یا پیام‌رسان‌ها منتشرش کنید.</p>
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
                  alt="فرآیند"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  