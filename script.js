const archiveData = [

  {

    title: "災害NGO 結様",

    category: "支援団体",

    desc: "現場の課題構造と、実効性のある支援のあり方について。"

  },

  {

    title: "石川県 創造的復興推進課 様",

    category: "行政",

    desc: "行政が進める復興政策の現在地と、未来への展望。"

  },

  {

    title: "東京大学大学院 情報学環 中丸和 様",

    category: "教育",

    desc: "災害時における教育の役割と情報のあり方について。"

  }

];

const archiveGrid = document.getElementById("archiveGrid");

const filterButtons = document.querySelectorAll(".filter-btn");

function renderArchive(filter = "all"){

  const filtered = filter === "all"

    ? archiveData

    : archiveData.filter(item => item.category === filter);

  archiveGrid.innerHTML = filtered.map(item => `
<div class="archive-card">
<div class="archive-tag">${item.category}</div>
<h3>${item.title}</h3>
<p>${item.desc}</p>
<a href="#" class="archive-link">View Post →</a>
</div>

  `).join("");

}

/* フィルター */

filterButtons.forEach(btn=>{

  btn.addEventListener("click",()=>{

    filterButtons.forEach(b=>b.classList.remove("active"));

    btn.classList.add("active");

    renderArchive(btn.dataset.filter);

  });

});

renderArchive();
 
