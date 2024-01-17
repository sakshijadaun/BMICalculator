const form = document.querySelector('form');

form.addEventListener('submit', (e) => {

    //this will stop to automatically submit or default behaviour
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === "" || height <= 0 || Number.isNaN(height)){
        results.innerHTML = "Please give a valid height value"
    }else if(weight === "" || weight <= 0 || Number.isNaN(weight)){
        results.innerHTML = "Please give a valid weight value"
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML =  `<span>${bmi}</span>`;

        if(bmi < 18.6){
            results.innerHTML += "You are underWeight"
        }else if(bmi >= 18.6 && bmi <= 24.9){
            results.innerHTML += "You are fit"
        }else{
            results.innerHTML += "You are overweight"
        }
    }
   
});

//Notes
//1 - e.preventDefault() stop the default behaviour of form after click on submit it waits till the bmi calculated

//2 - For add the text to innerHTML we use += . If we only write = then it over write the result and result will be not shown on the screen

//3 - we should not write  // const height = parseInt(document.querySelector('#height').value);
                       // const weight = parseInt(document.querySelector('#weight').value);
//these two lines outside the eventListener becuase it takes empty value before clicking on submit button or after loading javascript code                       

