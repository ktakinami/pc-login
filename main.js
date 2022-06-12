
function currentDate() {
    let today = new Date()
    const dd = String(today.getDate()).padStart(2,'0')
    const mm = String(today.getMonth() + 1).padStart(2,'0') //January is 0
    const yyyy = today.getFullYear()

    const hour = String(today.getHours()).padStart(2,'0')
    const min = String(today.getMinutes()).padStart(2,'0')
    const sec = String(today.getSeconds()).padStart(2,'0')

    const date = `${dd}/${mm}/${yyyy}`
    const time = `${hour}:${min}:${sec}`

    setTimeout(currentDate, 1000)

    document.getElementById('time').innerHTML = time
    document.getElementById('date').innerHTML = date
}

currentDate()