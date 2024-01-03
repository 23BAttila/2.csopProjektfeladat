using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Adminisztrációs_Alkalmazás
{
    
    internal class Adminisztracio
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public string Parameters { get; set; }
        public double Price { get; set; }

        public Adminisztracio(string _type, string _name, string _parameters, double _price)
        {
            Type = _type;
            Name = _name;
            Parameters = _parameters;
            Price = _price;

        }


        public static string Input(string typeOfInput)
        {
            Console.Write($"{typeOfInput}:");
            string input = Console.ReadLine() ?? "";
            return input;
        }
        public static void InputTypeChecker(string input)
        {
            while (string.IsNullOrEmpty(input))
            {
                Console.WriteLine("The input should not be null or empty. Try to input in the correct form");
                input = Console.ReadLine() ?? "";
            }
        }
        public static bool IsGreaterThanZero(double input)
        {
            if (input > 0)
            {
                return true;
            }
            else
            {

                return false;
            }
        }

    }
}
