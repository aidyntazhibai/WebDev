# def double_char(str):
#     n = len(str)
#     res = ''
#     for i in range(n):
#         res += str[i]*2
        
#     return res


# def count_code(str):
#     n = len(str)
#     cnt=0
#     for i in range(n-3):
#         if str[i:i+2] == "co" and str[i+3] == "e":
#         cnt+=1
    
#     return cnt


# def count_hi(str):
#     n = len(str)
#     cnt = 0
#     for i in range(n-1):
#         if str[i:i+2] == 'hi':
#         cnt += 1
    
#     return cnt


# def end_other(a, b):
#     a_lower = a.lower()
#     b_lower = b.lower()
#     return a_lower.endswith(b_lower) or b_lower.endswith(a_lower)


# def cat_dog(str):
#     count_cat = str.count('cat')
#     count_dog = str.count('dog')
#     return count_cat == count_dog


# def xyz_there(str):
#     for i in range(len(str) - 2):
#         if str[i:i+3] == 'xyz' and (i == 0 or str[i-1] != '.'):
#         return True
#     return False