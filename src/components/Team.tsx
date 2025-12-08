export default function Team() {
    return (
      <section className="team-two-section ptb-100 gray-light-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-8">
              <div className="section-heading text-center">
                <h2>تیم ما</h2>
                <p>سینا AI توسط تیمی باتجربه در AI و محصول ساخته شده است.</p>
              </div>
            </div>
          </div>
  
          <div className="row">
            {[1, 2, 3, 4].map((i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="single-team-wrap bg-white text-center border rounded p-4 mt-4">
                  <img
                    src={`/assets/img/team/team-member-${i}.png`}
                    alt="عضو تیم"
                    width="120"
                    className="img-fluid m-auto pb-4"
                  />
                  <div className="team-content">
                    <h5 className="mb-0">نام عضو تیم</h5>
                    <span>سمت</span>
                    <p className="mt-3">
                      توضیح کوتاه درباره عضو تیم.
                    </p>
                    <ul className="list-inline social-list-default social-color icon-hover-top-bottom">
                      <li className="list-inline-item">
                        <a className="linkedin" href="#" target="_blank">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="twitter" href="#" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  