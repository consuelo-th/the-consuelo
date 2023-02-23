function handleCredentialResponseRegister(response) {
  xhrRequest("/user/google-register", response);
}

function handleCredentialResponseLogin(response) {
  xhrRequest("/user/google-login", response);
}

function xhrRequest(url, response) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    let requestResponse = JSON.parse(xhr.responseText);
    if (requestResponse.success) {
      window.location.href = requestResponse.redirectUrl;
    } else {
      //error message needs to be displayed somewhere
      document.getElementById("reg__message").textContent =
        requestResponse.message;
    }
  };
  xhr.send(JSON.stringify({ token: response.credential }));
}
