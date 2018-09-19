function validate()
{
  let input = document.getElementById("Password1").value;
  let input2 = document.getElementById("Password2").value;
  if ((input.length<8) || (input2.length<8)){
    window.alert("Your passwords are not at least 8 characters long! ")
  }
  else if(input!=input2){
    window.alert("Your passwords do not match! ")
  }
}
