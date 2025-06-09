function validation(){
            let name = document.getElementById("name").value;
            let age = document.getElementById("age").value;
            let email = document.getElementById("email").value;

            if(name === "" || age === "" || email === "") {
                alert("Please fill all the fields");
                return false;
            }

            if(parseInt(age) < 18) {
                alert("You must be at least 18 years old");
                return false;
            }

            if(email.indexOf("@")==-1) {
                alert("Please enter a valid email address");
                return false;
            }

            alert("Form submitted successfully!");

        }