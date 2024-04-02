/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/

const mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let head = dummy;
    while(list1 && list2){
        if(list1.val < list2.val){
            dummy.next = list1;
            list1 = list1.next;
        } else {
            dummy.next = list2;
            list2 = list2.next;
        }
        dummy = dummy.next;
    }
    if(list1){
        dummy.next = list1;
    }
    if(list2){
        dummy.next = list2;
    }
    return head.next;
};