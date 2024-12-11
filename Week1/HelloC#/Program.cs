using System;       // used to import namespaces/libraries with USING

namespace HelloC_;  // file container (similar to package name)

// our main class, all our code will be inside here
class Program
{
    // this method is an entry point of execution
    static void Main(string[] args)
    {
        // Console.WriteLine("Hello, World!");

        // built-in data types

        // integer/numeric
        int age = 25;
        double money = 50.75;                   // general use, more precise
        float lessMoney = 25.5f;                // less precision, less memory usage
        long largeNum = 123456789123456789;     // larger than int, less than double

        // chars and boolean
        char initial = 'W';
        bool isTrue = true;

        // strings
        string greet = "hello";

        Console.WriteLine(greet + " Waleed");
        Console.WriteLine($"{greet} Waleed. How are you?");

        // logical operators
        // || => OR
        // && => AND 
        // !a => NOT a
        // ^ => XOR

        // user input
        Console.WriteLine("enter your name");
        string name = Console.ReadLine();       // enter user input
        Console.WriteLine(name);

        // conditions and loops are the same as java

        // type conversion

        // impicit conversion
        int num = 10;
        double point = num;      // converted to double, no data loss

        // explicit conversion
        double point2 = 50.789;
        int num2 = (int)point2; // converts to int, data is loss

    }
}
