document.addEventListener("DOMContentLoaded", () => {
    const Content = document.getElementById("content")

    /* localstorage를 받아오기 */
    let array = JSON.parse(localStorage.getItem("input"))
    
    /* localstorage를 뿌려주기 */
    for(let i = 0; i < array.length; i++){
        let div = document.createElement("div")
        let span1 = document.createElement("span")
        const a = document.createElement("a")
        let span2 = document.createElement("span")
        let span3 = document.createElement("span")
        let span4 = document.createElement("span")
        let span5 = document.createElement("span")
        let span6 = document.createElement("span")
        Content.appendChild(div).append(span1, a, span3, span4, span5, span6)
        a.appendChild(span2)
        a.setAttribute("href", "./testpre_home.html")
        // div.setAttribute("id", "content" + (i + 1))

        span1.textContent = i+1
        span2.textContent = array[i].제목
        span3.textContent = array[i].작성자
        span4.textContent = array[i].작성일자
        span5.textContent = 999
        span6.textContent = 999
    }
})