document.addEventListener("DOMContentLoaded", () => {
    const Title = document.getElementById("title")
    const Discription = document.getElementById("discription")
    const Name = document.getElementById("name")
    const 작성버튼 = document.getElementById("summit")

    let arr = JSON.parse(localStorage.getItem('input')) ?? []

    작성버튼.addEventListener('click', () => {
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let date = today.getDate();

      if (Title.value == "") {
        alert('제목을 입력해주세요.');
        Title.focus();
      } else if (Name.value == "") {
        alert('작성자를 입력해주세요.');
        Name.focus();
      } else {
        arr.push({ 
          제목: Title.value, 
          내용: Discription.value,
          작성자: Name.value, 
          작성일자: year + '/' + month + '/' + date })
          localStorage.setItem('input', JSON.stringify(arr))
          Title.value = '';
          Discription.value = '';
          Name.value = '';
      }
    })
  })