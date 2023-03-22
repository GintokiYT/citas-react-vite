import { Fragment } from 'react';
import Pacientes from './Pacientes';

const ListadoPacientes = ({ pacientes, setPaciente, setPacientes }) => {

  const EncabezadoPaciente = ({ titulo, subtitulo, subrayado }) => {
    return (
      <Fragment>
        <h2 className='font-black text-3xl text-center'>{ titulo }</h2>
        <p className='text-xl mt-5 text-center'>
          { subtitulo } {''}
          <span className='text-indigo-600 font-bold '>{ subrayado }</span>
        </p>
      </Fragment>
    )
  }

  return (  
    <div className='flex-1'>
      { pacientes.length > 0 
      ? ( <Fragment>
            <EncabezadoPaciente 
              titulo='Listado de pacientes' 
              subtitulo='Administra tus' 
              subrayado='Pacientes y Citas' 
            />
            <Pacientes 
              pacientes={pacientes}
              setPaciente={setPaciente}
              setPacientes={setPacientes}
            />
          </Fragment> ) 
      : <EncabezadoPaciente 
          titulo='No hay pacientes' 
          subtitulo='Comienza agregando pacientes' 
          subrayado='y aparecerán en este lugar' 
        />
      }
    </div>
  );
}
 
export default ListadoPacientes;