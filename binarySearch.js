
function binarySearch(list, value) {
    let middle = (parseInt(list.length/2));
    let listnew =list;
    console.log('nuevo medio ',list[middle],' este es el medio', middle)
        if(list[middle]<value && middle >=0){
            console.log('1')
            listnew = listnew.slice(middle, list.length)
            console.log('list rigth',listnew)
        }
        if(value < list[middle] && middle >= 0){
            console.log('2')
            listnew = listnew.slice(0, middle)
            console.log('lista left',listnew)
        }
        if(value === list[middle]){
            return list[middle];
        }else{
            if(middle >0){
                return binarySearch(listnew,value)
            }else{
                return 'numero no encontrado'
            }
        }
}


console.log(binarySearch([1,2,3,4,5,6,7,8,9],100));  

