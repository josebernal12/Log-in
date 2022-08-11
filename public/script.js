const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#usernameInput");

async function submitHandler(e) {
  e.preventDefault();
try {
    await fetch(`/api/login?username=${usernameInput.value}`);
   window.location.href = "/";
  
   
  } catch (err) {
    console.log(err);
  }
}



loginForm.addEventListener("submit", submitHandler);











