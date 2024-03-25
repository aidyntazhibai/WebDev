# def sleep_in(weekday, vacation):
#   if not weekday or vacation:
#     return True
#   else:
#     return False

# x = input()
# y = input()

# print(sleep_in(x, y))


# def diff21(n):
#   if n > 21:
#     x = n-21
#     return 2*x
#   else:
#     x = 21-n
#     return x
  

#   def near_hundred(n):
#   dif = abs(100-n)
#   diff = abs(200-n)
#   if dif <= 10 or diff <= 10:
#     return True
#   else:
#     return False
  

#   def missing_char(str, n):
#     return str[0:n] + str[n+1: len(str)]

# x = missing_str('Ulpa', 1)

# print(x)


# def monkey_trouble(a_smile, b_smile):
#   if a_smile == b_smile:
#     return True
#   else:
#     return False
  

# def parrot_trouble(talking, hour):
#   if talking and (hour < 7 or hour > 20):
#     return True
#   else:
#     return False
  


# def pos_neg(a, b, negative):
#   if negative and (a < 0 and b < 0):
#     return True
#   if not negative and ((a < 0 and b > 0) or (a > 0 and b < 0)):
#     return True
#   else:
#     return False
  

# def front_back(str):
#   n = len(str)
#   if n <= 1:
#     return str
#   else:
#     return str[n-1] + str[1:n-1] + str[0]
  


# def sum_double(a, b):
#   if a == b:
#     return (a+b)*2
#   else:
#     return a+b



# def makes10(a, b):
#   if (a == 10 or b == 10) or a+b == 10:
#     return True
#   else:
#     return False
  

# def not_string(str):
#   if str[0:3] == 'not':
#     return str
#   else:
#     return 'not ' + str
  

# def front3(str):
#   if len(str) >= 3:
#     return str[0:3] + str[0:3] + str[0:3]
#   else:
#     return str + str + str