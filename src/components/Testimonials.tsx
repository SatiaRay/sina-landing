export default function Testimonials() {
    return (
      <section className="position-relative gradient-bg ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-5 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
              <div className="testimonial-heading text-white">
                <h2 className="text-white">نظر مشتریان درباره سینا</h2>
                <p>کسب‌وکارها با سینا تجربه مشتری را سریع‌تر و بهتر کرده‌اند.</p>
              </div>
            </div>
  
            <div className="col-md-6 col-lg-6">
              <div className="testimonial-content-wrap">
                <div className="owl-carousel owl-theme client-testimonial-1 dot-indicator testimonial-shape">
                  {[1, 2, 3, 4].map((i) => (
                    <div className="item" key={i}>
                      <div className="testimonial-quote-wrap">
                        <div className="media author-info mb-3">
                          <div className="author-img me-3">
                            <img
                              src={`/assets/img/client/${i}.jpg`}
                              alt="مشتری"
                              className="img-fluid"
                            />
                          </div>
                          <div className="media-body text-white">
                            <h5 className="mb-0 text-white">نام کاربر</h5>
                            <span>مدیر محصول</span>
                          </div>
                          <i className="fas fa-quote-right text-white"></i>
                        </div>
  
                        <div className="client-say text-white">
                          <p>
                            سینا AI باعث شد تیم ما بدون هزینه‌های سنگین، یک دستیار
                            هوشمند حرفه‌ای بسازد.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
        </div>
      </section>
    );
  }
  