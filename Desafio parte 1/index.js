import { Router } from'./assets/js/router.js'
import * as dinamicImg from "./assets/js/dinamicImgs.js"

const router = new Router()
router.add('/', "./pages/home.html")
router.add('/universe', "./pages/universe.html")
router.add('/exploration', "./pages/exploration.html")

window.route = () => router.route()