/* MergeSort example for LinkedLists */

function getMiddle(head) {
    if (!head) return head;

    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

const mergeSort = (left, right) => {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (left && right) {
        if (left.val <= right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }

    current.next = left ? left : right;
    return dummy.next;
}

const sortList = function (head) {
    if (!head || !head.next) return head;

    const middle = getMiddle(head);
    const nextToMiddle = middle.next;
    middle.next = null;

    const sortedLeftHalf = sortList(head);
    const sortedRightHalf = sortList(nextToMiddle);

    return mergeSort(sortedLeftHalf, sortedRightHalf);
};


console.log(sortList([4, 2, 1, 3]))