using Microsoft.AspNetCore.Mvc;
using product.API.Services;
using product.API.Models;
using Microsoft.AspNetCore.Cors;

namespace product.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsuarioController : ControllerBase
{
    private readonly IUsuarioService _usuarioService;
    public UsuarioController(IUsuarioService usuarioService)
    {
        _usuarioService = usuarioService;
    }

    [HttpGet]
    [EnableCors("AllowOrigin")]
    public ActionResult ObtenerUsuarios()
    {
        try
        {
            return Ok(_usuarioService.ObtenerUsuarios());
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("{usuario}/{contrasena}")]
    [EnableCors("AllowOrigin")]
    public ActionResult ValidarUsuarioContraseña(string usuario, string contrasena)
    {
        try
        {
            return Ok(_usuarioService.ValidarUsuarioContraseña(usuario, contrasena));
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("{usuario}")]
    [EnableCors("AllowOrigin")]
    public ActionResult ValidarExistenciaUsuario(string usuario)
    {
        try
        {
            return Ok(_usuarioService.ValidarExistenciaUsuario(usuario));
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
