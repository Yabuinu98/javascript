let num = prompt('값을 입력하시오')
let list = ''
    list += '<table>';
    list += '<tr><th>증감연산자</th><th>설명</th><th>예)let number ='+ num + '</th><th>순서</th></tr>';
    list += '<tr><td>변수++</td><td>기존의 변수에 1을 더합니다(후위)</td><td>console.log(number++) 답은:'+ num++ + '</td><td>1</td></tr>';
    list += '<tr><td>++변수</td><td>기존의 변수에 1을 더합니다(전위)</td><td>console.log(++number) 답은:' + ++num + '</td><td>2</td></tr>';
    list += '<tr><td>변수--</td><td>기존의 변수에 1을 뺍니다(후위)</td><td>console.log(number--) 답은:' + num-- + '</td><td>3</td></tr>';
    list += '<tr><td>--변수</td><td>기존의 변수에 1을 뺍니다(전위)</td><td>console.log(--number) 답은:' + --num + '</td><td>4</td></tr>';
    list += '</table>';
document.write(list)