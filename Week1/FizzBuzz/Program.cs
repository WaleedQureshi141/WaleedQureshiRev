// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

// test fizzbuzz program

/*
access modifiers
    public - accessable anywhere
    private - only accessable in the class
    internal - only accessable to class and its members, but not static member
    protected -  only accessable to class and its subclasses

    static - we dont need a class object to access static member
             static member values are shared throughout the class
*/

// FizzBuzz(20);

// public static void FizzBuzz(int num)
// {
    int num = 20;

    for (int i = 1; i <= num; i++)
    {
        if (i % 3 == 0 && i % 5 == 0)
        {
            Console.WriteLine("fizzbuzz");
        }
        else if (i % 3 == 0)
        {
            Console.WriteLine("fizz");
        }
        else if (i % 5 == 0)
        {
            Console.WriteLine("buzz");
        }
        else
        {
            Console.WriteLine(i);
        }
    }
// }
