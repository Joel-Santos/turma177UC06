const {UsuarioPadrao} = require("./UsuarioPadrao");
const {UsuarioAdmin} = require("./UsuarioAdmin");

let usuarioComum01 = new UsuarioPadrao("Maria", "maria@email.com");
console.log(usuarioComum01.acessarSistema());
console.log(usuarioComum01.verPerfil());

let admin = new UsuarioAdmin("Pedro", "pedro@admin.com");
console.log(admin.acessarSistema());
console.log(admin.excluirUsuario("Maria"));



