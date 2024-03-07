//document.getElementById('myForm').addEventListener('submit', validateForm)
myForm.onsubmit = validateForm;

function validateForm(e) {
  e.preventDefault();
  let inputValue = document.getElementById('inputField').value;
  let regex = /^[a-zA-Z0-9_]*$/;
  if (!regex.test(inputValue)) {
    alert("Please enter an Alphanumeric Input")
    return false;
  } else {
    alert("Input confirmed");
    return true;
  }
}