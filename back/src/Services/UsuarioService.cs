using Microsoft.EntityFrameworkCore;
using product.API.Exceptions;
using product.API.Infraestructure;
using product.API.Models;

namespace product.API.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly masterContext _context;
        public UsuarioService(masterContext context)
        {
            _context = context;
        }

        List<Usuario> IUsuarioService.ObtenerUsuarios()
        {
            List<Usuario> usuarios = _context.Usuario.ToList();
            return usuarios;
        }

        bool IUsuarioService.ValidarExistenciaUsuario(string usuario)
        {
            Usuario usuarioEncontrado = _context.Usuario.FirstOrDefault(usuarioEncontrado => usuarioEncontrado.Email_usuario == usuario);
            if(usuarioEncontrado == null)
            {
                return false;
            }
            return true;
        }

        bool IUsuarioService.ValidarUsuarioContraseña(string usuario, string contrasena)
        {
            Usuario usuarioValidado = _context.Usuario.FirstOrDefault(usuarioEncontrado => usuarioEncontrado.Email_usuario == usuario && usuarioEncontrado.Password_usuario == contrasena);
            if (usuarioValidado == null)
            {
                return false;
            }
            return true;
        }
    }
}
