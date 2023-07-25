

function formValidate() {
    var name = document.membership.name.value.trim();
    var age = document.membership.age.value.trim();
    var phone = document.membership.phone.value.trim();
    var email = document.membership.email.value.trim();


    var phoneformat = /^(\+)(\d{1,3}) (\d{6,12})$/;
    var emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var nameformat = /^[A-Za-z]+\s*[A-Za-z]*$/;
    
    

    document.getElementById("label_name").innerHTML = ""
    document.getElementById("label_age").innerHTML = ""
    document.getElementById("label_phone").innerHTML = ""
    document.getElementById("label_email").innerHTML = ""



    if (name === "" || age === "" || phone === "" || email === "" || isNaN(age) || (age < 1 || age > 120) || !phoneformat.test(phone) || !emailformat.test(email) || !nameformat) {
        alert("Something Went wrong with your inputs");

        if (name === "") {
            document.getElementById("label_name").innerHTML = "Please insert your name";
        }
       



        if (age === "") {
            document.getElementById("label_age").innerHTML = "Please insert your age"; 
        }
        



        if (phone === "") {
            document.getElementById("label_phone").innerHTML = "Please insert your telephone number";   
        }
        



        if (email === "") {
            document.getElementById("label_email").innerHTML = "Please insert your email address";  
        }

        if (isNaN(age)) {
            if (age!="") {
              document.getElementById("label_age").innerHTML += " Please insert valid age";  
            }
            
            
        }

        if (!phoneformat.test(phone)) {
            if (phone!="") {
                document.getElementById("label_phone").innerHTML += " Please enter a valid telephone number";
            }
        }

        if (!emailformat.test(email)) {
            if (email!="") {
                document.getElementById("label_email").innerHTML += " Please enter a valid email address";
            }
        }

        if (!nameformat.test(name)) {
            if (name!="") {
                document.getElementById("label_name").innerHTML += " Please enter a valid name with letters";
            }
        }
        
        if (age < 1 || age > 120) {
            if (age!="") {
                document.getElementById("label_age").innerHTML += " Please enter a age between 1 and 120";
            }
        }


        return;
        
    }



    alert ("Membership Information added successfully!")
    document.membership.submit();


}