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
  {
    nombre: "Ema",
    mail: "emanuel@mail.com",
    pass: "hola1234",
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
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const btnSettings = document.getElementById("btnSettings");
const container2Settings = document.getElementById("container2Settings");
const aside = document.getElementById("aside");

function cambiarEstado(active, disabled) {
  active.classList.toggle("disabled");
  disabled.classList.toggle("disabled");
}

registerButton.addEventListener("click", () => {
  cambiarEstado(containerLogin, registerContainer);
});

cancelRegister.addEventListener("click", () => {
  cambiarEstado(containerLogin, registerContainer);
});

btnSettings.addEventListener("click", () => {
  container2Settings.classList.toggle("disabled");
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
        cambiarEstado(container1, container2);
      } else {
        guardarDatos(data, sessionStorage);
        alert("holaaaa");
        cambiarEstado(container1, container2);
      }
    }
  }
});

function recuperarUsuario(storage) {
  let usuarioStorage = JSON.parse(storage.getItem("usuario"));
  return usuarioStorage;
}

function estaLogueado(usuario) {
  if (usuario) {
    cambiarEstado(container1, container2);
  }
}

function borrarDatos() {
  localStorage.clear();
  sessionStorage.clear();
}

function saludar() {
  aside.innerHTML = "<h3>Buenas dias</h3>";
}

logOut.addEventListener("click", () => {
  borrarDatos();
  alert("se han borrado los datos");
  cambiarEstado(container1, container2);
});

window.onload = () => estaLogueado(recuperarUsuario(localStorage));
