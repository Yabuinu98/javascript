document.addEventListener("DOMContentLoaded", () => {
    const Main = document.querySelector("main")
    const clearbtn = document.getElementById("clear")

    let Array = JSON.parse(localStorage.getItem("input"))
    
    for(let i = 0; i < Array.length; i++){
        let div = document.createElement("div")
        let span1 = document.createElement("span")
        const a = document.createElement("a")
        let span2 = document.createElement("span")
        let span3 = document.createElement("span")
        let span4 = document.createElement("span")
        Main.appendChild(div).append(span1, a, span3, span4)
        
        /* a태그로 감아서 내용을 모달로 보여주려했는데 실패했습니다.. */
        a.appendChild(span2)
        a.setAttribute("href", "./write.html")
        span1.textContent = i+1
        span2.textContent = Array[i].제목
        span3.textContent = Array[i].작성자
        span4.textContent = Array[i].작성일자
    }

    clearbtn.addEventListener("click", () => {
        localStorage.clear()
        location.reload()
    })
})