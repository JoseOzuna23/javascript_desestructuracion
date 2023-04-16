
//Ejecicio I
// No encuentra error  la salida la dos variables imprime los valores
const cars = ['Tesla', 'Mercedes', 'Honda']
const[randomCar] = cars;
const [,otherRandomCar] = cars;
console.log(randomCar);
console.log(otherRandomCar);

//Ejecicio II

// Codigo con error ya que name no esta definido y se intento usar para registrar el valor name
const employee= {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const {name:otherName} = employee;
console.log(name); 
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
console.log(first == second); // No encuentra error  la salida imprime un valor falso ya que firtst y second no son iguales
console.log(first == third);// No encuentra error  la salida imprime un valor falso ya que firtst y third no son iguales

//Ejecicio V

const lastTest = {
    key:'value',
    secondKey:[1,5,1,8,3,3]
}
const{key} = lastTest;
const {secondKey}= lastTest;
const [,willThiswork] = secondKey;

console.log(key); // No encuentra error  la salida la dos variables imprime el valor "value" del objeto 
console.log(secondKey); // No encuentra error  la salida la dos variables imprime los valores [1-5-1-8-3-3] del array
console.log(secondKey[0]); // No encuentra error  la salida la dos variables imprime priemer valor del array 1
console.log(willThiswork); // No encuentra errror la salida 5 ya que e el segundo valor del array
