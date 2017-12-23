using System.Linq;
using System.Web.Mvc;
using ShoppingList.Models;

namespace ShoppingList.Controllers
{
    [ValidateInput(false)]
    public class ProductController : Controller
    {
        [HttpGet]
        [Route("")]
        public ActionResult Index()
        {
            using (var db = new ShoppingListDbContext())
            {
                var products = db.Products.ToList();
                return View(products);
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
        public ActionResult Create(Product product)
        {
            if (ModelState.IsValid)
            {
                using (var db = new ShoppingListDbContext())
                {
                    db.Products.Add(product);
                    db.SaveChanges();
                   
                }

                return RedirectToAction("Index");
            }

            return View(product);
        }

        [HttpGet]
        [Route("edit/{id}")]
        public ActionResult Edit(int? id)
        {
            using (var db = new ShoppingListDbContext())
            {
                Product product = db.Products.Find(id);
                if (product == null)
                {
                    return HttpNotFound();
                }

                return View(product);
            }
        }

        [HttpPost]
        [Route("edit/{id}")]
        [ValidateAntiForgeryToken]
        public ActionResult EditConfirm(int? id, Product productModel)
        {
            if (ModelState.IsValid)
            {
                using (var db = new ShoppingListDbContext())
                {
                    Product productFromDb = db.Products.Find(id);

                    if (productFromDb == null)
                    {
                        return HttpNotFound();
                    }

                    
                    productFromDb.Priority = productModel.Priority;
                    productFromDb.Name = productModel.Name;
                    productFromDb.Quantity = productModel.Quantity;
                    productFromDb.Status = productModel.Status;
                    db.SaveChanges();

                }
            }
            return RedirectToAction("Index");
        }
    }
}