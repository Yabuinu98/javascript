document.addEventListener("DOMContentLoaded", () => {
    /* header파트 */
    const header = document.querySelector(".header")
    const h1 = document.querySelector("h1")
    const p = document.querySelector("p")

    /* nav파트 */
    const [About, Products, Technology, Downloads, Etc] = document.querySelectorAll(".nav>div")
    // const About = document.querySelector("#nav1")
    // const Products = document.querySelector("#nav2")
    // const Technology = document.querySelector("#nav3")
    // const Downloads = document.querySelector("#nav4")
    // const Etc = document.querySelector("#nav5")

    
    /* 1. About 클릭하면 */
    About.addEventListener("click", () => {
        h1.textContent = "About"
        p.textContent = "Custom Software Development Company"
        header.style.backgroundColor = "tomato"
        About.style.backgroundColor = "tomato"
        Products.style.backgroundColor = "gray"
        Technology.style.backgroundColor = "gray"
        Downloads.style.backgroundColor = "gray"
        Etc.style.backgroundColor = "gray"
    })

    /* 2. Products 클릭하면 */
    Products.addEventListener("click", () => {
        h1.textContent = "Products"
        p.textContent = "Building tailored software to address critical needs of global enterprises."
        header.style.backgroundColor = "green"
        About.style.backgroundColor = "gray"
        Products.style.backgroundColor = "green"
        Technology.style.backgroundColor = "gray"
        Downloads.style.backgroundColor = "gray"
        Etc.style.backgroundColor = "gray"
    })

    /* 3. Technology 클릭하면 */
    Technology.addEventListener("click", () => {
        h1.textContent = "Technology"
        p.textContent = "Machine Learning, Artificial Intelligent, Cloud Platform."
        header.style.backgroundColor = "blue"
        About.style.backgroundColor = "gray"
        Products.style.backgroundColor = "gray"
        Technology.style.backgroundColor = "blue"
        Downloads.style.backgroundColor = "gray"
        Etc.style.backgroundColor = "gray"
    })

    /* 4. Downloads 클릭하면 */
    Downloads.addEventListener("click", () => {
        h1.textContent = "Downloads"
        p.textContent = "You can download a free 10 days trial."
        header.style.backgroundColor = "orange"
        About.style.backgroundColor = "gray"
        Products.style.backgroundColor = "gray"
        Technology.style.backgroundColor = "gray"
        Downloads.style.backgroundColor = "orange"
        Etc.style.backgroundColor = "gray"
    })

    /* 5. Etc 클릭하면 */
    Etc.addEventListener("click", () => {
        h1.textContent = "Etc"
        p.textContent = "Everything is fine."
        header.style.backgroundColor = "pink"
        About.style.backgroundColor = "gray"
        Products.style.backgroundColor = "gray"
        Technology.style.backgroundColor = "gray"
        Downloads.style.backgroundColor = "gray"
        Etc.style.backgroundColor = "pink"
    })
  })

  /* 빨강 초록 파랑 주황 분홍순으로 변함 */