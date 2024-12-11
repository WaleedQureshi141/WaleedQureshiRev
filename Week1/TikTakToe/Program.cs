using System.Security.Cryptography.X509Certificates;

namespace TikTakToe;

class Program
{
    static void Main(string[] args)
    {
        char[,] arr = {
            {'1', '2', '3'},
            {'4', '5', '6'},
            {'7', '8', '9'}
        };

        char player1 = 'O';
        char player2 = 'X';

        Console.WriteLine("Hello, World!");

        Console.WriteLine("WELCOME TO A TIKTAKTOE GAME");
        Console.WriteLine("EACH BOX WILL BE PROVIDED AS A NUMBER");

        Console.WriteLine("1 | 2 | 3");
        Console.WriteLine("---------");
        Console.WriteLine("4 | 5 | 6");
        Console.WriteLine("---------");
        Console.WriteLine("7 | 8 | 9");

        bool ready = false;
        
        Console.WriteLine("ARE YOU READY TO START? (y/n)");
        string ans = Console.ReadLine();

        if (ans == "y" || ans == "Y")
        {
            ready = true;
        }

        while (ready == false)
        {
            Console.WriteLine("");
            Console.WriteLine("JUST LET ME KNOW WHEN YOU ARE READY...");
            Thread.Sleep(5000);

            Console.WriteLine("ARE YOU READY TO START? (y/n)");
            ans = Console.ReadLine();

            if (ans == "y")
            {
                ready = true;
            }            
        }

        Console.WriteLine("GAME START");

        char winner = '+';
        // bool gameOver = false;
        int moves = 0;
        while (moves < 9)
        {
            Console.WriteLine("");
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Console.Write($"{arr[i, j]}   ");
                }
                Console.WriteLine("");
            }

            Console.Write("Player 1, Make Your Choice: ");
            string str = Console.ReadLine();
            char choice = str.ToCharArray()[0];
            moves++;
            arr = Move(arr, choice, player1);

            if (moves > 4)
            {
                if (WinnerCheck(arr, player1) == player1)
                {
                    winner = player1;
                    break;
                }
            }

            // Console.WriteLine(arr);
            Console.WriteLine("");
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Console.Write($"{arr[i, j]}   ");
                }
                Console.WriteLine("");
            }

            Console.Write("Player 2, Make Your Choice: ");
            string str2 = Console.ReadLine();
            char choice2 = str2.ToCharArray()[0];
            moves++;
            arr = Move(arr, choice2, player2);

            if (moves > 4)
            {
                if (WinnerCheck(arr, player2) == player2)
                {
                    winner = player2;
                    break;
                }
            }
        }

        if (winner == '+')
        {
            Console.WriteLine("IT WAS A DRAW, NOBODY WINS");
        }
        else if (winner == player1)
        {
            Console.WriteLine($"PLAYER 1 WINS!!!");
        }
        else
        {
            Console.WriteLine("PLAYER 2 WINS!!!");
        }
    }

    public static char[,] Move(char[,] inp, char choice, char player)
    {
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                if (inp[i, j] == choice)
                {
                    inp[i, j] = player;
                    return inp;
                }
            }
        }
        return inp;
    }

    public static char WinnerCheck(char[,] arr, char player)
    {
        // up left - right
        if (arr[0, 0] == player && arr[0, 1] == player && arr[0, 2] == player)
        {
            return player;
        }
        // mid left - right
        else if (arr[1, 0] == player && arr[1, 1] == player && arr[1, 2] == player)
        {
            return player;
        }
        // down left - right
        else if (arr[2, 0] == player && arr[2, 1] == player && arr[2, 2] == player)
        {
            return player;
        }
        // left up - down
        else if (arr[0, 0] == player && arr[1, 0] == player && arr[2, 0] == player)
        {
            return player;
        }
        // mid up - down
        else if (arr[0, 1] == player && arr[1, 1] == player && arr[2, 1] == player)
        {
            return player;
        }
        // right up - down
        else if (arr[0, 2] == player && arr[1, 2] == player && arr[2, 2] == player)
        {
            return player;
        }
        // up left - down right
        else if (arr[0, 0] == player && arr[1, 1] == player && arr[2, 2] == player)
        {
            return player;
        }
        // down left - up right
        else if (arr[2, 0] == player && arr[1, 1] == player && arr[0, 2] == player)
        {
            return player;
        }
        return '-';
    }
}
