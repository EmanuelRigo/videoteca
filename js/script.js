const registerButton = document.getElementById("register");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const btnLogin = document.getElementById("btnLogin");
const rememberMe = document.getElementById("rememberme");
const containerLogin = document.getElementById("containerLogin");

const registerContainer = document.getElementById("containerRegister");
const registerName = document.getElementById("registerName");
const registerSurname = document.getElementById("registerSurname");
const registerMail = document.getElementById("registerMail");
const registerPassword = document.getElementById("registerPassword");
const cancelRegister = document.getElementById("cancelRegister");

const select = document.getElementById("container2Select");
const logOut = document.getElementById("logOut");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const btnSettings = document.getElementById("btnSettings");
const container2Settings = document.getElementById("container2Settings");
const aside = document.getElementById("aside");
const gridContainer = document.getElementById("gridContainer");
const lookFor = document.querySelectorAll(".buscar");

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

class Usuario {
  constructor(nombre, apellido, email, password) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
  }
}

let usuariosDB = [];

async function traerDatos() {
  const response = await fetch("./js/datosUsuarios.json");
  usuariosDB = await response.json();
}

traerDatos();

const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(usuariosDB);
    }, 50);
  });
};

function validarUsuario(usersDB, user, pass) {
  let encontrado = usersDB.find((usersDB) => usersDB.email == user);

  if (typeof encontrado === "undefined") {
    return false;
  } else {
    if (encontrado.password != pass) {
      return false;
    } else {
      return encontrado;
    }
  }
}

function guardarDatos(usuarioDB, storage) {
  const usuario = {
    name: usuarioDB.nombre,
    surname: usuarioDB.apellido,
    user: usuarioDB.email,
    password: usuarioDB.password,
  };

  storage.setItem("usuario", JSON.stringify(usuario));
}

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  if (!usernameInput.value || !passwordInput.value) {
    alert("todos los campos son requeridos");
  } else {
    let data = validarUsuario(
      usuariosDB,
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

listaPeliculas = [];

async function traerPeliculas() {
  const response = await fetch("./js/datosPeliculas.json");
  listaPeliculas = await response.json();
  portadasGrid(listaPeliculas, gridContainer);
  alert("se cargaron");
}

traerPeliculas();

console.log(listaPeliculas);

function portadasGrid(array, container) {
  container.innerHTML = "";
  for (item of array) {
    let tarjeta = document.createElement("div");
    tarjeta.className = "card";
    tarjeta.innerHTML = `<img class="card__img" src="${item.portada}" alt="" />
    <div class="card__intro">
    <h3 class="card__h1">${item.nombre}</h3>
    <p class="card__p">${item.fecha}</p>
    </div>`;
    container.append(tarjeta);
  }
}

/////////Funcion para buscar/////////

function buscar(array, criterio, input) {
  return array.filter((item) => item[criterio].includes(input));
}

lookFor.forEach((input) => {
  input.addEventListener("input", () => {
    let cadena = input.value.toLowerCase();
    console.log(cadena);
    portadasGrid(buscar(listaPeliculas, input.id, cadena), gridContainer);
  });
});

select.addEventListener("change", () => alert(select.value));

window.onload = () => estaLogueado(recuperarUsuario(localStorage));
