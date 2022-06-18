using product.API.Models;

namespace product.API.Services
{
    public interface IUsuarioService
    {
        bool ValidarUsuarioContraseña(string usuario, string contrasena);
        bool ValidarExistenciaUsuario(string usuario);
        List<Usuario> ObtenerUsuarios();
    }
}
