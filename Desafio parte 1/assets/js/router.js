export class Router {
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname]

    fetch(route)
    .then(data => data.text())  
    .then(html => {
      let app = document.querySelector('#app')
      
      app.innerHTML = html
    })
  }

}

