namespace LogNoziroh.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;
    using Models;

    [ValidateInput(false)]
    public class ReportController : Controller
    {
        [HttpGet]
        [Route("")]
        public ActionResult Index()
        {
            using (var db = new LogNozirohDbContext())
            {
                var reports = db.Reports.ToList();
                return View(reports);
            }
        }

        [HttpGet]
        [Route("details/{id}")]
        public ActionResult Details(int id)
        {
            if (ModelState.IsValid)
            {
                using (var db = new LogNozirohDbContext())
                {
                    Report reportsFromDb = db.Reports.Find(id);

                    if (reportsFromDb == null)
                    {
                        return HttpNotFound();
                    }

                    return View(reportsFromDb);

                }
            }
            return RedirectToAction("Index");
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
        public ActionResult Create(Report report)
        {
            if (ModelState.IsValid)
            {
                using (var db = new LogNozirohDbContext())
                {
                    db.Reports.Add(report);
                    db.SaveChanges();

                }

                return RedirectToAction("Index");
            }

            return View(report);
        }

        [HttpGet]
        [Route("delete/{id}")]
        public ActionResult Delete(int id)
        {
            using (var db = new LogNozirohDbContext())
            {
                var report = db.Reports.Find(id);
                if (report != null)
                {
                    return View(report);
                }
            }
            return Redirect("/");
        }

        [HttpPost]
        [Route("delete/{id}")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirm(int id, Report reportModel)
        {
            using (var db = new LogNozirohDbContext())
            {
                var report = db.Reports.Find(id);

                if (report != null)
                {
                    db.Reports.Remove(report);
                    db.SaveChanges();
                }
            }
            return Redirect("/");
        }
    }
}