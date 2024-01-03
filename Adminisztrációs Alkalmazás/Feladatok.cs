using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Adminisztrációs_Alkalmazás
{
    internal class Feladatok
    {
        static List<Adminisztracio> datas = new();
        static string[] types = { "CPU", "GPU", "Motherboard", "RAM", "HDD", "SSD", "Monitor", "Mouse", "Keyboard"};
        public static void AddData(bool additionalData)
        {
            if (additionalData == false)
            {
                datas.Clear();
            }

            string inputType = "";             
            string inputName = "";              
            string inputParams = "";            
            double inputPrice = -1;                
            bool notCorrectType = true;
            bool moreData = true;

            
            Console.WriteLine("Choose the desired type of part you want to input specifics into the database ");
            foreach (var item in types)
            {
                Console.Write($"{item}, ");
            }
            Console.WriteLine();

            do
            {
                
                
                inputType = Adminisztracio.Input("Type").ToLower();

                bool flag = true;
                foreach (var item in types)
                {

                    if (inputType == item.ToLower())
                    {
                        notCorrectType = false;
                        flag = false;
                        break;
                    }

                }
                if (flag)
                {
                    Console.WriteLine("You have to choose from the listed types  ");
                }
            }
            while (notCorrectType);

            do
            {

                for (int i = 0; i < 4; i++)
                {
                    switch (i)
                    {
                        case 0:
                            inputName = Adminisztracio.Input("Name");
                            Adminisztracio.InputTypeChecker(inputName);
                            break;
                        case 1:
                            inputParams = Adminisztracio.Input("Param");
                            Adminisztracio.InputTypeChecker(inputParams);
                            break;
                        case 2:
                            while (!(Adminisztracio.IsGreaterThanZero(inputPrice)))
                            {
                                try
                                {
                                    inputPrice = int.Parse(Adminisztracio.Input("Price"));
                                    Adminisztracio.InputTypeChecker(inputPrice.ToString());
                                    if (Adminisztracio.IsGreaterThanZero(inputPrice) == false)
                                    {
                                        throw new FormatException();
                                    }
                                }
                                catch (FormatException)
                                {
                                    Console.WriteLine("The price must be a number greater than 0");
                                }
                            }
                            break;
                    }
                }
                string input;
                do
                {
                    Console.WriteLine("Would you like to add aditional data? (y/n)");
                    input = Console.ReadLine() ?? "";

                    if (input.ToLower() == "y")
                    {
                        AddData(false);
                    }
                    else if (input.ToLower() == "n")
                    {
                        
                        break;
                    }


                } while (!(input == "y" || input == "n"));

                Adminisztracio newList = new(inputType, inputName, inputParams, inputPrice);

                //checks if inputed new data already exist in the database
                if (datas.Contains(newList) == false)
                { 
                    datas.Add(newList); 
                }
                else
                {
                    Console.WriteLine("This device is already  listed in the database");
                }

                moreData = false;
            } while (moreData);

        }

        public static void WriteToFile()
        {
            List<string> connectedData = new();
            

            foreach (var data in datas)
            {
                connectedData.Add($"{data.Type};{data.Name};{data.Parameters};{data.Price}");
            }
            //Console.WriteLine(connectedData);

            File.WriteAllLines("ki.txt", connectedData, Encoding.UTF8);
        }

        public static void GetDataFromFile()
        {
            datas.Clear();
            foreach (var item in File.ReadAllLines("ki.txt", Encoding.UTF8))
            {
                string[] data = item.Split(';');
                string type = data[0];
                string name = data[1];
                string parameter = data[2];
                double price = double.Parse(data[3]);
                Adminisztracio newdata = new(type, name, parameter, price);
                datas.Add(newdata);

            }
        }

        public static void TaskChooser()
        {
            Console.WriteLine("1. Add aditional devices to the database\n2. Clear the database and get the data of devices from \"ki.txt\" to the database\n3. Search in the database by type\n4. Search in the database by name\n5. Search in the database by Parameter\n6. Search in the database by price\n7. Sale\n8. Statistics\n9. Generate divs for html\n10. Clear the database and input new devices into it\n0. Exit the program");
            bool stay = true;
            do
            {

               
                Console.Write("Choose the number of the task you want to initiate: ");
                string input = Console.ReadLine() ?? "";

                switch (input)
                {
                    default:
                        Console.WriteLine("Choose the number of the task you want to initiate");
                        break;
                    case "1":
                        AddData(true);
                        break;
                    case "2":
                        GetDataFromFile();
                        break;
                    case "3":
                        SearchType();
                        break;
                    case "4":
                        SearchName(); 
                        break;
                    case "5":
                        SearchParam();
                        break;
                    case "6":
                        SearchPrice();
                        break;
                    case "7":
                        Sale();
                        break;
                    case "8":
                        MakeStatistics();
                        break;
                    case "9":
                        GenerateHtmlDivs();
                        break;
                    case "10":
                        AddData(false);
                        break;
                    case "0":
                        stay = false;
                        break;
                    
                        
                }


            } while (stay);
        }

        public static void SearchType()
        {
            string input;
            bool flag = true;
            do
            {
                Console.WriteLine("Please enter the type of the device you want to search for in the databese");
                input = Console.ReadLine() ?? "";

                foreach (var type in types)
                {
                    if (type.ToLower().Contains(input.ToLower()) == true)
                    {
                        foreach (var data in datas)
                        {
                            Console.WriteLine($"{data.Type} {data.Name} {data.Parameters} {data.Price}");
                        }
                        flag = false;
                    }
                }
                
                if (flag == true)
                {
                    Console.WriteLine("There no such type in the database");
                    flag = false;
                }


            } while (flag);
            do
            {
                Console.WriteLine("Would you like to search for aditional data? (y/n)");
                input = Console.ReadLine() ?? "";

                if (input.ToLower() == "y")
                {
                    SearchType();
                }
                else if (input.ToLower() == "n")
                {
                    TaskChooser();
                }

            } while (!(input == "y" || input == "n"));
        }

        public static void SearchName()
        {
            string input;
            bool flag = true;
            do
            {
                Console.WriteLine("Please enter the name of the device you want to search for in the databese");
                input = Console.ReadLine() ?? "";

                foreach (var data in datas)
                {
                    if (data.Name.ToLower().Contains(input.ToLower()) == true)
                    {
                        Console.WriteLine($"{data.Type} {data.Name} {data.Parameters} {data.Price}");
                        
                        flag = false;
                    }
                }

                if (flag == true)
                {
                    Console.WriteLine("There no such name in the database as you inputed");
                    flag = false;
                }


            } while (flag);
            do
            {
                Console.WriteLine("Would you like to search for aditional data? (y/n)");
                input = Console.ReadLine() ?? "";

                if (input == "y")
                {
                    SearchName();
                }
                else if (input == "n")
                {
                    TaskChooser();
                }

            } while (!(input == "y" || input == "n"));
        }

        public static void SearchParam()
        {
            string input;
            bool flag = true;
            do
            {
                Console.WriteLine("Please enter the parameter you want to search for in the databese");
                input = Console.ReadLine() ?? "";

                foreach (var data in datas)
                {
                    if (data.Parameters.ToLower().Contains(input.ToLower()) == true)
                    {
                        Console.WriteLine($"{data.Type} {data.Name} {data.Parameters} {data.Price}");

                        flag = false;
                    }
                }

                if (flag == true)
                {
                    Console.WriteLine("There no such parameter in the database");
                    flag = false;
                }


            } while (flag);
            do
            {
                Console.WriteLine("Would you like to search for aditional data? (y/n)");
                input = Console.ReadLine() ?? "";

                if (input.ToLower() == "y")
                {
                    SearchName();
                }
                else if (input.ToLower() == "n")
                {
                    TaskChooser();
                }

            } while (!(input == "y" || input == "n"));
        }

        public static void SearchPrice()
        {

            string input;
            int inputMin, inputMax;
            bool flag = true;
            do
            {
                Console.WriteLine("Please enter the minimum and maximum value of the price range you want to search for in the databese"); //WIP megfogalmazás
                Console.Write("min:");
                inputMin = int.Parse(Console.ReadLine() ?? "");
                Console.Write("max");
                inputMax = int.Parse(Console.ReadLine() ?? "");

                foreach (var data in datas)
                {
                    if (Convert.ToInt32(data.Price) > inputMin && inputMax > Convert.ToInt32(data.Price))
                    {
                        Console.WriteLine($"{data.Type} {data.Name} {data.Parameters} {data.Price}");

                        flag = false;
                    }
                }

                 
                if (flag == true)
                {
                    Console.WriteLine("There no such price in the range you set");
                }


            } while (flag);
            do
            {
                Console.WriteLine("Would you like to search for aditional data? (y/n)");
                input = Console.ReadLine() ?? "";

                if (input.ToLower() == "y")
                {
                    SearchName();
                }
                else if (input.ToLower() == "n")
                {
                    TaskChooser();
                }

            } while (!(input == "y" || input == "n"));
        }

        public static void Sale()
        {
            Console.Write("How much percentage shall the sale be: ");
            double inputPercentage;
            do
            {
                inputPercentage = double.Parse(Console.ReadLine() ?? "");

            } while (!(inputPercentage < 100 && inputPercentage > 0));

            
            Console.WriteLine("In which category?");
            foreach (var type in types)
            {
                Console.Write($"{type}, ");
            }
            Console.WriteLine("All");
            string inputCategory = Console.ReadLine() ?? "";

            if (inputCategory.ToLower() == "all")
            {
                foreach (var data in datas)
                {
                    data.Price -= data.Price * (inputPercentage / 100.0);
                }
            }
            else
            {
                foreach(var data in datas)
                {
                    if (data.Type.ToLower() == inputCategory.ToLower())
                    {
                        data.Price -= data.Price * (inputPercentage / 100.0);
                    }
                }
            }

            WriteToFile();
            Console.WriteLine("The new prices were succesfully updated");
            TaskChooser();
        }
        public static void MakeStatistics()
        {
            int cpu = 0, gpu = 0, motherboard = 0, ram = 0, hdd = 0, ssd = 0, monitor = 0, mouse = 0, keyboard = 0;
            
            foreach (var data in datas) 
            {
                switch (data.Type.ToLower()) 
                {
                    case "cpu":
                        cpu++;
                        break;
                    case "gpu":
                        gpu++;
                        break;
                    case "motherboard":
                        motherboard++;
                        break;
                    case "ram":
                        ram++;
                        break;
                    case "hdd":
                        hdd++;
                        break;
                    case "ssd":
                        ssd++;
                        break;
                    case "monitor":
                        monitor++;
                        break;
                    case "mouse":
                        mouse++;
                        break;
                    case "keyboard":
                        keyboard++;
                        break;

                }
            }

            Console.WriteLine($"Number of CPUs in the database: {cpu}\nNumber of GPUs in the database: {gpu}\nNumber of Motherboards in the databse: {motherboard}\nNumber of RAMs in the database: {ram}\nNumber of HDDs in the database: {hdd}\nNumber of SSDs in the database {ssd}\nNumber of Monitors in the database: {monitor}\nNumber of Mouses in the database: {mouse}\nNumber of Keyboards in the database: {keyboard}");
            TaskChooser();
        }
        public static void GenerateHtmlDivs()
        {
            List<string> divs = new();
            divs.Add($"<div class=\"flex-container first\">\r\n        <div>Type</div>\r\n        <div>Name</div>\r\n        <div>Parameters</div>\r\n        <div>Price</div>\r\n      </div>");
            
            foreach (var data in datas)
            {
                divs.Add($"<div class=\"flex-container\">\r\n        <div>{data.Type}</div>\r\n        <div>{data.Name}</div>\r\n        <div>{data.Parameters}</div>\r\n        <div>{data.Price}</div>\r\n      </div>");
            }
            File.WriteAllLines("html_div.txt", divs, Encoding.UTF8);
            Console.WriteLine("Generation was successful");
        }
    }
}
