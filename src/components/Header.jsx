function Header (){
//function Header ({numero,boolean,funcion}){ pasando props

    /*console.log('El numero es '+ numero)
    console.log('El boolean es '+ boolean) // MANEJO DE PROPS
    console.log(funcion(1,2,30))*/

    return(
        <>
            
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto ">
                Seguimiento Pacientes {''}
                <span className="text-indigo-600 ">Veterinaria</span>
            </h1>
            
            
            
        </>
    )
    
}

export default Header