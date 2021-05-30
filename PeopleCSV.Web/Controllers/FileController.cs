using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PeopleCSV.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeopleCSV.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public FileController(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpPost]
        [Route("upload")]
        public void Upload(UploadImageViewModel viewModel)
        {
            int commaIndex = viewModel.Base64File.IndexOf(',');
            var fromVm = viewModel.Base64File;
            var base64 = viewModel.Base64File.Substring(commaIndex + 1);
            var fileData = Convert.FromBase64String(base64);
            var repo = new PeopleRepository(_connectionString);
            repo.AddPpl(fileData);
        }
        
        [Route("generate/{amount}")]
        [AcceptVerbs("POST", "GET")]
        public IActionResult Generate(int amount)
        {
            var repo = new PeopleRepository(_connectionString);
            var pplString = repo.GeneratePeopleList(amount);
            var bytes = Encoding.UTF8.GetBytes(pplString);
            return File(bytes, "text/csv", "people.csv");

        }
    }
}
