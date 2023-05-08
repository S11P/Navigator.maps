//main page of the project

function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#location-btn").addEventListener("click", geoFindMe);

//search loaction from the search bar
function search() {
  event.preventDefault();
  var place = document.getElementById("searchbar").value;
  window.open(`https://www.openstreetmap.org/search?query=${place}`, "_self");
}

// login page of the project

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "" || password == "") {
    alert("Please enter both username and password.");
  } else if (username == "admin" && password == "admin123") {
    alert("Login successful.");
    window.open("main.html", "_self");
  } else {
    alert("Invalid login credentials. Please try again.");
  }
}
function opennew() {
  window.open("createaccount.html", "_self");
}

// create account page of project
function submit_handler() {
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (first == "" && last == "" && username == "" && password == "") {
    alert("Please fill the from");
  } else if (first == "") {
    alert("Please fill your First Name");
  } else if (last == "") {
    alert("Please fill your Last Name");
  } else if (username == "") {
    alert("Please fill your Username");
  } else if (password == "") {
    alert("Please fill your Password");
  } else {
    alert("Your From is submitted successfully");
    // window.open("index.html", "_self")
  }
}
