// // // // let fruit1 = 'apple', fruit2 = 'mango', fruit3 = 'pears';
// // // /*let fruit = ['apple', 'mango', 'pears'];
// // // let fun = new Array('FB', 'CB', 'VB');
// // // // console.log(fruit1, fruit2, fruit3);
// // // console.log(fruit);
// // // console.log(fun);*/

// // // let fruit = ['apple', 'mango', 'pears'];
// // // // console.log(fruit);

// // // /*let name = ['Ram', 'Hari', 'Shyam', 'Harry', 1, true, null, [1,2]];
// // // console.log(name);
// // // // console.log(typeof name[0]);
// // // console.log(typeof name);
// // // console.log(name [7]);

// // // console.log(typeof name[7]);


// // // console.log(name [7][0]);
// // // console.log(name [7] [1]);*/
// // // // let address = new Array('Kathmandu', 'Pokhara', 'Biratnagar');
// // // // console.log(address);

// // // // let newArr = [['hello', 2, true], ['iims', 'bscit'],['kathmandu']]

// // // // let newArr = [['hello',2, true], ['iims','bscit'],['kathmandu','pokhara','dharan']];
// // // // console.log(newArr[2][2]);
// // // // console.log(fruit.length);
// // // // console.log(fruit.indexOf('pears'));
// // // // console.log(fruit.indexOf('apple'));
// // // // // console.log(fruit[2]);
// // // // fruit[2] = 'avacado';
// // // // // console.log(fruit[2]);
// // // // console.log(fruit);

// // // fruit.push(['avacado', 'banana']);
// // // // fruit[1] = 'guava';
// // // // console.log(fruit);
// // // fruit.pop();
// // // console.log(fruit);

// // // let fruits = ['apple', 'mango','pears', 'kiwi'];
// // // console.log(fruits.pop());
// // // console.log(fruits);
// // // console.log(fruits.push('avacado'));
// // // console.log(fruits);

// // // pop removes last item
// // // push adds new item at last position of an array
// // // shift removes first element/item from an array
// // // unshift adds new element at 0 index or first position of an array


// // //splice
// // // fruits.splice(1, 2, 'berry', 'banana');
// // // console.log(fruits);


// // // add joker at index 2 without removing any items
// // // let dc = ['superman', 'batman', ['flash', 'wonderwoman'], 'aquaman'];
// // // // dc.splice(2, 0 , 'joker');
// // // // console.log(dc);

// // // // add joker at 0 index of 2 index value of dc
// // // dc[2].splice(0, 0, 'joker' );
// // // console.log(dc);

// // // let dc = ['superman', 'batman', 'aquaman'];
// // // // dc.splice(3,0,'joker');
// // // // console.log(dc);
// // // // delete dc[1];
// // // // console.log(dc);

// // // dc.splice(2, 1);
// // // // console.log(dc);
// // // let villian = ['joker'];
// // // let dcHero = ['flash'];
// // // console.log(villian.concat(dc, dcHero));

// // //slice of array

// // // first argument passed on slice will include that element but will remove all elements before it
// // // second argument passed on slice method will not include element of that index and removes every elements after that elements including itself


// // // let fruits = ['banana', 'apple', 'orange', 'mango', 'lemon'];
// // // let citrus = fruits.slice(2, 4);
// // // console.log(fruits);
// // // console.log(citrus);


// // // 

// // // let iimsStudent = {
// // // 	name : 'Anup',
// // // 	id : 181105,
// // // 	faculty : 'BIT',
// // // 	email : 'anup@gmail.com'
// // // };
// // // console.log(iimsStudent.name);
// // // 

// // let iimsStudent = {
// // 	firstName : 'Anup',
// // 	lastName : 'panta',
// // 	faculty : 'BIT',
// // 	address : 'Gongabu',
// // 	email : 'anup@gmail.com',

// // };

// // console.log(iimsStudent);
// // console.log('hello everyone my name is ' + iimsStudent.firstName + ' ' + iimsStudent.lastName + 
// // 	' . I am from ' + iimsStudent.address + ' . I am studying ' + iimsStudent.faculty + '. My email is ' + iimsStudent.email);


// // Array iteration
// // let country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
// // country_list.forEach(function(country, index)  {
// // 	console.log(index + ') ' + country);
// // })

// /*
// function add(a,b){
// 	return a+b;

// }
// function callbackMultiply(addFunc, multiplicationNum ){
// 	return addFunc + multiplicationNum;
// }
// */
// console.log(callbackMultiply(add(2,3),2));
// // dc.forEach

// //function
// // function addNumber(a,b){
// // 	return a+b;

// // }
// // let result = addNumber(1,2);
// // console.log(result);

// // function fullName(firstName, lastName){
// // 	return `first name is  ${firstName } last name is  ${lastName}`;
	
// // }
// // let result = fullName('Anup', 'Panta');
// // console.log(result);


// //array

// let fruit1 = 'apple', fruit2 = 'mango', fruit3 = 'pears';
// console.log(fruit1, fruit2, fruit3);

// const varName = [1,2];
// varName[0] ='love';

let fruit = ['apple', 'mango', 'pears', 'kiwi', 1];
// fruit.push(['orange', 'pineapple']);
// fruit[2] = 'avacado';

console.log(fruit);
fruit.pop();
fruit.pop();

// fruit[7][1] = 'Hello'; 
// console.log(fruit.length);
// console.log(fruit.indexOf(varName));

// fruit[7][1] = 'kathmandu';
console.log(fruit);
// console.log(fruit);
// fruit[3] = 'orange';
// console.log(fruit);
// console.log(fruit[7]);
// console.log(fruit[7][1]);
// console.log(typeof fruit[0]);
// let newArr = [['hello', 2, true], ['iims', 'bscit'], ['dharan', 'kathmandu', 'pokhara']];
// console.log(newArr[2][0]);