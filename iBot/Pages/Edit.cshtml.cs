using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using iBot.Models;

namespace iBot.Pages
{
    public class EditModel : PageModel
    {
        private readonly iBot.Models.MedicalCompensationContext _context;

        public EditModel(iBot.Models.MedicalCompensationContext context)
        {
            _context = context;
            context.Database.EnsureCreated();
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public MedicalCompensationModel MedicalCompensationModel { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.MedicalCompensationModel.Add(MedicalCompensationModel);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Edit",MedicalCompensationModel);
        }
    }
}