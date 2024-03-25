# def make_bricks(small, big, goal):
#     max_big_inches = big * 5
#     remaining_goal = goal - min(goal // 5, big) * 5
#     return remaining_goal <= small


# def no_teen_sum(a, b, c):
#     def fix_teen(n):
#         if n in [13, 14, 17, 18, 19]:
#         return 0
#         return n

#     return fix_teen(a) + fix_teen(b) + fix_teen(c)


# def make_chocolate(small, big, goal):
#     max_big = goal // 5
#     if big >= max_big:
#         goal -= max_big * 5
#     else:
#         goal -= big * 5

#     if small >= goal:
#         return goal
#     else:
#         return -1
    

# def lone_sum(a, b, c):
#     if a == b == c:
#         return 0
#     elif a == b:
#         return c
#     elif a == c:
#         return b
#     elif b == c:
#         return a
#     else:
#         return a + b + c
    

# def round_sum(a, b, c):
#     def round10(num):
#         return (num + 5) // 10 * 10

#     return round10(a) + round10(b) + round10(c)



# def lucky_sum(a, b, c):
#     if a == 13:
#         return 0
#     elif b == 13:
#         return a
#     elif c == 13:
#         return a + b
#     else:
#         return a + b + c
    


# def close_far(a, b, c):
#     if abs(b - a) <= 1 and abs(c - a) >= 2 and abs(c - b) >= 2:
#         return True
#     elif abs(c - a) <= 1 and abs(b - a) >= 2 and abs(b - c) >= 2:
#         return True
#     else:
#         return False