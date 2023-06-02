document.addEventListener("DOMContentLoaded", () => {
    /* header파트 */
    let header = document.querySelector(".header")
    let content = document.querySelector(".content")

    /* nav파트 */
    let About = document.querySelector("#nav1")
    let Products = document.querySelector("#nav2")
    let Technology = document.querySelector("#nav3")
    let Downloads = document.querySelector("#nav4")
    let Etc = document.querySelector("#nav5")

    
    /* 1. About 클릭하면 */
    About.addEventListener("click", () => {
        content.parentNode.removeChild(content)
        const div = document.createElement("div")
        const h1 = document.createElement("h1")
        const p = document.createElement("p")
        header.appendChild(div).append(h1, p)
        div.className = "content"
        div.setAttribute("id", "About")
        h1.textContent = "About"
        p.textContent = "Custom Software Development Company"
    })

    /* 2. Products 클릭하면 */
    Products.addEventListener("click", () => {
        content.parentNode.removeChild(content)
        const div = document.createElement("div")
        const h1 = document.createElement("h1")
        const p = document.createElement("p")
        header.appendChild(div).append(h1, p)
        div.className = "content"
        div.setAttribute("id", "Products")
        h1.textContent = "Products"
        p.textContent = "Building tailored software to address critical needs of global enterprises."
    })

    /* 3. Technology 클릭하면 */
    Technology.addEventListener("click", () => {
        content.parentNode.removeChild(content)
        const div = document.createElement("div")
        const h1 = document.createElement("h1")
        const p = document.createElement("p")
        header.appendChild(div).append(h1, p)
        div.className = "content"
        div.setAttribute("id", "Technology")
        h1.textContent = "Technology"
        p.textContent = "Machine Learning, Artificial Intelligent, Cloud Platform."
    })

    /* 4. Downloads 클릭하면 */
    Downloads.addEventListener("click", () => {
        content.parentNode.removeChild(content)
        const div = document.createElement("div")
        const h1 = document.createElement("h1")
        const p = document.createElement("p")
        header.appendChild(div).append(h1, p)
        div.className = "content"
        div.setAttribute("id", "Downloads")
        h1.textContent = "Downloads"
        p.textContent = "You can download a free 10 days trial."
    })

    /* 5. Etc 클릭하면 */
    Etc.addEventListener("click", () => {
        content.parentNode.removeChild(content)
        const div = document.createElement("div")
        const h1 = document.createElement("h1")
        const p = document.createElement("p")
        header.appendChild(div).append(h1, p)
        div.className = "content"
        div.setAttribute("id", "Etc")
        h1.textContent = "Etc"
        p.textContent = "Everything is fine."
    })
  })

  /* 빨강 초록 파랑 주황 분홍순으로 변함 */