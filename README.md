# Jusepez11.github.io 
ITIS 3135 Web App Design and Development course website

I took advange of this to also divided from a course assignment to also showcase personal projects

## Course Homepage
<img src="images/course_homepage.png" >


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        if l1.val == 0 and l2.val == 0:
            return 0

        l3 = Optional[ListNode]
        
        while l1.next != None and l2.next != None:
            l3.append(l1.val+l2.val)

        
        
        return l3
