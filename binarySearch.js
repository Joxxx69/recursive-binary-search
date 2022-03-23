
function binarySearch(list, value) {
    let middle = (parseInt(list.length/2)+1);
    let listnew;
        if(middle<=value){
            console.log('1')
            console.log(middle)
            listnew = list.slice(middle, list.length)
            
        }else if(value < middle){
            console.log('2')
            listnew = list.slice(0, middle)
        }
        binarySearch(listnew,value)


    return 0;
}


console.log(binarySearch([1,2,3,4,5,6,7,8],8));

