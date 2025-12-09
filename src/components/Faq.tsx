"use client";
import { useEffect, useRef, useState } from "react";

const faqs = [
  { q: "چطور بات بسازم؟", a: "با چند کلیک سناریو بسازید و دانش خود را متصل کنید." },
  { q: "آیا فارسی را پشتیبانی می‌کند؟", a: "بله، با RTL و مدل‌های بهینه‌شده برای فارسی." },
  { q: "می‌توانم داده اختصاصی وصل کنم؟", a: "بله، فایل‌ها، سایت و API شما قابل اتصال است." },
  { q: "امنیت داده‌ها چطور است؟", a: "تمام داده‌ها رمزنگاری شده و قابل استقرار اختصاصی هستند." },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? -1 : i));

  const [, force] = useState(0);
  useEffect(() => {
    force((x) => x + 1);
  }, []);

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
              <img src="/assets/img/health.png" alt="FAQ" className="img-fluid" />
            </div>
          </div>

          <div className="col-md-12 col-lg-6">
            <div className="accordion faq-wrap">
              {faqs.map((f, i) => {
                const isOpen = openIndex === i;
                const el = refs.current[i];
                const h = isOpen && el ? el.scrollHeight : 0;

                return (
                  <div className={`card ${i === 0 ? "mb-3" : "my-3"}`} key={i}>
                    <a
                      href="#"
                      className={`card-header ${isOpen ? "" : "collapsed"}`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggle(i);
                      }}
                      aria-expanded={isOpen}
                    >
                      <h6 className="mb-0 d-inline-block">{f.q}</h6>
                    </a>

                    <div
                      ref={(node) => {
                        refs.current[i] = node; 
                      }}
                      style={{
                        overflow: "hidden",
                        maxHeight: h,
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? "translateY(0)" : "translateY(-6px)",
                        transition:
                          "max-height 380ms ease, opacity 260ms ease, transform 260ms ease",
                      }}
                    >
                      <div className="card-body white-bg">
                        <p className="mb-0">{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}