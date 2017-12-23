using System.Linq;
using System.Net;
using System.Web.Mvc;
using IMDB.Models;

namespace IMDB.Controllers
{
    [ValidateInput(false)]
    public class FilmController : Controller
    {
        [HttpGet]
        [Route("")]
        public ActionResult Index()
        {
            using (var db = new IMDBDbContext())
            {
                var films = db.Films.ToList();
                return View(films);
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
        public ActionResult Create(Film film)
        {
            if (ModelState.IsValid)
            {
                using (var db = new IMDBDbContext())
                {
                    db.Films.Add(film);
                    db.SaveChanges();
                    return Redirect("/");
                }
            }

            return View(film);
        }

        [HttpGet]
        [Route("edit/{id}")]
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return HttpNotFound();
            }
            using (var db = new IMDBDbContext())
            {
                Film film = db.Films.Find(id);
                if (film == null)
                {
                    return RedirectToAction("Index");
                }

                return View(film);
            }
            
        }

        [HttpPost]
        [Route("edit/{id}")]
        [ValidateAntiForgeryToken]
        public ActionResult EditConfirm(int? id, Film filmModel)
        {
            if (id == null)
            {
                return HttpNotFound();
            }

            if (ModelState.IsValid)
            {
                using (var db = new IMDBDbContext())
                {
                    Film filmFromDb = db.Films.Find(id);

                    if (filmFromDb == null)
                    {
                        return RedirectToAction("Index");
                    }

                    filmFromDb.Name = filmModel.Name;
                    filmFromDb.Genre = filmModel.Genre;
                    filmFromDb.Director = filmModel.Director;
                    filmFromDb.Year = filmModel.Year;

                    db.SaveChanges();

                }
            }          
            return RedirectToAction("Index");
			
			
			//или само това:
			 using (var context = new TeisterMaskDbContext())
            {
                Task taskFromDB = context.Tasks.Find(id);

                taskFromDB.Title = taskModel.Title;
                taskFromDB.Status = taskModel.Status;

                context.SaveChanges();

                return Redirect("/");
            }
        }

        [HttpGet]
        [Route("delete/{id}")]
        public ActionResult Delete(int? id)
        {
            using (var db = new IMDBDbContext())
            {
                var film = db.Films.Find(id);
                if (film != null)
                {
                    return View(film);
                }
            }
            return Redirect("/");
        }

        [HttpPost]
        [Route("delete/{id}")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirm(int? id, Film filmModel)
        {
            using (var db = new IMDBDbContext())
            {
                var film = db.Films.Find(id);

                if (film != null)
                {
                    db.Films.Remove(film);
                    db.SaveChanges();
                }
            }
            return Redirect("/");
        }
    }
}