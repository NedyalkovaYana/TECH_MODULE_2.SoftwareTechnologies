using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace AnimeList.Models
{
    public class Anime
    {

        [Key]
        public int Id { get; set; }

        [Required]
        public int Rating { get; set; }

        [Required]
        [MinLength(1)]
        [AllowHtml]
        public string Name { get; set; }

        [Required]
        [MinLength(1)]
        [AllowHtml]
        public string Description { get; set; }

        [Required]
        [MinLength(1)]
        public string Watched { get; set; }
    }
}