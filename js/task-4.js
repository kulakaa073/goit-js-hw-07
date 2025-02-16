const form = document.querySelector(".login-form"); //Find the form

form.addEventListener("submit", event => {  //Add event listener
    event.preventDefault(); //Prevent default behavior

    const email = event.target.querySelector('[name="email"]').value.trim();   //Save email value
    const password = event.target.querySelector('[name="password"]').value.trim(); //Save password value

    if (!email || !password) {  //Check if not empty
        alert("All form fields must be filled in");
        return;
    }    
    
    //Not necessary for the task, save for future use
    //Because html wont fire the event if email is invalid anyway
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //    alert("Invalid email");
    //    return;
    // }

    console.log({email: email, password: password});    //Log the data

    form.reset();   //Reset the form
});
