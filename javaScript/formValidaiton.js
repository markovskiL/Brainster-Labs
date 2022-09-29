
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let namePerson = id("name"),
  nameCompany = id("nameCompany"),
  email = id("email"),
  phoneNumber = id("phoneNumber"),
  studentSelect = id("studentSelect"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate(namePerson, 0, "Ве молиме внесете име и презиме");
  validate(nameCompany, 1, "Ве молиме внесете го името на вашата компанија");
  validate(email, 2, "Ве молиме внесете ја вашата е-пошта");
  validate(phoneNumber, 3, "Ве молиме внесете го вашиот телефонски број");
  validate(studentSelect, 4, "Ве молиме изберете тип на студент");
});

let validate = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid #ff1300";
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  }
  else{
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid #52c41a";
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
