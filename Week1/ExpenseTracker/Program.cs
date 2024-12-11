namespace ExpenseTracker;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
        Greeting();
    }

    public static void Greeting()
    {
        Console.WriteLine("welcome to expense tracker");
        Thread.Sleep(1500);
        Console.WriteLine("Select one of the options: \n");

        DisplayOptions();
        getUserInput();
    }

    public static void DisplayOptions()
    {
        Console.WriteLine("1. add expense");
        Console.WriteLine("2. edit expense");
        Console.WriteLine("3. view expense");
        Console.WriteLine("4. delete expense");
        Console.WriteLine("5. save expense to a file");
        Console.WriteLine("6. exit");
    }

    public static int getUserInput()
    {
        Console.WriteLine("select the option");
        string? userInput = Console.ReadLine();

        try
        {
            return Int32.Parse(userInput);
        }
        catch (FormatException e)
        {
            Console.WriteLine("invalid input. please type a number");
            return getUserInput();
        }
    }
}
