# def string_times(str, n):
#   return str*n

# def string_splosion(str):
#     n = len(str)
#     new_str = str[0]
#     for i in range(2, n+1):
#         new_str += str[0:i]
#     return new_str

# print(string_splosion('Ulpa'))


# def array_front9(nums):
#   n = len(nums)
#   if n <= 4:
#     for i in range(n):
#       if nums[i] == 9:
#         return True 
#         quit()
#   else:
#     for i in range(4):
#       if nums[i] == 9:
#         return True
#         quit()
  
#   return False

# res = array_front9([1, 2, 4, 3, 4])

# print(res)



# def front_times(str, n):
#     l = len(str)
#     if l < 3:
#         return str * n
#     else:
#         return str[0:3] * n
    


# def last2(str):
#     l = len(str)
#     if l < 2:
#         return 0 
  
#     sub = str[l-2:]
#     cnt = 0
  
#     for i in range(l-2):
#         s = str[i: i+2]
#         if s == sub:
#             cnt += 1
  
# return cnt




# def array123(nums):
#     n = len(nums)
#     for i in range(n-2):
#         if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
#             return True
#             quit()
  
#     return False



# def string_bits(str):
#     n = len(str)
#     res = ''
#     for i in range(n):
#         if i % 2 == 0:
#             res += str[i]  
#     return res



# def array_count9(nums):
#     n = len(nums)
#     cnt = 0
  
#     for i in range(n):
#         if nums[i] == 9:
#             cnt += 1
#     return cnt



# def string_match(a, b):
#     na = len(a)
#     nb = len(b)
#     n = 0
#     cnt = 0
  
#     if na > nb:
#         n = na
#     elif na == nb:
#         n = na
#     else:
#         n = nb
  
#     for i in range(n-1):
#         if a[i: i+2] == b[i: i+2]:
#             cnt += 1
  
#     return cnt