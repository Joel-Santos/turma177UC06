const {Usuario} = require("./Usuario");


class UsuarioAdmin extends Usuario{
    acessarSistema(){
        return `${this.nome} (Usuário Administrador) acessou o sistema com permissões totais`;
    }
   excluirUsuario(nomeUsuario){
    return `Usuário ${nomeUsuario} foi excluído pelo administrador ${this.nome}`;
   }
}

module.exports = {UsuarioAdmin};