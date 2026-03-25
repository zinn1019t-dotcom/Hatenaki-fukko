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

  // ===== アーカイブデータ =====

  const archiveData = [

    {

      title: "被災地支援ネットワーク",

      category: "支援団体",

      desc: "現地と連携しながら継続的な支援体制づくりに取り組んだ記録。"

    },

    {

      title: "自治体との協働提言",

      category: "行政",

      desc: "復興と防災に関する提案を行政へ届けたプロジェクト。"

    },

    {

      title: "防災教育ワークショップ",

      category: "教育",

      desc: "若い世代に向けて防災意識を広げるための学習企画。"

    },

    {

      title: "避難環境改善アクション",

      category: "支援団体",

      desc: "避難所環境の改善に向けた提案と発信を行った取り組み。"

    },

    {

      title: "地域連携ヒアリング",

      category: "行政",

      desc: "地域の課題や要望を整理し、今後の連携の方向性をまとめた活動。"

    },

    {

      title: "震災の記憶継承プロジェクト",

      category: "教育",

      desc: "震災の学びを次世代へ伝えるための発信・記録活動。"

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
<div class="archive-tag">${item.category}</div>
<h3>${item.title}</h3>
<p>${item.desc}</p>
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
 
