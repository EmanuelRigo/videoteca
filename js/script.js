const peliculas = [
  {
    nombre: "jurassic park 3",
    genero: "ciencia ficcion accion",
    fecha: "2001",
    portada: "./imagenes/jurassic-park-3.jpg",
  },
  {
    nombre: "gladiador",
    genero: "accion",
    fecha: "2000",
    portada: "./imagenes/gladiador.jpg",
  },
  {
    nombre: "el señor de los anillos 1",
    genero: "fantasia aventura",
    fecha: "2001",
    portada: "./imagenes/el-señor-de-los-anillos-1.jpg",
  },
  {
    nombre: "los locos addams",
    genero: "comedia",
    fecha: "1992",
    portada: "./imagenes/los-locos-addams.jpg",
  },
  {
    nombre: "batman el caballero de la noche",
    genero: "ciencia ficcion accion",
    fecha: "2008",
    portada: "./imagenes/batman-3.jpg",
  },
  {
    nombre: "the truman show",
    genero: "drama ciencia ficcion",
    fecha: "1998",
    portada: "./imagenes/the-truman-show.jpg",
  },
  {
    nombre: "señales",
    genero: "ciencia ficcion terror",
    fecha: "2002",
    portada: "./imagenes/señales.jpg",
  },
  {
    nombre: "batman regresa",
    genero: "ciencia ficcion accion",
    fecha: "1992",
    portada: "./imagenes/batman-regresa.jpg",
  },
  {
    nombre: "hombre de negro",
    genero: "ciencia ficcion accion",
    fecha: "1997",
    portada: "./imagenes/hombres-de-negro.jpg",
  },
  {
    nombre: "blade runner",
    genero: "ciencia ficcion accion",
    fecha: "1982",
    portada: "./imagenes/blade-runner.jpg",
  },
  {
    nombre: "harry potter",
    genero: "fantasia aventura",
    fecha: "2001",
    portada: "./imagenes/harry-potter-1.jpg",
  },
  {
    nombre: "alien",
    genero: "ciencia ficcion terror",
    fecha: "1979",
    portada: "./imagenes/alien.jpg",
  },
  {
    nombre: "akira",
    genero: "anime ciencia ficcion",
    fecha: "1988",
    portada: "./imagenes/akira.jpg",
  },
  {
    nombre: "constantine",
    genero: "ciencia ficcion terror",
    fecha: "2005",
    portada: "./imagenes/constantine.jpg",
  },
  {
    nombre: "avengers: infinity war",
    genero: "accion comic",
    fecha: "2018",
    portada: "./imagenes/avengers-infinity-war.jpg",
  },
  {
    nombre: "chuky",
    genero: "terror",
    fecha: "1988",
    portada: "./imagenes/chuky.jpg",
  },
  {
    nombre: "el padrino",
    genero: "crimen drama",
    fecha: "1972",
    portada: "./imagenes/el-padrino.jpg",
  },
  {
    nombre: "el marciano",
    genero: "ciencia ficcion",
    fecha: "2015",
    portada: "./imagenes/el-marciano.jpg",
  },
  {
    nombre: "el señor de los anillos 2",
    genero: "fantasia aventura",
    fecha: "2002",
    portada: "./imagenes/el-señor-de-los-anillos-2.jpg",
  },
  {
    nombre: "jurassic park",
    genero: "ciencia ficcion accion",
    fecha: "1993",
    portada: "./imagenes/jurassic-park-1.jpg",
  },
  {
    nombre: "aliens: el regreso",
    genero: "ciencia ficcion terror",
    fecha: "1986",
    portada: "./imagenes/aliens.jpg",
  },
  {
    nombre: "harry potter 2",
    genero: "fantasia aventura",
    fecha: "2002",
    portada: "./imagenes/harry-potter-2.jpg",
  },
  {
    nombre: "sexto sentido",
    genero: "crimen terror",
    fecha: "1999",
    portada: "./imagenes/sexto-sentido.jpg",
  },
  {
    nombre: "harry potter 7 parte 1",
    genero: "fantasia aventura",
    fecha: "2010",
    portada: "./imagenes/harry-potter-7.jpg",
  },
  {
    nombre: "jurassic park 2",
    genero: "ciencia ficcion accion",
    fecha: "1997",
    portada: "./imagenes/jurassic-park-2.jpg",
  },
  {
    nombre: "batman inicia",
    genero: "ciencia ficcion accion",
    fecha: "2005",
    portada: "./imagenes/batman-inicia.jpg",
  },
  {
    nombre: "harry potter 7 parte 2",
    genero: "fantasia aventura",
    fecha: "2011",
    portada: "./imagenes/harry-potter-8.jpg",
  },
  {
    nombre: "kiki",
    genero: "aventura infantil",
    fecha: "1989",
    portada: "./imagenes/kiki.jpg",
  },
  {
    nombre: "la cosa",
    genero: "ciencia ficcion terror",
    fecha: "1982",
    portada: "./imagenes/la-cosa.jpg",
  },
  {
    nombre: "leon el profecional",
    genero: "accion drama",
    fecha: "1994",
    portada: "./imagenes/leon-el-profecional.jpg",
  },
  {
    nombre: "seven",
    genero: "crimen suspenso",
    fecha: "1995",
    portada: "./imagenes/seven.jpg",
  },
  {
    nombre: "spawn",
    genero: "ciencia ficcion accion",
    fecha: "1997",
    portada: "./imagenes/spawn.jpg",
  },
  {
    nombre: "el señor de los anillos 3",
    genero: "fantasia aventura",
    fecha: "2004",
    portada: "./imagenes/el-señor-de-los-anillos-3.jpg",
  },
];

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

async function traerPeliculas() {}

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

portadasGrid(peliculas, gridContainer);

select.addEventListener("change", () => alert(select.value));

window.onload = () => estaLogueado(recuperarUsuario(localStorage));
