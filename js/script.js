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
const userAvatar = document.getElementById("avatar");
const registerAvatar = document.querySelectorAll(".avatar--img");
const send = document.getElementById("send");

const select = document.getElementById("container2Select");
const logOut = document.getElementById("logOut");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const btnSettings = document.getElementById("btnSettings");
const container2Settings = document.getElementById("container2Settings");
const aside = document.getElementById("aside");
const gridContainer = document.getElementById("gridContainer");
const lookFor = document.querySelectorAll(".buscar");
const saludo = document.getElementById("titulo");

const absolute = document.getElementById("absolute");

let cards = [];

let valorAvatar = null;

registerAvatar.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    valorAvatar = elemento.id;
    elemento.classList.toggle("avatar--img--selected");
  });
});

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
  constructor(nombre, apellido, email, password, avatar) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
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

function sumarUsuarios() {
  usuariosDB.push(
    new Usuario(
      registerName.value,
      registerSurname.value,
      registerMail.value,
      registerPassword.value,
      valorAvatar
    )
  );
}

send.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !registerName.value ||
    !registerSurname.value ||
    !registerMail.value ||
    !registerPassword ||
    valorAvatar == null
  ) {
    alert("llene todos los campos");
  } else {
    sumarUsuarios();
  }
});

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
    avatar: usuarioDB.avatar,
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
        cambiarEstado(container1, container2);
        saludar(recuperarUsuario(localStorage));
      } else {
        guardarDatos(data, sessionStorage);
        cambiarEstado(container1, container2);
        saludar(recuperarUsuario(sessionStorage));
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
    saludar(recuperarUsuario(localStorage));
  }
}

function borrarDatos() {
  localStorage.clear();
  sessionStorage.clear();
}

function saludar(usuario) {
  saludo.innerHTML = usuario.name;
  userAvatar.src = `avatars/${usuario.avatar}.png`;
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
}

function descripcionPeliculas() {}

function hola() {
  console.log(`hola`);
}

traerPeliculas();

function portadasGrid(array, container) {
  container.innerHTML = "";
  for (item of array) {
    var tarjeta = document.createElement("div");
    tarjeta.className = "card";
    tarjeta.name = item.nombre;
    tarjeta.src = item.portada;
    tarjeta.id = item.portada;
    tarjeta.innerHTML = `<img class="card__img" src="${item.portada}" alt="" />
    <div class="card__intro">
    <h3 class="card__h1">${item.nombre}</h3>
    <p class="card__p">${item.fecha}</p>
    </div>`;
    container.append(tarjeta);
  }
  const cards = document.querySelectorAll(".card");
  const cardsArray = Array.apply(null, cards);
  console.log(cardsArray);

  for (const item of cards) {
    item.addEventListener("click", () => {
      console.log(item.id);
      let poster = item.id;
      console.log(poster);
      let infoTarjeta = listaPeliculas.find(
        (elemento) => elemento.portada == poster
      );

      container2.innerHTML += `<div id="absolute" class="absolute">
      <div class="inAbsolute">
        <img class="absolute__image" src="${infoTarjeta.portada}" alt="" />
        <div class="inAbsolute2">
          <h3 class="absoluter__h3">${infoTarjeta.nombre}</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            maxime quaerat cupiditate tenetur culpa iusto repellat unde odit.
            Omnis sequi reiciendis fuga placeat, pariatur odio quae nesciunt
            optio sint cumque!
          </p>
        </div>
      </div>
    </div>`;
      console.log(infoTarjeta);
      const absolute = document.getElementById("absolute");
      absolute.addEventListener("click", () => {
        alert("hola");
      });
    });
  }

  /*;*/

  /*cards.forEach((tarjeta) => {
    tarjeta.addEventListener("click", () => {
      console.log(`hola ${tarjeta.name}`);
      container2.innerHTML += `<div id="absolute" class="absolute">
      <div class="inAbsolute">
        <img class="absolute__image" src="${item.portada}" alt="" />
        <div class="inAbsolute2">
          <h3 class="absoluter__h3">${item.nombre}</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            maxime quaerat cupiditate tenetur culpa iusto repellat unde odit.
            Omnis sequi reiciendis fuga placeat, pariatur odio quae nesciunt
            optio sint cumque!
          </p>
        </div>
      </div>
    </div>`;
    });
  });*/
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

/////////Funcion para ordernar/////////
select.addEventListener("change", () => ordenar());

function ordenar() {
  let listaOrdenada = listaPeliculas.slice(0);
  if (select.value == "az") {
    let az = listaOrdenada.sort((a, b) => a.nombre.localeCompare(b.nombre));
    portadasGrid(listaOrdenada, gridContainer);
  } else if (select.value == "year") {
    let year = listaOrdenada.sort((a, b) => a.fecha - b.fecha);
    portadasGrid(listaOrdenada, gridContainer);
  }
}

window.onload = () => estaLogueado(recuperarUsuario(localStorage));
