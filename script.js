
let numberInput = document.getElementById('tabulation-input');
let arrTitles = ['Positive','Negative','Natural'];
let submitInput = document.getElementById('tabulation-btn');
let textTitle = '';
let titles = document.querySelectorAll('.card-item ul li');
let fillHtmlTitle = document.querySelector('#root span');

for (let i = 0; i < titles.length; i++) {
    titles[i].onclick = () => {
        for (let j = 0; j < titles.length; j++) {
            titles[j].classList.remove('active')
        }
        titles[i].classList.add('active');
            textTitle = titles[i].textContent;
            textTitle = [...textTitle];
            textTitle[0] = textTitle[0].toUpperCase();
            textTitle = textTitle.join('')
            fillHtmlTitle.innerHTML = textTitle;
    };
};

numberInput.addEventListener('input', (e) => {
    let num = '';
    num = e.target.value;
    if(num < 1) e.target.value = ''
    submitInput.onclick = () => {
        e.target.value = '';
        if(num <= 3){
        fillHtmlTitle.innerHTML = arrTitles[num-1];
        for (let i = 0; i < titles.length; i++) {
            titles[i].classList.remove('active');
        }
        titles[num-1].classList.add('active')
        }
        
        else{
            alert('index is invalid')
        }
    }
   
})



let switchBtn = document.querySelector('.rocker-small');
let finish = false;
switchBtn.onclick = () => {
    finish = !finish;
    if(finish){
        document.body.style.backgroundColor = 'rgb(136, 36, 136)';
        document.querySelector('.switches').style.left = '40px';
        document.querySelector('.card-item').style.display = 'none';
        document.querySelector('.card-item-two').style.display = 'block';

    }
    else {
        document.body.style.backgroundColor = '#1a78b6';
        document.querySelector('.switches').style.left = '0px';
        document.querySelector('.card-item').style.display = 'block';
        document.querySelector('.card-item-two').style.display = 'none';
    }
}





let cardTwoList = document.querySelectorAll('.card-flex ul li');
let cardTwoTitle = document.querySelector('.title');
let cardTwoBtnBack = document.querySelector('.card-two-btn-back');
let cardTwoBtnSubmit = document.querySelector('.card-two-btn');

for (let i = 0; i < cardTwoList.length; i++) {
    cardTwoList[i].onclick = () => {
        if(i === 0){
            cardTwoTitle.innerHTML = 'Choose title content';
            cardTwoBtnBack.style.display = 'none';
            cardTwoBtnSubmit.innerHTML = 'Submit title';
            cardTwoList[i].classList.add('active');
            cardTwoList[i+1].classList.remove('active');
        }
        else if(i === 1){
            cardTwoTitle.innerHTML = 'Choose description content';
            cardTwoBtnBack.style.display = 'block';
            cardTwoBtnBack.innerHTML = 'back';
            cardTwoBtnSubmit.innerHTML = 'Submit description';
            cardTwoList[i].classList.add('active');
            cardTwoList[i+1].classList.remove('active');
        }
        else if(i === 2 && cardTwoList[1].classList.contains('active')){
            cardTwoTitle.innerHTML = 'Are you happy now?';
            cardTwoBtnBack.innerHTML = 'No, go back';
            cardTwoBtnSubmit.innerHTML = 'Yes, go head'
            cardTwoList[i].classList.add('active');
        }
        
        
    }
}



cardTwoBtnSubmit.onclick = () => {
    if(cardTwoList[0].className !== 'active'){
        cardTwoList[0].classList.add('active');
        cardTwoTitle.innerHTML = 'Choose title content';
        cardTwoBtnBack.style.display = 'none';
        cardTwoBtnSubmit.innerHTML = 'Submit title';
    }
    else if(cardTwoList[1].className !== 'active'){
        cardTwoTitle.innerHTML = 'Choose description content';
            cardTwoBtnBack.style.display = 'block';
            cardTwoBtnBack.innerHTML = 'back';
            cardTwoBtnSubmit.innerHTML = 'Submit description';
            cardTwoList[1].classList.add('active');
            cardTwoList[2].classList.remove('active');
    }
    else if(cardTwoList[2].className !== 'active'){
        cardTwoTitle.innerHTML = 'Are you happy now?';
        cardTwoBtnBack.innerHTML = 'No, go back';
        cardTwoBtnSubmit.innerHTML = 'Yes, go head'
        cardTwoList[2].classList.add('active');
    }
    else if(cardTwoList[2].className === 'active'){
        cardTwoTitle.innerHTML = "Ok, we're done. Thanks for sending us your data!";
        cardTwoBtnBack.innerHTML = '';
        cardTwoBtnSubmit.innerHTML = '';
    }
}

cardTwoBtnBack.onclick = () => {
    if(cardTwoList[2].className === 'active'){
        cardTwoList[2].classList.remove('active');
        cardTwoTitle.innerHTML = 'Choose description content';
            cardTwoBtnBack.style.display = 'block';
            cardTwoBtnBack.innerHTML = 'back';
            cardTwoBtnSubmit.innerHTML = 'Submit description';
    }
    else if(cardTwoList[1].className === 'active'){
        cardTwoTitle.innerHTML = 'Choose description content';
            cardTwoBtnBack.style.display = 'block';
            cardTwoBtnBack.style.display = 'none'
            cardTwoBtnSubmit.innerHTML = 'Submit title';
            cardTwoList[1].classList.remove('active');
    }
    else return;
}