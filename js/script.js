const countdown =document.getElementById('countdown')
let userInput =document.getElementById('userInput')
const restart =document.getElementById('restart')
let result=document.getElementById('result')


restart.addEventListener('click', ()=>{

    window.location.reload();
   



})

userInput.addEventListener('blur', ()=>{
    
    userInput=userInput.value
    let numeroEntero = parseInt(userInput);
    let numeroAleatorio=Math.floor(Math.random()*3)+1



    if(numeroEntero>0&&numeroEntero<4){

        cuentaAtras();

        console.log(numeroEntero)
        console.log(numeroAleatorio)

        if(numeroEntero===numeroAleatorio){

            const resultado =new Promise((resolve)=>{

                setTimeout(()=>{

                  const ganador =`<div id="ganar"><div><p>Enhorabuena has ganado</div></p>
                  <div><p>Tu número es el ${numeroEntero} que es el mismo que ${numeroAleatorio}<p></div>
                  
                  </div>`

                    resolve(ganador)

                },5000)


            })

            resultado.then((texto)=>{

                result.innerHTML=texto;

            })

        


        }

        else{

            const perdedor =new Promise((resolve)=>{

                setTimeout(()=>{

                 const Noganar =`<div id="perdido"><div><p>Has perdido</div></p>
                 <div><p>Tu número es el ${numeroEntero} que es distinto de  ${numeroAleatorio}<p></div>
                 </div>`

                    resolve(Noganar)

                },5000)


            })

            perdedor.then((texto)=>{

                result.innerHTML=texto;

            })





        }
    
    
    }

    else{


        alert("Tiene que introducir un número entre el 1 y 3")
        window.location.reload();
    }


})

/////////////////////////////////////////


userInput.addEventListener('keydown', (event)=>{

    if(event.keyCode===13){
    
    userInput=userInput.value
    let numeroEntero = parseInt(userInput);
    let numeroAleatorio=Math.floor(Math.random()*3)+1



    if(numeroEntero>0&&numeroEntero<4){

        cuentaAtras();

        console.log(numeroEntero)
        console.log(numeroAleatorio)

        if(numeroEntero===numeroAleatorio){

            const resultado =new Promise((resolve)=>{

                setTimeout(()=>{

                  const ganador =`<div id="ganar"><div><p>Enhorabuena has ganado</div></p>
                  <div><p>Tu número es el ${numeroEntero} que es el mismo que ${numeroAleatorio}<p></div>
                  
                  </div>`

                    resolve(ganador)

                },5000)


            })

            resultado.then((texto)=>{

                result.innerHTML=texto;

            })

        


        }

        else{

            const perdedor =new Promise((resolve)=>{

                setTimeout(()=>{

                 const Noganar =`<div id="perdido"><div><p>Has perdido</div></p>
                 <div><p>Tu número es el ${numeroEntero} que es distinto de  ${numeroAleatorio}<p></div>
                 </div>`

                    resolve(Noganar)

                },5000)


            })

            perdedor.then((texto)=>{

                result.innerHTML=texto;

            })





        }
    
    
    }

    else{


        alert("Tiene que introducir un número entre el 1 y 3")
        window.location.reload();
    }

}


})

    /////////////////////////FUNCION CUENTA ATRAS

const cuentaAtras =()=>{

    const segundo5=new Promise((resolve)=>{

        setTimeout(()=>{

            const numero5=5
            resolve(numero5)


        },0)



    })
    const segundo4=new Promise((resolve)=>{

        setTimeout(()=>{

            const numero4=4
            resolve(numero4)


        },1000)



    })

    const segundo3=new Promise((resolve)=>{

        setTimeout(()=>{

            const numero3=3
            resolve(numero3)


        },2000)



    })

    const segundo2=new Promise((resolve)=>{

        setTimeout(()=>{

            const numero2=2
            resolve(numero2)


        },3000)



    })

    const segundo1=new Promise((resolve)=>{

        setTimeout(()=>{

            const numero1=1
            resolve(numero1)


        },4000)



    })
    const segundo0=new Promise((resolve)=>{

        setTimeout(()=>{

            const numero0=0
            resolve(numero0)


        },5000)



    })

    segundo5.then((segundo)=>{

        countdown.innerHTML=`Cuenta Atras: ${segundo} segundos`
        return segundo4

    })
    .then((segundo)=>{

        countdown.innerHTML=`Cuenta Atras: ${segundo} segundos`
        return segundo4


    })
    .then((segundo)=>{

        countdown.innerHTML=`Cuenta Atras: ${segundo} segundos`
        return segundo3


    })
    .then((segundo)=>{

        countdown.innerHTML=`Cuenta Atras: ${segundo} segundos`
        return segundo2


    })
    .then((segundo)=>{

        countdown.innerHTML=`Cuenta Atras: ${segundo} segundos`
        return segundo1


    })

    .then((segundo)=>{

        countdown.innerHTML=`Cuenta Atras: ${segundo} segundos`
        return segundo0

    })
    .then((segundo)=>{

        countdown.innerHTML=`Cuenta Atras: ${segundo} segundos`
        

    })


}







