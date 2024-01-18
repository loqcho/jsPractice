// 변수 설정
let eventBtn = document.getElementById("eventBtn");
let resetBtn = document.getElementById("resetBtn");
let body = document.body;

// 이전에 사용된 컬러 인덱스 저장 변수
let prevColorIndex = -1;

//  초기 컬러 세팅
let initialColorSet = {
    backgroundColor:'antiquewhite',
    buttonColor: 'royalblue',
    buttonTextColor: 'aliceblue',
    resetColor: 'aliceblue',
    resetTestColor: 'darkkhaki'
};

// 랜덤 컬러 세트 배열
let colorSets = [
    {
        backgroundColor:'darkkhaki',
        buttonColor: 'black',
        buttonTextColor: 'aliceblue',
        resetColor: 'aliceblue',
        resetTextColor: 'black',
        buttonText: 'LUCKY DAY'
    },
    {
        backgroundColor:'royalblue',
        buttonColor: 'antiquewhite',
        buttonTextColor: 'royalblue',
        resetColor: 'aliceblue',
        resetTextColor: 'royalblue',
        buttonText: 'GOOD DAY'
    },
    {
        backgroundColor:'lavenderblush',
        buttonColor: 'crimson',
        buttonTextColor: 'aliceblue',
        resetColor: 'ghostwhite',
        resetTextColor: 'crimson',
        buttonText: 'SPACIAL DAY'
    }
];



// 이벤트 함수
function changeEvent() {
    // eventBtn 클릭시 랜덤한 컬러 세트로 화면 출력
    // 중복되지 않는 랜덤 인덱스 선택
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * colorSets.length);
    } while (randomIndex === prevColorIndex);

    // 선택된 컬러 세트 적용
    let selectedColorSet = colorSets[randomIndex];
    applyColorSet(selectedColorSet);
    // 이벤트 버튼 텍스트 업데이트
    eventBtn.textContent = selectedColorSet.buttonText;
    // 이전 인덱스 업데이트
    prevColorIndex =  randomIndex;
}

// 리셋 함수
function resetColors() {
    // resetBtn 클릭시 컬러 초기값으로 재설정
    applyColorSet(initialColorSet);
    // 이벤트 버튼 텍스트 초기화
    eventBtn.textContent = 'HAPPY NEW YEAR';
    // 컬러 세트 인덱스 초기화
    prevColorIndex = -1;
}

// 랜덤 컬러 세트 적용
function applyColorSet(colorSet) {
    body.style.backgroundColor = colorSet.backgroundColor;
    eventBtn.style.backgroundColor = colorSet.buttonColor;
    eventBtn.style.color = colorSet.buttonTextColor;
    resetBtn.style.backgroundColor = colorSet.resetColor;
    resetBtn.style.color = colorSet.resetTextColor;
}