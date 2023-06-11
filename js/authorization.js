let nicknameInpAuth = document.querySelector(`#exampleInputNick1`)
let passInpAuth = document.querySelector(`#exampleInputPassword1`)
const authBut = document.querySelector(`#authBut`)
authBut.addEventListener("click", async () => {
    let data = await usersOfCinemania
    console.log(data);
    for (let person of data) {
        console.log(person.id);
        if (person.firstName == nicknameInpAuth.value && passInpAuth.value == person.lastName) {
            localStorage.setItem(`authorizedUser`, person.id);
            location.href = "../index.html";
        }
    }
});