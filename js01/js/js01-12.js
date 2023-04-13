let input = prompt('값을 지정해주시오.')
let list = ``
list += `<h1>논리연산자</h1>`
list += `<h2>입력하신 <mark>${input}</mark> 에 대한 결과를 표로 나타내면</h2>`
list += `<table>`;
list += `<tr><th>&&연산</th><th>연산</th><th>값</th><th>결과</th></tr>`;
list += `<tr><td><mark>${input}</mark></td><td>&&</td><td>false</td><td>${false&&input}</td></tr>`;
list += `<tr><td><mark>${input}</mark></td><td>&&</td><td>true</td><td>${true&&input}</td></tr>`;
list += `<tr><th>||연산</th><th>연산</th><th>값</th><th>결과</th></tr>`;
list += `<tr><td><mark>${input}</mark></td><td>||</td><td>false</td><td>${false||input}</td></tr>`;
list += `<tr><td><mark>${input}</mark></td><td>||</td><td>true</td><td>${true||input}</td></tr>`;
list += `</table>`;
document.write(list)