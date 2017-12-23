using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using TeisterMask.Models;

namespace TeisterMask.Controllers
{
    [ValidateInput(false)]
    public class TaskController : Controller
    {
        [HttpGet]
        [Route("")]
        public ActionResult Index()
        {
            using (var context = new TeisterMaskDbContext())
            {
                List<Task> tasks = context.Tasks.ToList();

                return View(tasks);

            }
        }

        [HttpGet]
        [Route("create")]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [Route("create")]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Task task)
        {
            using (var context = new TeisterMaskDbContext())
            {
                context.Tasks.Add(task);
                context.SaveChanges();

                return this.Redirect("/");
            }
            return View(task);
        }

        [HttpGet]
        [Route("edit/{id}")]
        public ActionResult Edit(int id)
        {
            using (var context = new TeisterMaskDbContext())
            {
                Task taskFromDB = context.Tasks.Find(id);
                return View(taskFromDB);
            }
        }

        [HttpPost]
        [Route("edit/{id}")]
        [ValidateAntiForgeryToken]
        public ActionResult EditConfirm(int id, Task taskModel)
        {
            using (var context = new TeisterMaskDbContext())
            {
                Task taskFromDB = context.Tasks.Find(id);

                taskFromDB.Title = taskModel.Title;
                taskFromDB.Status = taskModel.Status;

                context.SaveChanges();

                return Redirect("/");
            }
        }
    }
}