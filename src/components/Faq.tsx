export default function Faq() {
    return (
      <section id="faq" className="ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-8">
              <div className="section-heading text-center mb-5">
                <h2>سوالات متداول</h2>
                <p>پاسخ چند سوال رایج درباره Sina AI</p>
              </div>
            </div>
          </div>
  
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
              <div className="img-wrap">
                <img
                  src="/assets/img/health.png"
                  alt="FAQ"
                  className="img-fluid"
                />
              </div>
            </div>
  
            <div className="col-md-12 col-lg-6">
              <div id="accordion" className="accordion faq-wrap">
                <div className="card mb-3">
                  <a className="card-header" data-bs-toggle="collapse" href="#collapse0">
                    <h6 className="mb-0 d-inline-block">چطور بات بسازم؟</h6>
                  </a>
                  <div id="collapse0" className="collapse show" data-bs-parent="#accordion">
                    <div className="card-body white-bg">
                      <p>با چند کلیک سناریو بسازید و دانش خود را متصل کنید.</p>
                    </div>
                  </div>
                </div>
  
                <div className="card my-3">
                  <a className="card-header collapsed" data-bs-toggle="collapse" href="#collapse1">
                    <h6 className="mb-0 d-inline-block">آیا فارسی را پشتیبانی می‌کند؟</h6>
                  </a>
                  <div id="collapse1" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body white-bg">
                      <p>بله، با RTL و مدل‌های بهینه‌شده برای فارسی.</p>
                    </div>
                  </div>
                </div>
  
                <div className="card my-3">
                  <a className="card-header collapsed" data-bs-toggle="collapse" href="#collapse2">
                    <h6 className="mb-0 d-inline-block">می‌توانم داده اختصاصی وصل کنم؟</h6>
                  </a>
                  <div id="collapse2" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body white-bg">
                      <p>بله، فایل‌ها، سایت و API شما قابل اتصال است.</p>
                    </div>
                  </div>
                </div>
  
                <div className="card mt-3">
                  <a className="card-header collapsed" data-bs-toggle="collapse" href="#collapse3">
                    <h6 className="mb-0 d-inline-block">امنیت داده‌ها چطور است؟</h6>
                  </a>
                  <div id="collapse3" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body white-bg">
                      <p>تمام داده‌ها رمزنگاری شده و قابل استقرار اختصاصی هستند.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
        </div>
      </section>
    );
  }
  