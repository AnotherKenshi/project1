import { getRandomColor } from "./utils"

export default function initApp() {
    const newButton = document.createElement('button')
    newButton.className = 'button'
    newButton.textContent = 'Изменить цвет страницы'
    document.body.append(newButton)

    newButton.addEventListener('click', (event) => {
        document.body.style.backgroundColor = getRandomColor()
    })
}