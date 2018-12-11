//returns true or false if the length is at least 8 character long
function lengthCheck(password){

  if(password.length >= 8){
    return true
  }
  else{
    return false;
  }
}

//returns true or false if there is an uppercase character in the password
function upperCaseCheck(password){

  for(let i = 0; i <= password.length; i++){

    if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90){
      return true;
    }
  }
  return false;
}

//returns true or false if there is an lowercase character in the password
function lowerCaseCheck(password){

  for(let i = 0; i <= password.length; i++){

    if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122){
      return true;
    }
  }
  return false;
}

//returns true or false if there is a numerical character
function numberCheck(password){

  for(let i = 0; i <= password.length; i++){

    if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
      return true;
    }
  }
  return false;
}

//returns true or false if there is a special character in the password
function specialCheck(check){

  for(let i = 0; i <= password.length; i++){

    if(password.charCodeAt(i) >= 33 && password.charCodeAt(i) <= 47 || password.charCodeAt(i) >= 58 && password.charCodeAt(i) <= 64 || password.charCodeAt(i) >= 91 && password.charCodeAt(i) <= 96 || password.charCodeAt(i) >= 123 && password.charCodeAt(i) <= 126){
      return true;
    }
  }
  return false;
}

function passedAllChecks(password){
  return lengthCheck(password) && upperCaseCheck(password) && lowerCaseCheck(password) && numberCheck(password) && specialCheck(password);
}

function superLengthCheck(password){

  if(password.length >= 20){
    return true
  }
  else{
    return false;
  }
}


//returns a string which represents the grade for your password
function grade(password){
  
  if(!lengthCheck(password)){
  return "very bad"
  }
  else if(!upperCaseCheck(password) || !lowerCaseCheck(password)){
  return "bad"
  }
  else if(!numberCheck(password)){
  return "okay"
  }
  else if(!specialCheck(check)){
  return "good"
  }
  else if(passedAllChecks(password)){
  return "great"
  }
  else if(passedAllChecks(password) && superLengthCheck(password)){
  return "super!"
  }
}
