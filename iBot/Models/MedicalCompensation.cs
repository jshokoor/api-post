using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace iBot.Models
{
    public class MedicalCompensation
    {
        public int ID { get; set; }
        [Display(Name = "NDC Number")]
        public string NDCno { get; set; }
        [Display(Name = "Metric decimal number of units")]
        public string MDUnits { get; set; }
        [Display(Name = "Usual and customary price")]
        public string PriceBilled { get; set; }
        [Display(Name = "Date of service")]
        public DateTime DateOfCurrentDay { get; set; }
        [Display(Name = "Nursing home")]
        public bool NursingHome { get; set; }
        [Display(Name = "No Substitutions")]
        public bool Brand { get; set; }
    }
}
