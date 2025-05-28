
# 1. first pattern
'''
****
****
****
****
'''

def first (n):
    for i in range(n):
        for i in range(n):
            print("*", end=" ")
        print()
# first(5)

# 2. secode pattern
'''
*
**
***
****
'''

def second (n):
    for i in range (n):
        for j in range (i):
            print("*", end=" ")
        print()   

# second(5)      

# 3. third pattern
'''
1
22
333
4444
'''

def third (n):
    for i in range (n):
        for j in range(i):
            print(i, end=" ")
        print()

# third(6)

# 4. fourth pattern
'''
1
12
123
1234
'''

def fourth (n):
    for i in range(n):
        for j in range(i):
            print(j+1, end=" ")
        print()

# fourth(5)

# 5. fifth pattern
'''
****
***
**
*
'''

def fifth (n):
    for i in range(n , 0, -1):
        for j in range(i):
            print("*", end=" ")
        print()

# fifth(5)

# 6. sixth pattern
'''
1234
123
12
1
'''

def sixth (n):
    for i in range(n, 0, -1):
        for j in range(i):
            print(j+1, end=" ")
        print()

# sixth(5)    


# 7. seventh pattern
'''
    *
   ***
  *****
 *******
'''
def seventh (n):
    for i in range(n):
        for j in range(n-i-1):
            print(" ", end="")
        for k in range(2*i + 1):
            print("*", end="")
        print()

# seventh(5)

# 8. eigth pattern
'''
 *******
  *****
   ***
    *
'''

def eigth (n):
    for i in range(n, 0 , -1):
        for j in range(n-i):
            print(" ", end="")
        for k in range(2*i-1):
            print("*", end="")
        print()

# eigth(5)   

# 9. ninth pattern
'''
    *
   ***
  *****
 *******
 *******
  *****
   ***
    *
'''

def ninth (n):
    for i in range(n):
        for j in range(n-i-1):
            print(" ", end="")
        for k in range(2*i+1):
            print("*", end="")
        print()

    for h in range(n , 0, -1):
        for j in range(n-h):
            print(" ", end="")
        for k in range (2*h-1):
            print("*", end="")
        print()    

# ninth(5)   

# tenth pattern
'''
*
**
***
**
*
'''  

def tenth (n):
    for i in range(n):
        for j in range(i):
            print("*", end="")
        print()

    for i in range(n-1, 0, -1):
        for j in range(i):
            print("*", end="")
        print()          

# tenth(5)

# 11. eleventh pattern
'''
1
01
101
0101
10101
'''

def eleventh (n):
    start= 1
    for i in range(n):
        if i%2 == 0:
            start = 1
        else:
            start = 0
        for j in range(i+1):
            print(start, end='')
            start = 1-start
        print()

# eleventh(5)

# twelfth pattern
'''
1******1
12****21
123**321
12344321 
'''

def twelfth(n):
    for i in range(1, n+1):
        temp=i
        for j in range(1,i+1):
            print(j, end="")
        for k in range(2*(n-i)):
            print("*", end="")
        for h in range(i, 0, -1):
            print(temp, end="")
            temp = temp-1    
        print()

# twelfth(4)    


# 13. thirteenth parttern
'''
1
12
345
6788
'''
def thirteenth(n):
    temp=1
    for i in range(1, n+1):
        for j in range(i):
            print(temp, end=" ")
            temp = temp+1
        print()
           
# thirteenth(4)    

# 14. fourteenth pattern
'''
A
AB
ABC
ABCD
'''

def fourteenth(n):
    temp = 'ABCDEFGHI'
    for i in range(1, n+1):
        for j in range(i):
            print(temp[j], end=" ")
        print()

def print_pattern(n):
    for i in range(1, n + 1):
        for j in range(1, i + 1):
            print(chr(64 + j), end=" ")  # chr(65) is 'A', so 64 + j gives the correct letter
        print()

# fourteenth(4)

# 15. fifteenth patterns

def fifteenth(n):
    for i in range(n+1, 1, -1):
        for j in range(1, i):
            print(chr(64 + j), end=" ")
        print()

# fifteenth(5)

 # 16. sixteenth pattern
'''
 A
 BB
 CCC
 DDDD
'''

def sixteenth (n):
    for i in range( 1 , n + 1):
        for j in range (1, i+1):
            print(chr(64 + i), end="")
        print()

# sixteenth(5)

# 17. seventeenth pattern
'''
     A
    ABA
   ABCBA
  ABCDCBA
'''

def seventeenth (n):
    for i in range(1, n):
        for j in range(n-i):
            print(" ", end="")
        for k in range(1,i+1):
            print(chr(64+k), end="")
        for l in range(i-1, 0, -1):
            print(chr(64+l), end="")
        print()

# seventeenth(4)

# 18. eighteenth patterns
'''
D
CD
BCD
ABCD
'''

def eighteenth (n):
    for i in range( n):
        for j in range(i+1):
            print(chr((64 + n -i) +j), end="")
        print()

# eighteenth(4)

# 19. ninteenth patterns
'''
********
***  ***
**    **
*      *
**    **
***  ***
********
'''

def nineteenth (n):
    for i in range(n, 0, -1):
        for j in range(i):
            print("*", end="")
        for k in range(2 * (n-i)):
            print(" ", end="")
        for h in range(i):
            print("*", end="")
        print()
    for h in range(1 ,n+1):
        for j in range(h):
            print("*", end="")
        for k in range(2 * (n-h)):
            print(" ", end="")
        for l in range(h):
            print("*", end="")
        print()

# nineteenth(4)

# 20 twenteenth patterns
'''
*    *
**  **
******
**  **
*    *
'''

def twenteeth (n):
    for i in range(1, n+1):
        for k in range(i):
            print("*", end="")
        for j in range(2*(n-i)):
            print(" ", end="")
        for l in range(i):
            print("*", end="")
        print()
    
    for a in range(n-1, 0 , -1):
        for k in range(a):
            print("*", end="")
        for j in range(2*(n-a)):
            print(" ", end="")
        for l in range(a):
            print("*", end="")
        print()

# twenteeth(4)

# 21. twentyfirst patterns
'''
******
*    *
*    *
*    *
*    *
******
'''

def twentyfirst (n):
    for i in range(n):
        for j in range(n):
            if(i==0 or i==n-1 or j==0 or j==n-1):
                print("*", end="")
            else:
                print(" ", end="")
        print()

# twentyfirst(4)

# 22. twentyTwo patterns
'''
3 3 3 3 3 
3 2 2 2 3 
3 2 1 2 3 
3 2 2 2 3 
3 3 3 3 3
'''

def twentytwo (n):
    for i in range(2*n -1):
        for j in range(2*n -1):
            top = i
            left = j
            bottem = (2*n-1)-1 -i
            right = (2*n-1)-1 -j
            printNo = n - min(top, left, bottem, right)
            print(printNo, end="")
        print()

twentytwo(3)