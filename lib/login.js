emailSignin=()=>{
    const signupForm = document.querySelector('#form-login');
  
    const email = signupForm['email-login'].value;
    const password = signupForm['pass-login'].value;
  
  
  firebase.auth().signInWithEmailAndPassword(email,password).then(function(result){
  
       console.log(result)
       console.log("Successfully linked...")
       window.location="home.html";
       
  
  
  }).catch(function(err){
  
  console.log(err)
  console.log("Failed to do")
  
  var emailerr = document.getElementById("valid_emailalert");
  var passerr = document.getElementById("valid_passalert");
  var crederr = document.getElementById("valid_credalert");
  
  
  
  
  if (err.code === 'auth/wrong-password') 
  {
    passerr.style.display = "block";
    emailerr.style.display = "none";
    crederr.style.display = "none";
  }
  if (err.code === 'auth/invalid-email') 
  {
  emailerr.style.display = "block";
  passerr.style.display = "none";
  crederr.style.display = "none";
  }
  if (err.code === 'auth/user-not-found') 
  {
    crederr.style.display = "block";
    emailerr.style.display = "none";
    passerr.style.display = "none";
  }
  
  
  })
  }
  

