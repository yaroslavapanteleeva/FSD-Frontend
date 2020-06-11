let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle);
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose);
  });

  function selectToggle() {
      this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.select'),
          currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');

  }

};

select();

function task1() {

    let span = document.querySelectorAll('#val');
    let btn = document.querySelector('.btn .btn__switch');
    let result = document.querySelector('.select__header .select__current');
  
  
    btn.addEventListener('click', resultBtn);
  
    function resultBtn() {
      let inputSum = 0;
  
      for (let i = 0; i < span.length; i++) {
  
        inputSum += +span[i].value;
      }
      result.value = inputSum;
    }

    console.log('Hekko');
  
}

task1();

