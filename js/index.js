
// send btn function
const sendSingleData=()=>{
    const nameField = document.getElementById('name-field');
     const inputName=nameField.value;
    nameField.value='';
    const  emailField = document.getElementById('email-field');
const inputEmail = emailField.value;
    emailField.value='';
    const  messageField = document.getElementById('message-field').value;
    messageField.value='';
    
    showUserInput(inputName,inputEmail,messageField);
    saveDataOnLocalStorage(inputName,inputEmail,messageField);
}

// add btn functions
const addSingleName=()=>{
    const nameField = document.getElementById('name-field');
    const inputName=nameField.value;
   nameField.value='';

//    showUserName(inputName);
showUserInput(inputName,inputEmail='',messageField='');
   saveDataOnLocalStorage(inputName,inputEmail='',messageField='');
// saveName(inputName);
}
const addSingleEmail=()=>{
    const  emailField = document.getElementById('email-field');
    const inputEmail = emailField.value;
        emailField.value='';
   showUserInput(inputName='',inputEmail,messageField='');
   saveDataOnLocalStorage(inputName='',inputEmail,messageField='');
}
const addSingleMessage=()=>{
    const  messageField = document.getElementById('message-field');
    const inputMessage =messageField.value
    messageField.value='';
   showUserInput(inputName='',inputEmail='',inputMessage);
   saveDataOnLocalStorage(inputName='',inputEmail='',inputMessage)
}
// -----------test function for name save and display from local storage-----------------------
  
// const showUserName=(inputName)=>{
//     const infoContainer = document.getElementById('info-container')
// const div =document.createElement('div');
// div.innerText=`
// ${inputName}
// `
// infoContainer.appendChild(div);
// }

// const saveName=(inputName)=>{
//     let name = {name:inputName}
// const username =JSON.stringify(name);
// localStorage.setItem('username',username);
// showUserNameOnUI();
// }
// const showUserNameOnUI=()=>{
//     const previousName = getSaveName();
//     let previousUserData =JSON.parse(localStorage.getItem('username'))
//     showUserInput(previousUserData.name);
// }
// ---------------------------------------------
// display user input
const showUserInput=(nameField,emailField,messageField)=>{
const infoContainer = document.getElementById('info-container')
const div =document.createElement('div');
div.innerText=`
${nameField}
${emailField}
${messageField}

`;
infoContainer.appendChild(div);

}
// get store data

const getSaveName=()=>{
    let username ={}
    const storeName = localStorage.getItem('username');
    if(storeName){
        username =JSON.parse(storeName);
    }
    return username;
}

const getSaveEmail=()=>{
    let useremail ={}
    const storeEmail = localStorage.getItem('useremail');
    if(storeEmail){
        useremail =JSON.parse(storeEmail);
    }
    return useremail;
}
const getSaveMessage=()=>{
    let usermessage ={}
    const storeMessage = localStorage.getItem('usermessage');
    if(storeMessage){
        usermessage=JSON.parse(storeMessage);
    }
    return usermessage;
}

const getSaveDataFromLocalStorage=()=>{
    let name ={}
    let email ={}
    let message ={}
    
    
   
    const storeName = localStorage.getItem('Name');
    if(storeName){
        name =JSON.parse(storeName);
    }
    const storeEmail = localStorage.getItem('userEmail');
    if(storeEmail){
        email =JSON.parse(storeEmail);
    }
    const storeMessage = localStorage.getItem('userMessage');
    if(storeMessage){
        message =JSON.parse(storeMessage);
    }
    return {name,email,message};
}

// save input data 


const saveDataOnLocalStorage=(nameField,email,message)=>{

    let alldata = {name:nameField,email,message}
    const data = JSON.stringify(alldata)
    localStorage.setItem('data',data);
   
    
let name = {name:nameField}
const username =JSON.stringify(name);
localStorage.setItem('username',username);

let Email = {email}
const useremail =JSON.stringify(email);
localStorage.setItem('useremail',useremail);

let msg = {message}
const Message =JSON.stringify(msg);
localStorage.setItem('message',message);


}

// ---------------------------
const displaySaveData = ()=>{
    const saveData =getSaveDataFromLocalStorage();
    console.log(saveData)
    let userData =JSON.parse(localStorage.getItem('data'))
    // console.log(x)
    // for(const singleData in saveData){

    // }
    showUserInput(userData.name,userData.email,userData.message);
}
displaySaveData()