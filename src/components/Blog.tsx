export default function Blog() {
    return (
      <section className="our-blog-section ptb-100 gray-light-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-8">
              <div className="section-heading text-center">
                <h2>آخرین اخبار ما</h2>
                <p>به‌روزرسانی‌ها و مقالات Sina AI را دنبال کنید.</p>
              </div>
            </div>
          </div>
  
          <div className="row justify-content-center">
            {[1, 2, 3].map((i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="single-blog-card card border-0 shadow-sm mt-4">
                  <div className="blog-img position-relative">
                    <img
                      src={`/assets/img/blog/${i}.jpg`}
                      className="card-img-top"
                      alt="وبلاگ"
                    />
                    <div className="meta-date">
                      <strong>24</strong>
                      <small>تیر</small>
                    </div>
                  </div>
  
                  <div className="card-body">
                    <h3 className="h5 mb-2 card-title">
                      <a href="#">عنوان مقاله نمونه</a>
                    </h3>
                    <p className="card-text">
                      خلاصه کوتاه از مقاله…
                    </p>
                    <a href="#" className="detail-link">
                      بیشتر بخوانید <span className="ti-arrow-left"></span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }  