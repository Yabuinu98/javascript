
document.addEventListener("DOMContentLoaded", () => {
    /* 태그선택 해놓기 */
    const allbox = document.getElementById("all_box") // 일번표 전체 부분
    const h1 = document.querySelector("h1")
    const input = document.getElementById("listcontent") // 입력상자 부분
    const addlist_btn = document.getElementById("add") // 일정추가 버튼
    const selectdel_btn = document.getElementById("select_del") // 선택삭제 버튼
    const clear_btn = document.getElementById("clear") // 모두삭제 버튼
    
    /* 변수 저장소 */
    let check = "" // 체크상태인지 아닌지

    // 추가하기 버튼을 누르면 입력한 일정이 추가되기
    addlist_btn.addEventListener("click", (e) => {
        const text = input.value // 입력값 받아놓기
        if(text !== ""){
        const todos = document.createElement("div") // 추가 일정 전체 감쌀 div
        const ckbox = document.createElement("input") // 체크박스 용도
        const span = document.createElement("span") // 할일내용이 들어갈 자리
        const complete_btn = document.createElement("button") // 완료 버튼
        todos.className = "todo"
        allbox.appendChild(todos).append(ckbox, span, complete_btn)
        ckbox.setAttribute("type", "checkbox")
        span.textContent = text
        complete_btn.textContent = "완료"
        } else{
            /* 입력값이 없다면 내용을 입력해주세요 출력 후 입력 시작시 원래대로 */
            h1.textContent = "내용을 입력해주세요"
            input.addEventListener("keyup", () => {
                h1.textContent = "오늘의 일정 목록"
            })
        }
    })
})