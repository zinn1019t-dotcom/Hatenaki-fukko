document.addEventListener("DOMContentLoaded", () => {

  /* ===== FAQ開閉 ===== */

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {

    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {

      const isOpen = item.classList.contains("open");

      // すべて閉じる（1つだけ開く仕様）

      faqItems.forEach(i => i.classList.remove("open"));

      // 開いてなかった場合だけ開く

      if (!isOpen) {

        item.classList.add("open");

        // 開いた位置へスクロール（少し上余白）

        setTimeout(() => {

          item.scrollIntoView({

            behavior: "smooth",

            block: "start"

          });

        }, 200);

      }

    });

  });

  /* ===== reveal（ふわっと表示） ===== */

  const reveals = document.querySelectorAll(".reveal");

  if (reveals.length > 0) {

    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

        }

      });

    }, {

      threshold: 0.15

    });

    reveals.forEach(el => observer.observe(el));

  }

});
 