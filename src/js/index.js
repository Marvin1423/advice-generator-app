const adviceGeneratorButton = document.getElementById('advice-update-button')
const adviceId = document.getElementById('advice-id')
const advice = document.getElementById('advice-description')

async function generateRandomAdvice (){
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    const json = await response.json()
    adviceId.innerHTML = `#${json.slip.id}`
    advice.innerHTML = `"${json.slip.advice}"`
}

adviceGeneratorButton.addEventListener('click', generateRandomAdvice)

