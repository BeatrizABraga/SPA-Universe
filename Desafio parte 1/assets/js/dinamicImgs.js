export function changeBcgPages(){
 const linksNavegation = document.querySelector(".navegation")
linksNavegation.addEventListener("click", change())

 linksNavegation.addEventListener("click", function change(event) {
  const action = event.target.dataset.action
  console.log('entrou')
 })
}