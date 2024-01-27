// 변수 설정
const signForm = document.getElementById("sign-form");
const signBtn = document.getElementById("sign-submit");
let errorMsg = document.getElementById("error-message");

// 이벤트 함수
signBtn.addEventListener('click', (event) =>  {
    event.preventDefault();
    const username = signForm.username.value;
    const password = signForm.password.value;

    if (username  ===  "happyuser"  && password  === "password1234") {
        alert("WELCOME, HAPPYUSER")
    } else {
        errorMsg.innerHTML = "Try Again"
    }
});
