export default function Contact() {
    return (
      <section id="contact" className="contact-us-section ptb-100">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-12 col-lg-5 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
              <div className="contact-us-form gray-light-bg rounded p-5">
                <h4>برای شروع آماده هستید؟</h4>
                <form action="#" method="POST" id="contactForm" className="contact-us-form">
                  <div className="form-row">
                    <div className="col-12">
                      <div className="form-group">
                        <input type="text" className="form-control" name="name" placeholder="نام" required />
                      </div>
                    </div>
  
                    <div className="col-12">
                      <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="ایمیل" required />
                      </div>
                    </div>
  
                    <div className="col-12">
                      <div className="form-group">
                        <textarea name="message" className="form-control" rows={7} placeholder="پیام"></textarea>
                      </div>
                    </div>
  
                    <div className="col-sm-12 mt-3">
                      <button type="submit" className="btn btn-brand-02">
                        پیام فرستادن
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
  
            <div className="col-md-12 col-lg-6">
              <div className="contact-us-content">
                <h2>به یک دستیار هوشمند نیاز دارید؟</h2>
                <p className="lead">
                  هر زمان خواستید با ما تماس بگیرید؛ پاسخگو هستیم.
                </p>
  
                <hr className="my-5" />
  
                <ul className="contact-info-list">
                  <li className="d-flex pb-3">
                    <div className="contact-icon me-3">
                      <span className="fas fa-location-arrow color-primary rounded-circle p-3"></span>
                    </div>
                    <div className="contact-text">
                      <h5 className="mb-1">محل شرکت</h5>
                      <p>تهران - ونک</p>
                    </div>
                  </li>
  
                  <li className="d-flex pb-3">
                    <div className="contact-icon me-3">
                      <span className="fas fa-envelope color-primary rounded-circle p-3"></span>
                    </div>
                    <div className="contact-text">
                      <h5 className="mb-1">ایمیل</h5>
                      <p>hello@sina.ai</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* end col */}
          </div>
        </div>
      </section>
    );
  }
  