# def count_evens(nums):
#     count = 0
#     for num in nums:
#         if num % 2 == 0:
#         count += 1
#     return count

# def sum13(nums):
#     total = 0
#     i = 0
#     while i < len(nums):
#         if nums[i] == 13:
#             i += 2  
#             continue
#         total += nums[i]
#         i += 1
#     return total


# def big_diff(nums):
#   return max(nums) - min(nums)


# def sum67(nums):
#     total = 0
#     skip = False
        
#     for num in nums:
#         if num == 6:
#             skip = True
#         elif num == 7 and skip:
#             skip = False
#         elif not skip:
#             total += num
        
#     return total


# def centered_average(nums):
#     nums.sort()  
#     nums = nums[1:-1]  
#     return sum(nums) // len(nums) 