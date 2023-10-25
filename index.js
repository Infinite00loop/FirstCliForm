var list=document.getElementById('list-items');

list.addEventListener('click',removeElement);

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/057c1b800809490aadf6f4857249d836/appointments')
    .then(
        (response)=>{
            console.log(response);
            for(var i=0;i<response.data.length;i++){
                showData(response.data[i]);
            }
        }
    )
    .catch(
        (err)=>console.log(err)
    )
})


function onSignUp(){
    var name_=document.getElementById('idx1').value;
    var email_=document.getElementById('idx2').value;
    var phone_=document.getElementById('idx3').value;

    let myObj={
        name:name_,
        email:email_,
        phone:phone_
    };
    axios.post('https://crudcrud.com/api/057c1b800809490aadf6f4857249d836/appointments',myObj)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
    // var myObjSerial=JSON.stringify(myObj);
    // localStorage.setItem(email_,myObjSerial);
    showData(myObj);


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

function showData(obj){
    var newList=document.createElement('li');
    var text=obj.name+" - "+obj.email+" - "+obj.phone+" - ";
    newList.appendChild(document.createTextNode(text));
    var delButton=document.createElement('button');
    delButton.className='delete';
    delButton.appendChild(document.createTextNode('Delete'));
    newList.appendChild(delButton);
    var editButton=document.createElement('button');
    editButton.className='edit';
    editButton.appendChild(document.createTextNode('Edit'));
    newList.appendChild(editButton);
    list.appendChild(newList);
}
function removeElement(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to delete ?')){
            var li=e.target.parentElement;
            var email_=li.textContent.split(" - ")[1];
            console.log(email_)
            axios.get('https://crudcrud.com/api/057c1b800809490aadf6f4857249d836/appointments',{
                params:{email: email_}
            })
            .then(
                (response)=>{
                    console.log(response);
                    for(var i=0;i<response.data.length;i++){
                        if(response.data[i].email==email_)
                        axios
                        .delete(`https://crudcrud.com/api/057c1b800809490aadf6f4857249d836/appointments/${response.data[i]._id}`)
                        .then(res=>console.log(res))
                        .catch(err=>console.log(err))
                    }
                }
            )
            .catch(
                (err)=>console.log(err)
            )
            list.removeChild(li)
        }
    }
    else if(e.target.classList.contains('edit')){
        var li=e.target.parentElement;
        const arr=li.textContent.split(" - ");
        var email=arr[1];
        localStorage.removeItem(email);
        document.getElementById('idx1').value=arr[0]
        document.getElementById('idx2').value=arr[1]
        document.getElementById('idx3').value=arr[2]
        list.removeChild(li);
    }
}