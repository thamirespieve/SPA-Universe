export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }
  route(event) {
    event = event || window.event

    event.preventDefault()

    window.history.pushState({}, '', event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location

    const route = this.routes[pathname]

    fetch(`${route}`)
      .then(response => response.text())
      .then(html => {
        const page = document.querySelector('#app')
        const container = document.querySelector('.container')
        const homePage = document.querySelector('#home')
        const universoPage = document.querySelector('#universo')
        const exploracaoPage = document.querySelector('#exploracao')
        switch (pathname) {
          case '/':
            homePage.classList.add('active')
            universoPage.classList.remove('active')
            exploracaoPage.classList.remove('active')

            page.classList.add('home')
            container.classList.remove('select-universe')
            container.classList.remove('select-exploration')
            break
          case '/universo':
            universoPage.classList.add('active')
            exploracaoPage.classList.remove('active')
            homePage.classList.remove('active')

            container.classList.add('select-universe')
            container.classList.remove('select-exploration')
            page.classList.remove('home')
            break
          case '/exploracao':
            exploracaoPage.classList.add('active')
            universoPage.classList.remove('active')
            homePage.classList.remove('active')

            container.classList.add('select-exploration')
            container.classList.remove('select-universe')
            page.classList.remove('home')
            break

          default:
            page.classList.add('home')

            break
        }

        page.innerHTML = html
      })
  }
}
