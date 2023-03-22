import Paciente from './Paciente';

const Pacientes = ({ pacientes, setPaciente, setPacientes }) => {

  return (  
    <div className='flex flex-col gap-3 my-6 md:overflow-y-scroll md:h-5/6'>
      { pacientes.map( paciente => {
        return <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} setPacientes={setPacientes} pacientes={pacientes} />
      })}
    </div>
  );
}
 
export default Pacientes;