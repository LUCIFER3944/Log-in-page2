 document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('#login');

  loginForm.addEventListener('click', function (event) {
     event.preventDefault();

    const userEmail = document.getElementById('user').value;
    const userPassword = document.getElementById('password').value;
    console.log(userEmail);
    console.log(userPassword);

   let user1="vivek123@gmail.com";
   let pass1=123;


    if (userEmail ==user1 && userPassword ==pass1) {
      alert('Login successful!');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  });

});
