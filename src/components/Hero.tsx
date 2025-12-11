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
  const [showVideo, setShowVideo] = useState(false);

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
    <>
      {showVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-11/12 md:w-3/4 lg:w-1/2 aspect-video bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 left-3 text-white text-3xl z-[60]"
              onClick={() => setShowVideo(false)}
            >
              &times;
            </button>

            <video className="w-full h-full" controls autoPlay>
              <source src="/assets/videos/demo.mp4" type="video/mp4" />
              مرورگر شما ویدیو را پشتیبانی نمی‌کند
            </video>
          </div>
        </div>
      )}

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
                  <h1 className="text-white text-6xl font-bold">سینا</h1>
                  <h2 className="text-white text-lg mt-2">
                    راهنمای هوشمند خدمات اینترنت ساتیا
                  </h2>
                </div>

                <p className="mt-6 text-xl text-white max-w-3xl mx-auto leading-relaxed">
                  سینا چت‌باتی است که می‌تواند به‌صورت هوشمند به سوالات شما درباره خدمات اینترنت ساتیا پاسخ دهد — از انتخاب و مقایسه بسته‌ها تا پیگیری مصرف، پشتیبانی فنی، راهنمای خرید و اطلاع از تراکنش‌ها.
                </p>

                <div className="action-btns mt-3">
                  <a
                    href="/register"
                    className="btn btn-brand-03 btn-rounded me-3"
                  >
                    شروع رایگان{" "}
                    <i className="fas fa-cloud-download-alt ps-2"></i>
                  </a>

                  <button
                    onClick={() => setShowVideo(true)}
                    className="btn btn-white btn-circle btn-icon"
                  >
                    <i className="fas fa-play"></i>
                  </button>
                  <span
                    className="ps-2 cursor-pointer"
                    onClick={() => setShowVideo(true)}
                  >
                    دموی زنده
                  </span>
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
    </>
  );
}