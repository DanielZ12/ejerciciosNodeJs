function range_vision(e) {
    let num = e.toString().split("").map((num) => parseInt(num))

    // ¿Hay un dígito 1 en el número entero para el cual el valor de visión es mínimo?
    // verifico si exite un digito 1 en el numero, y sino devuelvo directamente false
    let condition = num.filter(n => n == 1)
    if ( !condition.length ){
        console.log(false)
        return false
    }

    let vision = [];
    for (let i = 0; i < num.length; i++) {
        let sum = i + 1
        let r = num.slice(sum, (num[i] + sum))
        let sign = Math.sign(i - num[i]) != -1 ? i - num[i] : 0
        let l = num.slice(sign, i)
        let total = 0
        if ( l.length > 0) {
            total += l.reduce((n1, n2) => n1 + n2)
        }

        if ( r.length > 0) {
            total += r.reduce((n1, n2) => n1 + n2)
        }
        vision.push(total)
    }
    min = vision.reduce((a, b, idx) => Math.min(a, b))
    const idx =vision
        .map((e, index) => (e === min ? index : -1))
        .filter(e => e !== -1);

    let result_de_verda = idx.map( n => {
        if (num[n] == 1) return true
        else return false
    })
    console.log(result_de_verda.includes(true) ? true : false)
    return result_de_verda.includes(true) ? true : false
}

range_vision(34315)