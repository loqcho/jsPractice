// 변수 설정
let eventBtn = document.getElementById("eventBtn");
let resetBtn = document.getElementById("resetBtn");
let body = document.body;

// 이벤트 함수
function changeEvent() {
    // eventBtn 클릭시 배경화면 색상과 버튼의 색상 변경
    body.style.backgroundColor = 'skyblue';
    eventBtn.style.backgroundColor = 'darkkhaki';
    eventBtn.style.color = 'black';
    resetBtn.style.backgroundColor = 'black';
    resetBtn.style.color = 'white';
}

// 리셋 함수
function resetEvent() {
    // resetBtn 클릭시 컬러 초기값으로 재설정
    body.style.backgroundColor = 'antiquewhite';
    eventBtn.style.backgroundColor = 'royalblue';
    eventBtn.style.color  = 'aliceblue';
    resetBtn.style.backgroundColor = 'ghostwhite';
    resetBtn.style.color = 'darkkhaki';
}
