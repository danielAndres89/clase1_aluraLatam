let cantidad = document.getElementById("cantidad");
let button = document.getElementById("generar");
const caracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generar() {
  let cant = parseInt(cantidad.value);

  if (cant < 6) {
    alert("La cantidad de caracteres tiene que ser mayor que 6");
  } else {
    let password = "";
    for (let i = 0; i < cant; i++) {
      let aleatorio = caracteres[Math.floor(Math.random() * caracteres.length)];
      password += aleatorio;
    }
    document.getElementById("contrasena").value = password;
  }
}
