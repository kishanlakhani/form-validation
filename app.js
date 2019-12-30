
window.onload= ()=>{
    console.log("load")
    if(document.getElementById("yes").value == "yes"){
        document.getElementById("no").checked = true;
        document.getElementById("select").selected  = true;

    }
    // document.getElementById('gameSelectItem').getElementsByTagName('option')[10].selected = 'selected';
}
    // return document.getElementsByName("no").checked = true;




    let first ='';
    let last ='';
    let user ='';
    let mobile ='';
    let em = '';
    let gm = '';




    function getSelectValue(){
        console.log(document.getElementById("gameSelectItem").value);
    }
function validation(e){
    

    // input value
    document.getElementById("showData").style.display = "none";
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let userName = document.getElementById("userName").value;
    let mobileNumber= document.getElementById("mobileNumber").value;
    let email = document.getElementById("email").value;
    // let sportsRadioButton = document.getElementsByName("sports").value;
    let sportsRadioButton = "";

    let showData = document.getElementById("showData");

    let game = "";
    // let gameItem = game.options[game.selectedIndex].value;

    // console.log(gameSelectItem);

    // console.log(gameSelectItem); 

    // reg expression
    let nameReg = /^[a-zA-Z]{5,20}$/;
    let userReg = /^.{5,20}$/;
    let mobileReg = /^\d{10}$/;
    let emailReg = /^\w{2,20}@\w{2,15}.\w{2,3}$/;

    // first name validation
    if(!nameReg.test(firstName)){
        document.getElementById("firstNameError").innerHTML = "First Name is required and length between 5 to 20 and only character.";
        return false
    }else{
        document.getElementById("firstNameError").innerHTML = "";
        // last name validation
        if(!nameReg.test(lastName)){
            document.getElementById("lastNameError").innerHTML = "Last Name is required and length between 5 to 20 and only character.";
            return false
        }else{
            document.getElementById("lastNameError").innerHTML = "";
            // user name validation
            if(!userReg.test(userName)){
                document.getElementById("userNameError").innerHTML = "User Name is required and length between 5 to 20.";
                return false
            }else{
                document.getElementById("userNameError").innerHTML = "";
                // mobile number validation
                if(!mobileReg.test(mobileNumber)){
                    document.getElementById("mobileNumberError").innerHTML = "Please enter valid number";
                    return false;
                }else{
                    document.getElementById("mobileNumberError").innerHTML = "";
                    if(!emailReg.test(email)){
                        document.getElementById("emailError").innerHTML = "Please enter valid email address";
                        return false
                    }else{
                        document.getElementById("emailError").innerHTML = "";

                        // sport radio button 
                        if(document.getElementById("yes").checked == true){
                            sportsRadioButton = "yes"
                            document.getElementById("game").style.display = "block";

                            // game select button
                            if(document.getElementById("gameSelectItem").value == ""){
                                document.getElementById("gameError").innerHTML = "Please select any one game";
                                
                                return false;

                            }else{
                                document.getElementById("gameError").innerHTML = "";
                                game = document.getElementById("gameSelectItem").value;
                                console.log(game);
                            }
                            // console.log(document.getElementById("gameSelectItem").value == "");

                        }else{
                            
                            sportsRadioButton = "no"
                            game = "You are not interested in any game";
                            document.getElementById("game").style.display = "none";


                        }
                        document.getElementById("showData").style.display = "block";
                        document.getElementById("firstNameShow").innerHTML = "First Name : " + firstName;
                        document.getElementById("lastNamwShow").innerHTML = "Last Name : " + lastName;
                        document.getElementById("userNameShow").innerHTML = "User Name : " + userName;
                        document.getElementById("mobileNumberShow").innerHTML = "Mobile Number :"  + mobileNumber;
                        document.getElementById("emailShow").innerHTML = "Email : " + email;
                        document.getElementById("sportsInterestShow").innerHTML = "Sports Interest : " + sportsRadioButton;
                        document.getElementById("gameShow").innerHTML = "Game : " + game;

                    }
                }
            }
        }
    }
      

}




function showData(){
    console.log(first);
}
