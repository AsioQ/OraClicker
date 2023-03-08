let input = document.querySelector(`.search-input`);
let btn = document.querySelector(`.search-btn`);
let body = document.querySelector(`#body1`);
let header = document.querySelector(`#header1`);

btn.addEventListener(`click`, function(){
    if(input.value == `Прикол`){
        body.style.padding = `500px`;
    }
    else if(input.value == `Акуна Матата`){
        body.style.backgroundColor = `black`;
    }
    else if(input.value == `Крутой эдит`){
        header.innerHTML += `<div class="flex-c1"><video src="assets/edit.mp4" controls></video></div>`;
    }
});