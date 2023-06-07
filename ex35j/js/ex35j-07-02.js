document.addEventListener("DOMContentLoaded", () => {
    /* header파트 */
    const header = document.querySelector(".header");
    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");
    
    /* nav파트 */
    const [About, Products, Technology, Downloads, Etc] = document.querySelectorAll(".nav>div");
    
    /* 자동으로 넘어가게하기 */
    const sections = [
    { title: "About", description: "Custom Software Development Company", color: "tomato" },
    { title: "Products", description: "Building tailored software to address critical needs of global enterprises.", color: "green" },
    { title: "Technology", description: "Machine Learning, Artificial Intelligent, Cloud Platform.", color: "blue" },
    { title: "Downloads", description: "You can download a free 10 days trial.", color: "orange" },
    { title: "Etc", description: "Everything is fine.", color: "pink" },
    ];
    
    let currentIndex = 0;
    
    function changeSection(index) {
    const { title, description, color } = sections[index];
    h1.textContent = title;
    p.textContent = description;
    header.style.backgroundColor = color;
    [About, Products, Technology, Downloads, Etc].forEach((element, i) => {
        element.style.backgroundColor = i === index ? color : "gray";
      });
      
      currentIndex = index;
      setTimeout(changeSection, 1000, (currentIndex + 1) % sections.length);
    }
    changeSection(0); // 트리거 역할
    });