const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente 

  const handleEliminar = () => {
   const respuesta = confirm('Deseas eliminar este paciente?')
    if (respuesta){
      eliminarPaciente(id)
    }
  }

    return (
      
      <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl mb-5 opacity-90">
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case ">{paciente.nombre}</span>
      </p>
  
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}
        <span className="font-normal normal-case ">{paciente.propietario}</span>
      </p>
  
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case ">{paciente.email}</span>
      </p>
  
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {''}
        <span className="font-normal normal-case ">{paciente.fecha}</span>
      </p>
  
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {''}
        <span className="font-normal normal-case ">{paciente.sintomas}</span>
      </p>
  
      <div className=" flex justify-center mt-10">
        <button type="button" className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-800 hover:px-20 text-white rounded-lg font-bold uppercase" onClick={ () => setPaciente(paciente)} >Editar Paciente</button>
        <button type="button" className=" py-2 px-10 bg-red-600 hover:bg-red-800 hover:px-20 text-white rounded-lg font-bold uppercase ml-10 " onClick={ handleEliminar }>Eliminar</button>
      </div>
    </div>
    )
  }
  
  export default Pacientes
  