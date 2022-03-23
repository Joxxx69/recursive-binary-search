
function binarySearch(list, value) {
    let middle = (parseInt(list.length/2));
    let listnew;
        if(value == middle){
            return middle
        }else{
            binarySearch(listnew,value)
        }
        if(middle<value){
            console.log('1')
            listnew = list.slice(middle, list.length)
            console.log(listnew)

        }
        if(value < middle){
            console.log('2')
            listnew = list.slice(0, middle)

        }
}


console.log(binarySearch([1,2,3,4,5,6,7,8,9],3));

