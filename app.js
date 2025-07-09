window.addEventListener("load", () => {
  const mainSection = document.getElementById("homemain");
  const text1 = "포기하지 않고 끝까지 책임지려는 개발자";
  const text2 = "김민영입니다";
  const target1 = document.getElementById("left_a");
  const target2 = document.getElementById("left_b");
  let index = 0;
  // 새로 고침시 부드럽게 homemain으로 이동
  if (mainSection) {
    mainSection.scrollIntoView({ behavior: "smooth" });
  }

  // 타이핑 효과
  function typeFirst() {
    target1.textContent += text1.charAt(index++);
    if (index < text1.length) {
      setTimeout(typeFirst, 50);
    } else {
      setTimeout(() => {
        index = 0;
        typeSecond();
      }, 60);
    }
  }

  function typeSecond() {
    target2.textContent += text2.charAt(index++);
    if (index < text2.length) {
      setTimeout(typeSecond, 70);
    }
  }

  typeFirst();
});

// ---
const sections = document.querySelectorAll(".fadeInBox");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        console.log(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
