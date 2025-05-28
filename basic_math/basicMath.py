
# 1. Count digits in a number

#  brute force
def countDigit (n):
    count = 0 
    while n > 0:
        count += 1
        n = n // 10
    return count

# print(countDigit(12345))

# 2. Reverse Digits of A Number

def reverseDigits(n):
    rev = 0
    while n > 0:
        rev = rev * 10 + n % 10
        n = n // 10
    return rev

# print(reverseDigits(45678))

# 3. Check if a number is Palindrome or Not

def isPalindrome(n):
    rev = reverseDigits(n)
    if n == rev:
        return True
    else:
        return False
    
# print(isPalindrome(12321))

# 4. Find GCD of two numbers

def gcd(a, b):
    for i in range(min(a,b), 1, -1):
        if a % i == 0 and b % i == 0:
            return i

    return 1  

# HEuclidean Algorithm using the modulus method to find the GCD of two numbers:

def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

# print(gcd(5, 7))

# 5. Check if a number is Armstrong Number or not

def isArmstrong(n):
    length = len(str(n))
    num = n
    sum = 0
    while n > 0:
        ld = n % 10
        sum += ld ** length
        n = n // 10
    return sum == num

# print(isArmstrong(153))

# 6. Print all Divisors of a given Number

def allDivisors(n):
    div = []
    for i in range(1, n + 1):
        if(n % i == 0):
            div.append(i)

    return div

# print(allDivisors(36))

# other way
def print_divisors(n):
    divisors = []
    for i in range(1, int(n**0.5) + 1):
        if n % i == 0:
            divisors.append(i)
            if i != n // i:  # Avoid adding the square root twice for perfect squares
                divisors.append(n // i)
    divisors.sort()  # Sort divisors in ascending order
    return divisors

divisors = print_divisors(36)
# print(divisors)

# 7. Check if a number is prime or not

def isPrime(n):
    if n <= 1:
        return False
    
    for i in range(2, int(n**0.5) + 1):
            if n % i == 0:
                return False
    return True

# print(isPrime(2))


# 8. Print Fibonacci Series up to Nth term

def fibonacci(n):
    let

