var list=document.getElementById('list-items');

list.addEventListener('click',removeElement);


function onSignUp(){
    var name_=document.getElementById('idx1').value;
    var email_=document.getElementById('idx2').value;
    var phone_=document.getElementById('idx3').value;

    let myObj={
        name:name_,
        email:email_,
        phone:phone_
    };

    var myObjSerial=JSON.stringify(myObj);
    localStorage.setItem(email_,myObjSerial);

    var newList=document.createElement('li');
    var text=name_+" - "+email_+" - "+phone_;
    newList.appendChild(document.createTextNode(text));
    var delButton=document.createElement('button');
    delButton.className='delete';
    delButton.appendChild(document.createTextNode('Delete'));
    newList.appendChild(delButton);
    list.appendChild(newList);

    // localStorage.setItem('Name',document.getElementById('idx1').value)
    // localStorage.setItem('Email',document.getElementById('idx2').value)
    // localStorage.setItem('Phone',document.getElementById('idx3').value)
    // localStorage.setItem('Date',document.getElementById('idx4').value)
    // localStorage.setItem('Time',document.getElementById('idx5').value)
    // console.log(localStorage.getItem('Name'));
    // console.log(localStorage.getItem('Email'));
    // console.log(localStorage.getItem('Phone'));
    // console.log(localStorage.getItem('Date'));
    // console.log(localStorage.getItem('Time'));

}

// let myObj= {
//     name : 'Sam',
//     age: '20'
// };

// let myObjSerialized=JSON.stringify(myObj);
// localStorage.setItem('myObj',myObjSerialized);
// console.log(localStorage.getItem('myObj'))
// let myObjDeserialized=JSON.parse(localStorage.getItem('myObj'));
// console.log(myObjDeserialized)

function removeElement(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to delete ?')){
            var li=e.target.parentElement;
            var email=li.textContent.split(" - ")[1];
            localStorage.removeItem(email);
            list.removeChild(li);
        }
    }
}