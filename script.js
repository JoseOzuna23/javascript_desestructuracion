
//Ejecicio I
// No encuentra error  la salida la dos variables imprime los valores
const cars = ['Tesla', 'Mercedes', 'Honda']
const[randomCar] = cars;
const [,otherRandomCar] = cars;
console.log(randomCar);
console.log(otherRandomCar);

//Ejecicio II
const employee= {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const {name:otherName} = employee;
console.log(name); // en esta linea sale undefined ya que no es la memoria por la cual esta la informacion del objeto
console.log(otherName);

//Ejecicio III
const person = {
    name:'Phil Smith',
    age: 47,
    heigth: '6 feet',   
}
const password = '12345';
const { password: hashedPasword } = person;
console.log(password); // En la salida saldra undefined ya que la variable que tratamos de imprimir no se encuentra dentro del objeto
console.log(hashedPasword);// En la salida saldra undefined ya que la variable que tratamos de imprimir no se encuentra dentro del objeto

//Ejecicio IV
const numbers = [8,2,3,5,6,1,67,12,2];
const[first] = numbers;
const [,,,second] = numbers;
const[,,,,,,,,third] = numbers;
console.log(first == second); // No encuentra error  la salida la dos variables imprime los valores
console.log(first == third);// No encuentra error  la salida la dos variables imprime los valores

//Ejecicio V
const lastTest = {
    key:'value',
    secondKey:[1,5,1,8,3,3]
}
const{key} = lastTest;
const {secondKey}= lastTest;
const [,willThiswork] = secondKey;

console.log(key); // No encuentra error  la salida la dos variables imprime los valores
console.log(secondKey); // No encuentra error  la salida la dos variables imprime los valores
console.log(secondKey[0]); // No encuentra error  la salida la dos variables imprime los valores
console.log(willThiswork); // La variable willThiswork no es un objeto por la cual no encuentra el valor y sale undefined
