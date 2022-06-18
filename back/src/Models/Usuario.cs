using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace product.API.Models
{
    public partial class Usuario
    {
        public Usuario()
        {
        }
        public int Id_usuario { get; set; }
        public string Name_usuario { get; set; }
        public string Last_name_usuario { get; set; }
        public string Email_usuario { get; set; }
        public string Password_usuario { get; set; }
        public int Edad_usuario { get; set; }
        public string Status_usuario { get; set; }
    }
}
