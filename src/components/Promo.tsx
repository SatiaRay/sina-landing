const promos = [
    {
      icon: "fas fa-concierge-bell",
      title: "ماژولار",
      desc: "اجزای سیستم طوری طراحی شده‌اند که به‌راحتی ترکیب و توسعه یابند.",
    },
    {
      icon: "fas fa-window-restore",
      title: "کاملاً ریسپانسیو",
      desc: "بهینه برای موبایل، تبلت و دسکتاپ بدون افت کیفیت تجربه کاربری.",
    },
    {
      icon: "fas fa-sync-alt",
      title: "مقیاس‌پذیر",
      desc: "برای رشد تیم و کسب‌وکار شما، از استارتاپ تا سازمان.",
    },
    {
      icon: "fas fa-bezier-curve",
      title: "قابل شخصی‌سازی",
      desc: "ظاهر، لحن و منطق بات‌ها را مطابق برند خودتان تنظیم کنید.",
    },
  ];
  
  export default function Promo() {
    return (
      <section className="promo-section ptb-100">
        <div className="container">
          <div className="row">
            {promos.map((p, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="card border-0 single-promo-card p-2 mt-4 shadow">
                  <div className="card-body">
                    <div className="pb-2">
                      <span
                        className={`${p.icon} icon-size-md color-secondary`}
                      ></span>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5>{p.title}</h5>
                      <p className="mb-0">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  