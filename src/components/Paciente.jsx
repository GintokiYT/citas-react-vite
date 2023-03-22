const Paciente = ({ paciente, setPaciente, setPacientes, pacientes }) => {

  const updatePaciente = () => {
    setPaciente(paciente);
  }

  const deletePaciente = () => {
    const updatePacientes = pacientes.filter( ele => ele.id !== paciente.id )
    setPacientes(updatePacientes);
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }

  return (  
    <div className='flex flex-col gap-2 bg-white shadow-md rounded-lg py-8 px-5'>
      <p className='text-md font-bold text-gray-700 uppercase'>
        Nombre: {''}
        <span className='normal-case font-normal'>{paciente.mascota}</span>
      </p>
      <p className='text-md font-bold text-gray-700 uppercase'>
        Propietario: {''}
        <span className='normal-case font-normal'>{paciente.propietario}</span>
      </p>
      <p className='text-md font-bold text-gray-700 uppercase'>
        Email: {''}
        <span className='normal-case font-normal'>{paciente.email}</span>
      </p>
      <p className='text-md font-bold text-gray-700 uppercase'>
        Fecha Alta: {''}
        <span className='normal-case font-normal'>{paciente.alta}</span>
      </p>
      <p className='text-md font-bold text-gray-700 uppercase'>
        Síntomas: {''}
        <span className='normal-case font-normal'>{paciente.sintomas}</span>
      </p>
      <div className="flex justify-between mt-2">
        <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" type="button" onClick={updatePaciente}>Editar</button>
        <button className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" type="button" onClick={deletePaciente}>Eliminar</button>
      </div>
    </div>
  );
}
 
export default Paciente;