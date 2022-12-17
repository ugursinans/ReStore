using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : ApiBaseController
    {
        [HttpGet("not-found-error")]
        public ActionResult GetNotFoundError()
        {
            return NotFound();
        }
        [HttpGet("server-error")]
        public ActionResult ServerError()
        {
            throw new Exception("This is a server error");
        }

        [HttpGet("bad-request-error")]
        public ActionResult GetBadRequest()
        {
            return BadRequest();
        }
        [HttpGet("unauthorized-error")]
        public ActionResult GetUnAuthorized()
        {
            return Unauthorized();
        }
        [HttpGet("validation-error")]
        public ActionResult ValidationError()
        {
            ModelState.AddModelError("Problem1", "This is Problem1 error");
            ModelState.AddModelError("Problem2", "This is Problem2 error");
            return ValidationProblem();
        }
    }
}