
// ------------------/function expression ou function anonymous  -----------------------------



// parametros de função
// o number1 e number2 são parametros da  função
// const sum = function(number1, number2){
//     console.log(number1+number2)

// }

// sum(2,3) // 2 e 3 são argumentos de uma função 


// ---------------------------------------------------------

// const soma = function (){
//     console.log(number1+number2)
// }
// let number1 = 40
// let number2 = 20
// console.log(`o numero 1 é ${number1}`)
// console.log(`o numero 2 é ${number2}`)
// console.log(`a soma é ${soma(number1, number2)}`)

// no primeiro console.log o valor é 40
// no segundo console.log o valor é 20
// no terceiro ele executa a função e nela tem um console
// e quando ele faz a soma ele retorna a função
// so que ela nao tem a palavra return e, portanto,
// ela retorna undefined
// uma função sempre retornara algo


// -------------------MANEIRA CORRETA -----------------------------

// const soma = function (){
//     const total = number1 + number2
//     return total
// }
// let number1 = 40
// let number2 = 20
// console.log(`o numero 1 é ${number1}`)
// console.log(`o numero 2 é ${number2}`)
// console.log(`a soma é ${soma(number1, number2)}`)


// -----------------------OUTRA COISA---------------------------


// const soma = function (number1, number2){
//     const total = number1 + number2
//     return total
// }
// let number1 = 40
// let number2 = 20
// console.log(`o numero 1 é ${number1}`)
// console.log(`o numero 2 é ${number2}`)
// console.log(`a soma é ${soma(number1, number2)}`)

// o number 1 que é parametro da função não é o mesmo
// que : let number1 = 40 (estão em escopos diferentes)



// -----------------------FUNCTION SCOPE---------------------------

// let subject = 'create video'
// function createThink(subject){
//     return subject
// }
// console.log(subject)
// console.log(createThink(subject))

// nesse caso as duas retornam create video (ok tudo certo)

// --------------FUNCTION SCOPE (PASSANDO ARGUMENTOS)---------------------------


// let subject = 'create video'
// function createThink(subject){
//     subject = 'study'
//     return subject
// }
// console.log(subject) // vai imprimir create video
// console.log(createThink(subject)) // imprime study

// --------------FUNCTION SCOPE (SEM ARGUMENTOS)---------------------------


// let subject = 'create video'

// function createThink(){
//     subject = 'study'
//     return subject
// }

// console.log(subject) // vai imprimir study
// console.log(createThink(subject)) // imprime study
// //imprime study porque nao tem parametro
// isso ocorre porque o subjct da função esta 
// em um escopo e o let subject é outra coisa de outro escopo 


// --------------FUNCTION SCOPE ---------------------------

// let subject
// function createThink(){
//     subject = 'study'
//     return subject
// }

// console.log(subject) //undefined pois let subject nao tem valor
// console.log(createThink(subject)) // vai ser study pois subject recebeu o valor study
// console.log(subject) // vai ser study pois a variavel agora recebeu o novo valor atualizado


// --------------FUNCTION HOISTING ---------------------------

// sayMyName()

// function sayMyName(){
//     console.log("matheus")
// }

// desse jeito a função sofre o hoisting 


// --------------FUNCTION HOISTING ---------------------------

// sayMyName()

// const sayMyName = function(){
//     console.log("matheus")
// }

// usando const, var ou let em função nao sofre hoisting
// que é elevaçãob   


// --------------ARROW FUNCTION ---------------------------

// const sayMyAge = (age)=>{
//     console.log(age)

// }
// sayMyAge(24)


// --------------CALLBACK FUNCTION ---------------------------

// callback significa que eu vou chamar uma função
// e chamo outra função de volta
// function sayMyName(name){
//     console.log("antes de executar a callback")
//     name()
//     console.log("depois de executar a callback")
// }


// sayMyName(
//     ()=>{
//         console.log("estou aprendendo callback")

//     }
// )
// eu passei para o parametro name uma função


// --------------FUNÇÃO CONSTRUTORA ---------------------------

// expressao new
// criar um novo objeto


function Person(name){
    this.name = name
    this.walk = function(){
        return this.name +  " esta andando"
    }
}
const matheus = new Person("Matheus")
const joao = new Person("João")


console.log(matheus)
console.log(joao)
console.log(matheus.walk())
console.log(joao.walk())