const archiveData = [

  {

    round: "第1回企画",

    category: "支援団体",

    title: "災害NGO 結 様",

    description: "現場の課題構造と、実効性のある支援のあり方について。",

    link: "https://www.instagram.com/nsf_pjrecovering/p/DNfcw5gxUsM/"

  },

  {

    round: "第2回企画",

    category: "行政",

    title: "石川県 創造的復興推進課 様",

    description: "行政が進める復興政策の現在地と、未来への展望。",

    link: "https://www.instagram.com/nsf_pjrecovering/p/DQpv1qKk9r2/"

  },

  {

    round: "第3回企画",

    category: "教育",

    title: "東京大学大学院情報学環 中丸和 様",

    description: "総合防災情報研究センター特任研究員 中丸様による、災害時における教育の役割。",

    link: "https://www.instagram.com/nsf_pjrecovering/p/DTXnLUakX17/"

  }

];

const archiveGrid = document.getElementById("archiveGrid");

const filterButtons = document.querySelectorAll(".filter-btn");

const revealElements = document.querySelectorAll(".reveal");

function renderArchive(filter = "all") {

  if (!archiveGrid) return;

  const filteredItems = filter === "all"

    ? archiveData

    : archiveData.filter(item => item.category === filter);

  archiveGrid.innerHTML = "";

  if (filteredItems.length === 0) {

    archiveGrid.innerHTML = `
<div class="empty-message">

        該当するアーカイブはまだありません。
</div>

    `;

    return;

  }

  filteredItems.forEach(item => {

    const card = document.createElement("a");

    card.className = "archiveItem";

    card.href = item.link;

    card.target = "_blank";

    card.rel = "noopener noreferrer";

    card.innerHTML = `
<div class="pill">${item.round}</div>
<h3>${item.title}</h3>
<p>${item.description}</p>
<div class="view-link">${item.category} / View Post →</div>

    `;

    archiveGrid.appendChild(card);

  });

}

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    renderArchive(button.dataset.filter);

  });

});

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {

  threshold: 0.15

});

revealElements.forEach(element => observer.observe(element));

renderArchive();
 