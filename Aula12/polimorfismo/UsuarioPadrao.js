const {Usuario} = require("./Usuario");


class UsuarioPadrao extends Usuario{
    acessarSistema(){
        return `${this.nome} (Usuário Padrão) acessou o sistema com permissões limitadas`;
    }
    verPerfil(){
        return `Perfil de ${this.nome}: Email - ${this.email}`;
    }
}

module.exports = {UsuarioPadrao};