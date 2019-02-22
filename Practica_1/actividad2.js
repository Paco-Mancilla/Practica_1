$('#body').show("slow")

$("#formSueldo").submit(function (e) {
    e.preventDefault()
    let sueldo = $("#sueldo")[0].valueAsNumber

    if(sueldo < 1001)
        sueldo *= 1.15
    else if(sueldo < 1201)
        sueldo *= 1.12
    else if(sueldo < 1401)
        sueldo *= 1.1
    else if(sueldo < 1501)
        sueldo *= 1.08
    else
        sueldo *= 1.05
    
    $("#resultadoSueldo").show("slow")
    $("#resultadoSueldo")[0].innerHTML = `<span>Tu sueldo es: $${sueldo}</span>`
})

$("#formArray").submit(function (e){
    e.preventDefault()
    let numero = $("#numero")[0].valueAsNumber
    
    let array = new Array()

    for(let i = 0; i <= numero; i++)
    {
        if((i * 2) % 2 == 0  &&  i != 0)
        {
            array.push(i * 2)
        }
    }
    console.log(array);
    
    $("#resultadoArray")[0].innerHTML = `<span>El array es: <br>${array.join('  -  ')}</span><br>`
    let resultado = $("#resultadoArray")[0].innerHTML
    let contador = 0;
    let timer = setInterval(function (){
        $("#resultadoArray")[0].innerHTML = resultado + `<span>Recorrido del array: <br>${array.join('  -  ')}</span>`
        console.log(array)
        array.unshift(array.pop())
        contador++
        $("#resultadoArray").show('slow')
        if(contador == array.length)
            clearInterval(timer)
    }, 1500)
    
})


