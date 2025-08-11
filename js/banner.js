const text = "< PHOYARAT KAMNAN />";
const nameDiv = document.querySelector(".name");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    nameDiv.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 150); // หน่วงเวลา 150ms ต่อหนึ่งตัวอักษร
  }
}

typeWriter(); // เริ่มทำงาน

//   menu
fetch("nev.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("nev").innerHTML = data;
  });




  //   about
fetch('/about.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('about-container').innerHTML = data;
    startObserver();  // เรียกฟังก์ชันสังเกต animate-item หลังโหลดเสร็จ
  })
  .catch(error => console.error('Error loading about.html:', error));

function startObserver(container = document) {
  const items = container.querySelectorAll(".animate-item");

  if (items.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, {
    threshold: 0.1
  });

  items.forEach(item => {
    const delay = item.getAttribute("data-delay") || "0s";
    item.style.setProperty("--delay", delay);
    observer.observe(item);
  });
}



  //   project
fetch('/project.html')
 .then(response => response.text())
  .then(data => {
    document.getElementById('project').innerHTML = data;
    startObserver();  // เรียกฟังก์ชันสังเกต animate-item หลังโหลดเสร็จ
  })
  .catch(error => console.error('Error loading project.html:', error));



  //   contact
fetch('/contact.html')
 .then(response => response.text())
  .then(data => {
    document.getElementById('contact').innerHTML = data;
    startObserver();  // เรียกฟังก์ชันสังเกต animate-item หลังโหลดเสร็จ
  })
  .catch(error => console.error('Error loading project.html:', error));
