// ===== 現在ページをヘッダーで判定 =====

document.addEventListener("DOMContentLoaded", () => {

  const navLinks = document.querySelectorAll(".header-nav a");

  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPath) {

      link.classList.add("active");

    }

  });

  // ===== アーカイブデータ（実内容版） =====

  const archiveData = [

    {

      no: "第1回企画",

      title: "災害NGO 結 様",

      category: "支援団体",

      desc: "現場の課題構造と、実効性のある支援のあり方について。",

      link: "#"

    },

    {

      no: "第2回企画",

      title: "石川県 創造的復興推進課 様",

      category: "行政",

      desc: "行政が進める復興政策の現在地と、未来への展望。",

      link: "#"

    },

    {

      no: "第3回企画",

      title: "東京大学大学院情報学環 中丸和 様",

      category: "教育",

      desc: "総合防災情報研究センター特任研究員 中丸様による、災害時における教育の役割。",

      link: "#"

    }

  ];

  const archiveGrid = document.getElementById("archiveGrid");

  const filterButtons = document.querySelectorAll(".filter-btn");

  function renderArchive(filter = "all") {

    if (!archiveGrid) return;

    const filtered = filter === "all"

      ? archiveData

      : archiveData.filter(item => item.category === filter);

    archiveGrid.innerHTML = filtered.map(item => `
<article class="archive-card">
<div class="archive-no">${item.no}</div>
<div class="archive-tag">${item.category}</div>
<h3>${item.title}</h3>
<p>${item.desc}</p>
<a href="${item.link}" class="archive-link">${item.category} / View Post →</a>
</article>

    `).join("");

  }

  filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      filterButtons.forEach(btn => btn.classList.remove("active"));

      button.classList.add("active");

      renderArchive(button.dataset.filter);

    });

  });

  renderArchive();

});
