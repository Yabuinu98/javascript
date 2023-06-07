document.addEventListener("DOMContentLoaded", () => {
    /* header파트 */
    const header = document.querySelector(".header")
    const h1 = document.querySelector("h1")
    const p = document.querySelector("p")

    /* nav파트 */
    const [About, Products, Technology, Downloads, Etc] = document.querySelectorAll(".nav>div")


    /* 자동으로 넘어가게하기(ex17j 참고) */
    function tomato() {
        h1.textContent = "About";
        p.textContent = "Custom Software Development Company";
        header.style.backgroundColor = "tomato";
        About.style.backgroundColor = "tomato";
        Etc.style.backgroundColor = "gray"
        setTimeout(green, 1 * 1000);
      }
    function green(){
        h1.textContent = "Products"
        p.textContent = "Building tailored software to address critical needs of global enterprises."
        header.style.backgroundColor = "green"
        Products.style.backgroundColor = "green"
        About.style.backgroundColor = "gray"
        setTimeout(blue, 1*1000)
    }
    function blue(){
        h1.textContent = "Technology"
        p.textContent = "Machine Learning, Artificial Intelligent, Cloud Platform."
        header.style.backgroundColor = "blue"
        Technology.style.backgroundColor = "blue"
        Products.style.backgroundColor = "gray"
        setTimeout(orange, 1*1000)
    }
    function orange(){
        h1.textContent = "Downloads"
        p.textContent = "You can download a free 10 days trial."
        header.style.backgroundColor = "orange"
        Downloads.style.backgroundColor = "orange"
        Technology.style.backgroundColor = "gray"
        setTimeout(pink, 1*1000)
    }
    function pink(){
        h1.textContent = "Etc"
        p.textContent = "Everything is fine."
        header.style.backgroundColor = "pink"
        Etc.style.backgroundColor = "pink"
        Downloads.style.backgroundColor = "gray"
        setTimeout(tomato, 1*1000)
    }
    tomato() // 트리거 역할
    })