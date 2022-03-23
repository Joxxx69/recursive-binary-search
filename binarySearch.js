
function binarySearch(list, value) {
    let middle = (parseInt(list.length/2));
    let listnew;

        if(middle<=value){
            console.log('1')
            listnew = list.slice(middle, list.length)
            console.log(listnew)
            if(value == middle){
                return 'valor encontrado'
            }else{
                binarySearch(listnew,value)
            }
        }
        if(value < middle){
            console.log('2')
            listnew = list.slice(0, middle)
            if(value == middle){
                return 'valor encontrado'
            }else{
                binarySearch(listnew,value)
            }
        }

    return 'no se encotro el numero';
}


console.log(binarySearch([1,2,3,4,5,6,7,8,9],8));

