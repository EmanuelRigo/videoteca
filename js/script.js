const usuarios = [
  {
    nombre: "Azul",
    mail: "azulperez@mail.com",
    pass: "azulcomoelmarazul",
  },
  {
    nombre: "Betiana",
    mail: "betidicarlo@mail.com",
    pass: "sha23AWx!",
  },
  {
    nombre: "Carlos",
    mail: "lopezcarlosadrian@mail.com",
    pass: "sanlore2002",
  },
];

const registerButton = document.getElementById("register");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const btnLogin = document.getElementById("btnLogin");
const rememberMe = document.getElementById("rememberme");
const containerLogin = document.getElementById("containerLogin");
const registerContainer = document.getElementById("containerRegister");
const cancelRegister = document.getElementById("cancelRegister");
const select = document.getElementById("container2Select");
const logOut = document.getElementById("logOut");

registerButton.addEventListener("click", () => {
  containerLogin.classList.toggle("disabled");
  registerContainer.classList.toggle("disabled");
});

cancelRegister.addEventListener("click", () => {
  containerLogin.classList.toggle("disabled");
  registerContainer.classList.toggle("disabled");
});

function validarUsuario(usersDB, user, pass) {
  let encontrado = usersDB.find((usersDB) => usersDB.mail == user);

  if (typeof encontrado === "undefined") {
    return false;
  } else {
    if (encontrado.pass != pass) {
      return false;
    } else {
      return encontrado;
    }
  }
}

function guardarDatos(usuarioDB, storage) {
  const usuraio = {
    name: usuarioDB.nombre,
    user: usuarioDB.mail,
    pass: usuarioDB.pass,
  };

  storage.setItem("usuario", JSON.stringify(usuraio));
}

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  if (!usernameInput.value || !passwordInput.value) {
    alert("todos los campos son requeridos");
  } else {
    let data = validarUsuario(
      usuarios,
      usernameInput.value,
      passwordInput.value
    );

    if (!data) {
      alert("usuario o contraseña erróneos");
    } else {
      if (rememberMe.checked) {
        guardarDatos(data, localStorage);
        alert("hoolaa");
      } else {
        guardarDatos(data, sessionStorage);
        alert("holaaaa");
      }
    }
  }
});

logOut.addEventListener("click", () => {
  alert(select.value);
});
