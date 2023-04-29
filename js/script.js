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

registerButton.addEventListener("click", () => {
  alert("hola " + usernameInput.value);
});

function validarUsuario(usersDB, user, pass) {
  let encontrado = usersDB.find((userDB) => usersDB.mail == user);

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
