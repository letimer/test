//06.剑offer-尾到头打印整个链表

var reversePrint = function(head) {
    let stack1 = [];
    let stack2 = [];
    //判断其是否为空链表
    while(head) {
        // 将链表数值一个个压入，并且链表箭头指向下一个
        stack1.push(head.val);
        head = head.next;
    }
    let k = stack1.length;
    // 将压入压数据先进后出的压入辅助数组
    for(let i=0;i<k;i++) {
        stack2[i] = stack1.pop()
    }
    return stack2;
};
// 思路是采用辅助数据，一个数组是压入链表数据，另外一个辅助栈是将将主数组中的数据反向压入辅助数组，返回辅助数组


//附带，在一组升序的数组当中如何找到两个数值，他们的值为目标target
//(思路是左右定一个标，根据两边和的数值与target的比较来决定左边压进还是右边)
function mudi(arr,target){
    let len=arr.length;
    let begin=arr[0];
    let o=0;
    let e=len-1;
    while(arr[o]+arr[e]!=target){
        if(arr[o]+arr[e]<target)
            o++;
        else{
            e--;
        }
    }
    console.log(o);
    console.log(e);
    return o,e;
}
var arr=[1,2,3,4,5];
var target=5;
mudi(arr,target);