import math

#INPUT OUTPUT

#A
# a = float(input("enter a"))
# b = float(input("enter b"))

# print(math.sqrt(a**2+b**2))

#B

# a = int(input())
# print("The next number for the number ", a, " is ", a + 1)
# print("The previous number for the number ", a, " is ", a - 1)

#C

# N = int(input())
# K = int(input())

# print(K//N)

#D

# N = int(input())
# K = int(input())

# print(K % N)

#E

# V = int(input())
# T = int(input())

# print((V*T)%109)



#ELSE IF

#A

# a = int(input())
# b = int(input())

# if a > b:
#     print(a)
# else:
#     print(b)

#B

# a = int(input())

# if a % 4 == 0:
#     print("YES")
# else:
#     print("NO")

#C

# a = int(input()) 
# b = int(input())  

# if (a == 1 and b == 1) or (a != 1 and b != 1):
#     print("YES")
# else:
#     print("NO")


#D
    
# a = int(input())

# if a > 0:
#     print(1)
# elif a == 0:
#     print(0)
# else:
#     print(-1)

#E


# a = int(input())
# b = int(input())

# if a > b:
#     print(1)
# elif a == b:
#     print(0)
# else:
#     print(2)


#FOR WHILE

#PART i


# a = int(input())
# b = int(input())

# for i in range(a, b + 1):
#     if i % 2 == 0:
#         print(i, end=" ")



# a = int(input())
# b = int(input())
# c = int(input())
# d = int(input())

# for i in range(a, b + 1):
#     if i % d == c:
#         print(i, end=" ")



# a = int(input())
# b = int(input())

# for i in range(a, b + 1):
#     if (i ** 0.5).is_integer():
#         print(i, end=" ")


# x = int(input())
# d = int(input())
# count = 0

# for i in str(x):
#     if int(i) == d:
#         count += 1

# print(count)


# x = int(input())
# sum = 0

# for i in str(x):
#     sum += int(i)

# print(sum)


# x = int(input())
# s = str(x)[::-1]
# x = int(s)
# print(x)



# x = int(input())
# for i in range(2, x + 1):
#     if x % i == 0:
#         print(i)
#         exit()



# x = int(input())
# for i in range(1, x + 1):
#     if x % i == 0:
#         print(i, end=" ")



# x = int(input())
# count = 0
# for i in range(1, x + 1):
#     if x % i == 0:
#         count += 1

# print(count)



# sum = 0
# for x in range(100):
#     x = int(input())
#     sum += x

# print(sum)



# n = int(input())
# sum = 0
# for x in range(n):
#     x = int(input())
#     sum += x

# print(sum)



# a = int(input())
# x = 0
# pw = 0

# for i in str(a)[::-1]:
#     x += int(i) * 2 ** pw
#     pw += 1

# print(x)



# n = int(input())
# count = 0
# for x in range(n):
#     x = int(input())
#     if x == 0:
#         count += 1

# print(count)


#PART ii


# x = int(input())
# i = 1

# while i <= x:
#     if (i ** 0.5).is_integer():
#         print(i)
#     i += 1


# x = int(input())
# i = 2
# while i <= x:
#     if x % i == 0:
#         print(i)
#         exit()
#     i += 1


# x = int(input())
# i = 1
# while i <= x:
#     print(i, end=" ")
#     i *= 2


# n = int(input())

# while 1 < n:
#     if n % 2 != 0:
#         print("NO")
#         exit()
#     n //= 2

# print("YES")





# n = int(input())
# k = 0
# pw = 1
# while pw < n:
#     pw *= 2
#     k += 1

# print(k)


#ARRAY


# n = int(input())
# arr = []

# for i in range(n):
#     i = int(input())
#     arr.append(i)

# for i in range(n):
#     if i % 2 == 0:
#         print(arr[i], end=" ")


# n = int(input())
# arr = []

# for i in range(n):
#     i = int(input())
#     arr.append(i)

# for i in range(n):
#     if arr[i] % 2 == 0:
#         print(arr[i], end=" ")



# n = int(input())
# arr = []
# k = 0

# for i in range(n):
#     arr[i] = int(input())

# for i in range(n):
#     if arr[i] >= 0:
#         k += 1

# print(k)



# n = int(input())

# arr = list(map(int, input().split()))
# cnt = 0

# for i in range(1, n):
#     if arr[i] > arr[i-1]:
#         cnt += 1

# print(cnt)



# n = int(input())

# arr = list(map(int, input().split()))

# for i in range(1, n):
#     if arr[i] * arr[i-1] > 0:
#         print("YES")
#         exit()

# print("NO")



# n = int(input())
# cnt = 0
# arr = list(map(int, input().split()))

# for i in range(1, n-1):
#     if arr[i] > arr[i-1] and arr[i] > arr[i+1]:
#         cnt += 1

# print(cnt)



# n = int(input())

# arr = list(map(int, input().split()))

# for u in arr[::-1]:
#     print(u , end=' ')


#FUNCTIONS



# def find_min(a, b, c, d):
#     return min(a, b, c, d)

# a, b, c, d = map(int, input().split())

# res = find_min(a, b, c, d)
# print(res)


# def power(a, n):
#     return pow(a, n) #a ** n

# a = float(input())
# n = int(input())

# print(power(a, n))



# def xor(x, y):
#     if x == y:
#         return 0
#     elif x == 1 or y == 1:
#         return 1
    
# x, y = map(int, input().split())

# print(xor(x, y))


