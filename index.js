function printDetails(){
    localStorage.setItem('Name',document.getElementById('idx1').value)
    localStorage.setItem('Email',document.getElementById('idx2').value)
    localStorage.setItem('Phone',document.getElementById('idx3').value)
    localStorage.setItem('Date',document.getElementById('idx4').value)
    localStorage.setItem('Time',document.getElementById('idx5').value)
    console.log(localStorage.getItem('Name'));
    console.log(localStorage.getItem('Email'));
    console.log(localStorage.getItem('Phone'));
    console.log(localStorage.getItem('Date'));
    console.log(localStorage.getItem('Time'));
}