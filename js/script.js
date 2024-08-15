//ini javascrip
/*console.log('Linked sucses');


function formValidate(){
    let inputWeight = document.getElementById('input-weight').value;
    console.log('isi inputan berat badan: &(inputweight)');
    if (inputWeight == '') {
        alert('inputan Berat Badan Kosong!');
    }
    console.log('form submitted');
}*/


/*cplt

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid numbers for height and weight.');
        return;
    }

    const bmi = weight / (height * height);
    const bmiResult = document.getElementById('bmi-result');
    const bmiStatus = document.getElementById('bmi-status');

    bmiResult.textContent = `BMI Anda: ${bmi.toFixed()}`;

    if (bmi < 18.5) {
        int.textContent = 'Status: Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        int.textContent = 'Status: Normal (ideal)';
    } else if (bmi >= 25 && bmi <= 29.9) {
        int.textContent = 'Status: Kelebihan berat badan';
    } else {
        bmiStatus.textContent = 'Status: Kegemukan (Obesitas)';
    }
        
    
    
}*/


//cplt2 

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid numbers for height and weight.');
        return;
    }

    const bmi = weight / (height * height);
    const bmiResult = document.getElementById('bmi-result');
    const bmiStatus = document.getElementById('bmi-status');

    bmiResult.textContent = `BMI Anda: ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
        bmiStatus.textContent = 'Status: Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiStatus.textContent = 'Status: Normal (ideal)';
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiStatus.textContent = 'Status: Kelebihan berat badan';
    } else {
        bmiStatus.textContent = 'Status: Kegemukan (Obesitas)';
    }


}


function consultNutritionist() {
    alert('');

}

function registerOnline() {
    alert('');
    
}
