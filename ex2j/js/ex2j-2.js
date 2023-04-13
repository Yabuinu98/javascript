const input = prompt('숫자을 입력해주세요')
let list = ``
    list += `<p>입력하신 ${input}값은 ${typeof input} 타입입니다.<br>이 타입을 Number()를 사용하여 숫자로 변환하겠습니다.</p>`
    list += `<p><mark>변환 완료 : ${Number(input)}(타입:${typeof Number(input)})</mark></p>`
    list += `<p>이제 위 숫자 타입을 Boolean()를 사용하여 불리언으로 변환하겠습니다.</p>`
    list += `<p>위의 숫자 : ${Number(input)}는 ${typeof Number(input)} 타입으로 불리언 타입으로 변환하면 이렇게 됩니다.</p>`
    list += `<p><mark>변환완료 : ${!!Number(input)}(타입:${typeof !!Number(input)})</mark></p>`

document.write(list)