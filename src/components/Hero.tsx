"use client";

import { useEffect, useRef, useState } from "react";

type Counter = {
  label: string;
  value: number;
};

export default function Hero() {
  const counters: Counter[] = [
    { label: "نصب‌ها", value: 61172 },
    { label: "گفتگوها", value: 143870 },
    { label: "کاربران فعال", value: 31191 },
  ];

  const [counts, setCounts] = useState<number[]>(counters.map(() => 0));
  const startedRef = useRef(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const format = (n: number) => n.toLocaleString("en-US");

  useEffect(() => {
    if (!sectionRef.current) return;

    const startCounting = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const duration = 1400;
      const startTime = performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);

        const eased = 1 - Math.pow(1 - progress, 3);

        setCounts(counters.map((c) => Math.floor(c.value * eased)));

        if (progress < 1) requestAnimationFrame(animate);
        else setCounts(counters.map((c) => c.value));
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) startCounting();
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ptb-100 bg-image overflow-hidden"
      image-overlay="10"
    >
      <div
        className="hero-bottom-shape-two"
        style={{
          background:
            "url('/assets/img/hero-bottom-shape-2.svg') no-repeat bottom center",
        }}
      ></div>

      <div className="container text-center">
        <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
          <div className="col-md-12 col-lg-6">
            <div className="hero-slider-content text-white pt-5">
              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-white text-4xl font-bold">
                  Sina
                </h1>
                <h2 className="text-white text-lg mt-2">
                  دستیار هوشمند کسب‌وکار شما
                </h2>
              </div>
              <p className="lead">
                با سینا در چند دقیقه چت‌بات و دستیارهای سفارشی بسازید، به داده‌های
                خودتان وصل کنید و تجربه مشتریان را متحول کنید.
              </p>

              <div className="action-btns mt-3">
                <a
                  href="/register"
                  className="btn btn-brand-03 btn-rounded me-3"
                >
                  شروع رایگان{" "}
                  <i className="fas fa-cloud-download-alt ps-2"></i>
                </a>

                <a href="/demo" className="btn btn-white btn-circle btn-icon">
                  <i className="fas fa-play"></i>
                </a>
                <span className="ps-2">دموی زنده</span>
              </div>

              <div className="hero-counter mt-4">
                <div className="row justify-content-center text-center">
                  {counters.map((c, i) => (
                    <div className="col-6 col-sm-4 col-lg-3" key={c.label}>
                      <div className="counter-item d-flex align-items-center justify-content-center py-3">
                        <div className="single-counter-item text-center">
                          <span className="h4 count-number text-white d-block">
                            {format(counts[i])}
                          </span>
                          <h6 className="text-white mb-0">{c.label}</h6>
                        </div>
                        <span className="color-6 ms-2 p-2 rounded-circle">
                          <i className="fas fa-arrow-up icon-sm"></i>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-lg-5 d-flex justify-content-center">
            <div className="img-wrap text-center">
              <img
                src="/assets/img/app-mobile-image.png"
                alt="تصویر اپ"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}