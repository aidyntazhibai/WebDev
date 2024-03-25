# a = 'Hello, World!'

# print(a)


# n = int(input())

# if n % 2 != 0:
#     print('Weird')
# if n % 2 == 0:
#     if n >= 2 and n <= 5:
#         print('Not Weird')
#     if n >= 6 and n <= 20:
#         print('Weird')
#     if n > 20:
#         print('Not Weird')


# a = int(input())
# b = int(input())

# x = int(a/b)
# y = float(a/b)

# print(x)
# print(y)


# n = int(input())

# for i in range(0, n):
#     print(i*i)


# def is_leap(year):
#     leap = False
    
#     if(year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
#         leap = True
    
#     return leap

# year = int(input())
# print(is_leap(year))



# n = int(input())

# for i in range(1, n+1):
#     print(i, end='')



# a = int(input())
# b = int(input())

# print(a+b)
# print(a-b)
# print(a*b)




# n = int(input())
# student_marks = {}

# for i in range(n):
#     name, *line = input().split()
#     scores = list(map(float, line))
#     student_marks[name] = scores
    
# query_name = input()

# if query_name in student_marks:
#     avg_score = sum(student_marks[query_name])/3
#     print("{:.2f}".format(avg_score))




# N = int(input())  # Number of commands
# arr = []  # Initialize an empty list

# for _ in range(N):
#     command, *args = input().split()
#     if command == 'insert':
#         i, e = map(int, args)
#         arr.insert(i, e)
#     elif command == 'print':
#         print(arr)
#     elif command == 'remove':
#         e = int(args[0])
#         arr.remove(e)
#     elif command == 'append':
#         e = int(args[0])
#         arr.append(e)
#     elif command == 'sort':
#         arr.sort()
#     elif command == 'pop':
#         arr.pop()
#     elif command == 'reverse':
#         arr.reverse()


#     def print_full_name(first_name, last_name):
#     print("Hello {} {}! You just delved into python.".format(first_name, last_name))

# if __name__ == '__main__':
#     first_name = input()
#     last_name = input()
#     print_full_name(first_name, last_name)