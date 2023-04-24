var mergeNodes = function(head) {
    let aux = new ListNode();
    let ans = aux;
    let current = head.next;
    let sum = 0;

    while(current){
        if(current.val != 0){
            sum+=current.val;
        }
        else{
            aux.next = new ListNode(sum);
            sum = 0;
            aux = aux.next;
        }
        current = current.next;
    }
    return ans.next;

};