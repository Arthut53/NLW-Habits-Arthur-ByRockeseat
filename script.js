const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector(' header button')

button.addEventListener('click',add)
form.addEventListener('change',save)




function add (){
const today = new Date().toLocaleString('pt-br').slice(0,-5)
const dayExists = nlwSetup.dayExists(today)

if(dayExists){
alert('dia já incluso')
return

}


alert('adicionado com sucesso')
nlwSetup.addDay(today)

}


function save(){
localStorage.setItem('meu@NLW', JSON.stringify(nlwSetup.data))


}

const data = JSON.parse(localStorage.getItem('meu@NLW')) || {}


nlwSetup.setData(data)
nlwSetup.load()

