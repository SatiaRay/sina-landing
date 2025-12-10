"use client";

import { useEffect, useMemo, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  avatar: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        name: "مهدی محمودی",
        role: "مدیر پروژه و محصول",
        text:
          "هدف ما اینه که ساخت دستیارهای هوشمند برای هر کسب‌وکار ساده، سریع و مقیاس‌پذیر باشه.",
        avatar: "/assets/img/team/team-member-1.png",
      },
      {
        name: "محمد غفاری",
        role: "توسعه‌دهنده بک‌اند",
        text:
          "زیرساخت سینا طوری طراحی شده که اتصال دانش و داده‌ها با کمترین دردسر انجام بشه.",
        avatar: "/assets/img/team/team-member-3.png",
      },
      {
        name: "محیا جعفری",
        role: "توسعه‌دهنده فرانت‌اند",
        text:
          "تجربه کاربری و طراحی RTL برای ما اولویته تا کاربران فارسی‌زبان حس راحتی داشته باشن.",
        avatar: "/assets/img/team/team-member-2.png",
      },
      {
        name: "امیرعلی محمودی",
        role: "توسعه‌دهنده فرانت‌اند",
        text:
          "روی جزئیات رابط کاربری و انیمیشن‌ها کار کردیم تا لندینگ هم زیبا باشه هم سریع.",
        avatar: "/assets/img/team/team-member-5.png",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const count = testimonials.length;

  const next = () => setActive((i) => (i + 1) % count);
  const prev = () => setActive((i) => (i - 1 + count) % count);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [count]);

  return (
    <section className="position-relative gradient-bg ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-5 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
            <div className="testimonial-heading text-white">
              <h2 className="text-white">نظرات درباره سینا</h2>
              <p>چند جمله از تیمی که سینا را ساخته‌اند.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="testimonial-content-wrap position-relative">
              <div className="testimonial-shape">
                {testimonials.map((t, i) => {
                  const isActive = i === active;
                  return (
                    <div
                      key={i}
                      className="item"
                      style={{
                        display: isActive ? "block" : "none",
                        transition: "all .35s ease",
                      }}
                    >
                      <div className="testimonial-quote-wrap">
                        <div
                          className="media author-info mb-3 align-items-center"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 12,
                          }}
                        >
                          <div
                            className="author-img"
                            style={{
                              width: 100,
                              height: 100,
                              padding: 0,
                              margin: 0,
                              background: "transparent",
                              border: "none",
                              boxShadow: "none",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              transform: "translate(-8px, 6px)",
                            }}
                          >
                            <img
                              src={t.avatar}
                              alt={t.name}
                              className="img-fluid rounded-circle"
                              style={{
                                width: 64,
                                height: 64,
                                objectFit: "cover",
                                border: "none",
                                boxShadow: "none",
                                background: "transparent",
                              }}
                            />
                          </div>

                          <div
                            className="media-body text-white"
                            style={{ flex: 1 }}
                          >
                            <h5 className="mb-0 text-white">{t.name}</h5>
                            <span>{t.role}</span>
                          </div>

                          <i className="fas fa-quote-right text-white"></i>
                        </div>

                        <div className="client-say text-white">
                          <p className="mb-0">{t.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                aria-label="قبلی"
                onClick={prev}
                className="btn btn-white btn-circle btn-icon position-absolute"
                style={{
                  left: -18,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 40,
                  height: 40,
                  zIndex: 5,
                }}
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              <button
                type="button"
                aria-label="بعدی"
                onClick={next}
                className="btn btn-white btn-circle btn-icon position-absolute"
                style={{
                  right: -18,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 40,
                  height: 40,
                  zIndex: 5,
                }}
              >
                <i className="fas fa-chevron-right"></i>
              </button>

              <div className="dot-indicator d-flex justify-content-center mt-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`رفتن به اسلاید ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`me-2 rounded-circle ${
                      i === active ? "bg-white" : "bg-white-50"
                    }`}
                    style={{
                      width: 10,
                      height: 10,
                      border: "none",
                      opacity: i === active ? 1 : 0.5,
                      transition: "opacity .2s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}