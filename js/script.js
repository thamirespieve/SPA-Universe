import { Router } from './router.js'

const router = new Router()

// const routes = {
//   '/': '/pages/home.html',
//   '/universo': '/pages/universo.html',
//   '/exploracao': '/pages/exploracao.html'
// }

router.add('/', '/pages/home.html')
router.add('/universo', '/pages/universo.html')
router.add('/exploracao', '/pages/exploracao.html')
// function route(event) {
//   event = event || window.event

//   event.preventDefault()

//   console.log(event.target.href)
//   window.history.pushState({}, '', event.target.href)

//   handle()
// }

// function handle() {
//   const { pathname } = window.location

//   const route = routes[pathname]

//   fetch(`http://127.0.0.1:5500${route}`)
//     .then(response => response.text())
//     .then(html => {
//       const page = document.querySelector('#app')
//       const container = document.querySelector('.container')
//       const homePage = document.querySelector('#home')
//       const universoPage = document.querySelector('#universo')
//       const exploracaoPage = document.querySelector('#exploracao')
//       switch (pathname) {
//         case '/':
//           homePage.classList.add('active')
//           universoPage.classList.remove('active')
//           exploracaoPage.classList.remove('active')

//           page.classList.add('home')
//           container.classList.remove('select-universe')
//           container.classList.remove('select-exploration')
//           break
//         case '/universo':
//           universoPage.classList.add('active')
//           exploracaoPage.classList.remove('active')
//           homePage.classList.remove('active')

//           container.classList.add('select-universe')
//           container.classList.remove('select-exploration')
//           page.classList.remove('home')
//           break
//         case '/exploracao':
//           exploracaoPage.classList.add('active')
//           universoPage.classList.remove('active')
//           homePage.classList.remove('active')

//           container.classList.add('select-exploration')
//           container.classList.remove('select-universe')
//           page.classList.remove('home')
//           break

//         default:
//           page.classList.add('home')

//           break
//       }

//       page.innerHTML = html
//     })
// }

router.handle()

// //Aciona um evento de click para os botões de voltar do navegador
window.onpopstate = () => router.handle()
//Executando e eportando a função route para o html
window.route = () => router.route()
