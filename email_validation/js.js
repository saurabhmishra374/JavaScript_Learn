function validateForm(){
    var email = document.myForm.email.value;
    var atposition = email.indexOf('@')
    var dotposition = email.indexOf('.')
    if (atposition < 1 || dotposition < atposition+2 || dotposition+2 >= email.length){
        alert("email is not correct");
        return false;
    }
    
}