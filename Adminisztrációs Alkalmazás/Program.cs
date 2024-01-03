namespace Adminisztrációs_Alkalmazás
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Feladatok.AddData(true);
            Feladatok.WriteToFile();
            Feladatok.TaskChooser();
        }
    }
}