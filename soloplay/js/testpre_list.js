document.addEventListener("DOMContentLoaded", () => {
    const Content = document.getElementById("content")

    /* localstorage를 받아오기 */
    let array = JSON.parse(localStorage.getItem("input"))
    
    /* localstorage를 뿌려주기 */
    for(let i = 0; i < array.length; i++){
        /* div5개 생성하는걸 for문으로 돌리기 */
        for(let j = 1; j<=5; j++){
            const div = document.createElement("div")
            div.setAttribute("id", "incontent" + j)
            // const incontentj = document.getElementById("incontent"+j)
        }

        /* 생성된 div5개에 */
        // Content.append(div)
        // td1.textContent = i+1
        // td2.textContent = array[i].제목
        // td3.textContent = array[i].작성자
        // td4.textContent = 999
        // td5.textContent = array[i].작성일자
    }
})