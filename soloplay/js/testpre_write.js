document.addEventListener("DOMContentLoaded", () => {
    const Title = document.getElementById("title")
    const Name = document.getElementById("name")
    const 작성버튼 = document.getElementById("summit")

    /* 1. arr에 localStroage input속성에 값이 있으면 빈배열 출력 */
    
    // 아래 구문에서 푸쉬할 예정 => 제일 상단에 있지만 제일 마지막 느낌임
    let arr = JSON.parse(localStorage.getItem('input')) ?? []

    /* 작성버튼을 누르면 -> localStroage에 저장되게하는 부분 */
    작성버튼.addEventListener('click', () => {
      
      /* 날짜를 받아오기 위해서 */
      /* new Date() 사용 => 'today.get~()'를 사용하기 위해 */
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;  // 월(0~11까지 돌아서 +1)
      let date = today.getDate();

      /* 값을 입력 하지 않으면 alert로 경고문구 띄우기 */
      if (Title.value == "") {
        alert('제목을 입력해주세요.');
        Title.focus();
      } else if (Name.value == "") {
        alert('작성자를 입력해주세요.');
        Name.focus();
      } else {
        /* 1-1. arr배열에 객체 형식으로 밀어주기 */
        arr.push({ 
          제목: Title.value, 
          작성자: Name.value, 
          작성일자: year + '/' + month + '/' + date })

          /* 1-2. 앞서 push받은 자료들을 localStorage input속성에 저장 */
          localStorage.setItem('input', JSON.stringify(arr))
  
        /* 1-3. 저장 후 input, textarea태그 내용 비우기(잔존 데이터 제거) */
        Title.value = '';
        Name.value = '';
      }
    })
  })