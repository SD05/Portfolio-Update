let theme = localStorage.getItem("theme");
let mode = null;

if (theme == null) {
  setTheme("light");
} else {
  setTheme(mode);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (let index = 0; index < themeDots.length; index++) {
  themeDots[index].addEventListener("click", function () {
    mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "style.css";
  } else if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
  } else if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
  } else if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }

  localStorage.setItem("theme", mode);
}

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.comm",
    Username: "shubham.sahu.dm@gmail.com",
    Password: "38D1102DBFB6EBC29C635416415D9F0E69D0E",
    To: "sdimension0506@gmail.com",
    From: document.getElementById("email").value,
    Subject: "Contact Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Subject: " +
      document.getElementById("subject").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message sent succesfully"));
}
