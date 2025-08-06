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
