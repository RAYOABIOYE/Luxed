// const menuBtn = document.getElementById("menu-btn");
// const dropdown = document.getElementById("mobile");

// menuBtn.addEventListener('click', () =>{
//     dropdown.classList.toggle('show');
//     dropdown.classList.toggle('hide');

// });


  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("translate-x-full");
    btn.classList.toggle("open");
  });

  const faqButtons = document.querySelectorAll(".faq-btn");

  faqButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const content = item.querySelector(".faq-content");
      const arrow = item.querySelector(".faq-arrow");

      // Close other FAQs
      document.querySelectorAll(".faq-content").forEach(c => {
        if (c !== content) c.classList.add("hidden");
      });
      document.querySelectorAll(".faq-arrow").forEach(a => {
        if (a !== arrow) a.classList.remove("rotate-180");
      });

      // Toggle current
      content.classList.toggle("hidden");
      arrow.classList.toggle("rotate-180");
    });
  });

