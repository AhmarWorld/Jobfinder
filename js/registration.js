let regEmailInp = document.querySelector(`#exampleInputEmail1`)
let regNickInp = document.querySelector(`#exampleInputNickl1`)
let regPassInp = document.querySelector(`#exampleInputPassword1`)
let sendCode = document.querySelector("#sendCode");
let code_input = document.querySelector("#code");
let regBtn = document.querySelector(`#regBtn`)
let select = document.querySelector(`#exampleInputSelect1`)
let random = Math.floor(Math.random() * 9000) + 1000;
let inpDate = document.querySelector(`#exampleInputCalendar1`)
console.log(regEmailInp,select,inpDate, regNickInp, regPassInp, sendCode)
let date = new Date().getTime()
function doTime() {
    inpDate.setAttribute(`max`, `${new Date().getFullYear(date)}-${new Date().getMonth(date)}-${new Date().getDay(date)}`)
}
doTime()
sendCode.addEventListener("click", async () => {
    const templateParams = {
        from_name: "Ahmar World",
        to_email: regEmailInp.value,
        content: random,
    };
    emailjs.send("Ahmar_World", "template_06xep8a", templateParams).then(
        function (response) {
            console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
            console.log("FAILED...", error);
        }
    );
});

regBtn.addEventListener("click", () => {
    const enteredCode = parseInt(code_input.value);
    const first_name = regNickInp.value.trim();
    const last_name = regPassInp.value.trim();

    if (first_name === "" || last_name === "") {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    makeQuery(`user/create`, `POST`, {
        firstName: regNickInp.value,
        lastName: regPassInp.value,
        email: regEmailInp.value,
    });

    if (enteredCode === random) {
        location.href = "../authorization.html";
        alert("Suda!");
    }

});

async function getCity() {
    let response = await fetch(`https://namaztimes.kz/ru/api/states?id=99`)
    let data = await response.json()

    let country = Object.keys(data)
    for(let city of country){
        let option = document.createElement(`option`)
        option.innerHTML = `${city}`
        select.appendChild(option)
    }
    return data
}
getCity()