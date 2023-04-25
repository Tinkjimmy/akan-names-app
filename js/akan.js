// Dictionary for Akan names
const akanNames = {
    male: {
      Monday: "Kwadwo",
      Tuesday: "Kwabena",
      Wednesday: "Kwaku",
      Thursday: "Yaw",
      Friday: "Kofi",
      Saturday: "Kwame",
      Sunday: "Kwasi",
    },
    female: {
      Monday: "Adwoa",
      Tuesday: "Abenaa",
      Wednesday: "Akua",
      Thursday: "Yaa",
      Friday: "Afua",
      Saturday: "Ama",
      Sunday: "Akosua",
    },
  };
  
  // Array for days of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  // Function to get the Akan name based on the gender and birthdate
  function getAkanName() {
    const selectElement = document.getElementById("mySelect");
    const gender = selectElement.value;
  
    const dateElement = document.querySelector("#myDate");
    const selectedDate = dateElement.value;
    const date = new Date(selectedDate);
    const dayOfWeek = daysOfWeek[date.getDay()];
  
    const akanName = akanNames[gender === "2" ? "male" : "female"][dayOfWeek];
  
    console.log(akanName);


    document.querySelector("#displayAkanname").innerHTML = akanName
    document.querySelector("a").classList.remove( "show-link") 
  }
  
  // Event listener for the button click
  const button = document.querySelector("#myButton");
  button.addEventListener("click", function() {
    getAkanName();
  });
  