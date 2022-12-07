using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;
        private readonly StoreContext _context;

        public ProductController(ILogger<ProductController> logger,StoreContext context)
        {
            _context = context;
            _logger = logger;
            logger.Log(LogLevel.Information," constructor calisti ");
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
                return await _context.products.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
                return await _context.products.FindAsync(id);
        }
    }
}