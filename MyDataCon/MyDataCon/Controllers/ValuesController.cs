using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MyDataCon.Models;

namespace MyDataCon.Controllers
{
    public class ValuesController : ApiController
    {  
        //module[] values = new module[]
        //{
        //    new module { id = 1 , name = "sri" },
        //    new module { id = 2, name = "venki" }
        //};
           
        // GET api/values
        public IEnumerable<module> Get()
        {
            srikanthEntities ds = new srikanthEntities();
            IEnumerable<module> mod = ds.modules.AsEnumerable();
            return mod;
        }

        // GET api/values/5
        public module Get(int id)
        {
            
                srikanthEntities ds = new srikanthEntities();
                module ca = ds.modules.SingleOrDefault(p => p.id == id);
                //string dis = ca.name;
                //int did = ca.carId;
                //return did + " " + " " + dis;
            
                return ca;         
            
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}