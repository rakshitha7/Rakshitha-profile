function factorial()
{
    num=parseInt(document.getElementById('num').value);
    message=""
    if(num){
    res=1
    for(let i=1;i<=num;i++)
    {
        res *=i
    }
    message="factorial of "+num+"is:"+res;
    document.getElementById('res').innerHTML=message
}
}

function digitsum()
{
    num=parseInt(document.getElementById('num').value);
    message=""
    num1=num
    if(num){
        res=0
        while(num!=0)
        {
            res +=parseInt(num%10)
            num=parseInt(num/10)
        }
    message="sum of digit of "+num1+" is:"+res;
    document.getElementById('res').innerHTML=message
}
}

function palindrome()
{
    num=parseInt(document.getElementById('num').value);
    message=""
    num1=num;
    if(num){
        res=0

        while(num!=0)
        {
            s =parseInt(num%10)
            res=res*10+s
            num=parseInt(num/10)
        }
        if(res==num1)
        {
    message="the "+num1+" is a palindrome"
    document.getElementById('res').innerHTML=message
}
else{
    message="the "+num1+" is not a palindrome"
    document.getElementById('res').innerHTML=message
} 

}
}

function reverse()
{
    num=parseInt(document.getElementById('num').value);
    message=""
    num1=num;
    if(num){
        res=0

        while(num!=0)
        {
            s =parseInt(num%10)
            res=res*10+s
            num=parseInt(num/10)
        }
         
    message="the reverse of the number "+num1+" is:" +res
    document.getElementById('res').innerHTML=message

    document.getElementById('res').innerHTML=message
} 

}
