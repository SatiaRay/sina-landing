"use client";

import { useEffect, useRef, useState } from "react";

type AboutCounter = {
  label: string;
  value: number;
};

export default function About() {
  const counters: AboutCounter[] = [
    { label: "مشتری", value: 1023 },
    { label: "بارگیری‌ها", value: 5470 },
    { label: "رضایت مشتری", value: 3560 },
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

      const duration = 1200;
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
    <div className="overflow-hidden">
      <section
        ref={sectionRef}
        id="about"
        className="about-us ptb-100 background-shape-img position-relative"
      >
        <div className="animated-shape-wrap">
          <div className="animated-shape-item"></div>
          <div className="animated-shape-item"></div>
          <div className="animated-shape-item"></div>
          <div className="animated-shape-item"></div>
          <div className="animated-shape-item"></div>
        </div>

        <div className="container">
          <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
            <div className="col-md-12 col-lg-6 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
              <div className="about-content-left">
                <h2>Sina AI همه چیز را برای شما هوشمند می‌کند</h2>
                <p>
                  با سینا می‌توانید چت‌بات‌های سفارشی، اتوماسیون‌های گفتگومحور و
                  دستیارهای خاص کسب‌وکار خود را بسازید و بدون نیاز به تیم فنی
                  توسعه دهید.
                </p>

                <ul className="dot-circle pt-3">
                  <li>پشتیبانی کامل از زبان فارسی و RTL</li>
                  <li>قابل اتصال به دیتابیس‌ها و CRMهای شما</li>
                  <li>ارائه پاسخ‌های دقیق بر اساس دانش اختصاصی</li>
                  <li>آنالیتیکس و گزارش‌های کاربردی برای بهبود</li>
                  <li>امنیت و حریم خصوصی در سطح سازمانی</li>
                  <li>راه‌اندازی سریع و بدون دردسر</li>
                </ul>

                <div className="row pt-3">
                  <div className="col-4 col-lg-3 border-right">
                    <div className="count-data text-center">
                      <h4 className="count-number mb-0 color-primary font-weight-bold">
                        {format(counts[0])}
                      </h4>
                      <span>{counters[0].label}</span>
                    </div>
                  </div>

                  <div className="col-4 col-lg-3 border-right">
                    <div className="count-data text-center">
                      <h4 className="count-number mb-0 color-primary font-weight-bold">
                        {format(counts[1])}
                      </h4>
                      <span>{counters[1].label}</span>
                    </div>
                  </div>

                  <div className="col-4 col-lg-3 border-right">
                    <div className="count-data text-center">
                      <h4 className="count-number mb-0 color-primary font-weight-bold">
                        {format(counts[2])}
                      </h4>
                      <span>{counters[2].label}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-5 col-lg-4 d-flex justify-content-center">
              <div className="about-content-right text-center">
                <img
                  src="/assets/img/app-mobile-image-2.png"
                  alt="درباره ما"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="position-relative feature-section ptb-100">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-32">
          <div className="row align-items-center justify-content-between g-0">
            <div className="col-12 col-lg-6 mb-10 mb-lg-0">
              <div className="text-center text-lg-end">
                <img
                  src="/assets/img/about-us.png"
                  alt="ساخت دستیار هوشمند با سینا AI"
                  className="img-fluid"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '20px',
                  }}
                />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div style={{ paddingRight: '100px', paddingLeft: '20px' }}>
                <h2 className="mb-5 text-4xl lg:text-5xl font-bold leading-tight">
                  به راحتی دستیارهای هوشمند بسازید
                </h2>
                <p className="text-lg lg:text-xl text-gray-700 mb-5 leading-relaxed">
                  سینا AI ابزارهای آماده‌ای برای ساخت، تست و دیپلوی چت‌بات و دستیارهای سازمانی دارد.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  همه چیز به‌صورت drag & drop قابل ساختن است؛ از سناریوهای ساده تا اتوماسیون‌های پیچیده.
                </p>

                <ul className="dot-circle space-y-4 mb-10 text-lg">
                  <li>بدون نیاز به کدنویسی</li>
                  <li>قابل یادگیری برای تیم‌های غیر فنی</li>
                  <li>اتصال به منابع داده شما</li>
                  <li>دیپلوی سریع روی وب و پیام‌رسان‌ها</li>
                </ul>

                <div className="action-btns mt-4">
                  <a href="/register" className="btn btn-brand-02 me-3">
                    شروع کنید
                  </a>
                  <a href="#features" className="btn btn-outline-brand-02">
                    امکانات
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}