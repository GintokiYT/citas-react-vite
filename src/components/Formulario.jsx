import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuid } from 'uuid';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const inputMascota = useRef(null);

  const { register, handleSubmit, formState: { errors }, reset, setValue, clearErrors, } = useForm({ mode: 'onChange'});

  const petForm = { 
    mascota: register('mascota', {
      required: { value: true, message: 'El nombre de la mascota es obligatorio' },
      minLength: { value: 2, message: 'El nombre de la mascota debe tener un mínimo de 2 caracteres' }
    }), 
    propietario: register('propietario', {
      required: { value: true, message: 'El nombre del propietario es obligatorio' },
      minLength: { value: 2, message: 'El nombre del propietario debe tener un mínimo de 2 caracterees' }
    }), 
    email: register('email', {
      required: { value: true, message: 'El correo es obligatorio' },
      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Formato de correo invalido' }
    }), 
    alta: register('alta', {
      required: { value: true, message: 'La fecha de alta es obligatoria' }
    }), 
    sintomas: register('sintomas', {
      required: { value: true, message: 'El sintoma de la mascota es obligatorio' },
      minLength: { value: 10, message: 'Los sintomas deben ser detallados mínimo 10 caracteres' }
    })
  };

  const UpdatePacientes = (pacientes, data) => {
    const newPacientes = pacientes.map( paciente => {
      return paciente.id === data.id ? data : paciente
    })
    return newPacientes;
  }

  const onSubmit = (data) => {
    if(Object.keys(paciente).length > 0) {
      setPacientes(UpdatePacientes(pacientes, data));
      setPaciente({});
    } else {
      data.id = uuid();
      setPacientes([...pacientes, data]);
    }
    inputMascota.current.focus();
    reset();
  };

  const MessageError = ({ msg }) => {
    return (
      <span className='block text-red-600 font-semibold mt-1'>{ msg }</span>
    )
  }

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      Object.keys(paciente).forEach(key=> setValue(key, paciente[key]));
    }
  }, [paciente]);

  return (  
    <div className='flex-1'>
      <h2 className='font-black text-3xl text-center'>
        Seguimiento Pacientes
      </h2>
      <p className='mt-5 text-lg text-center'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form className='bg-white shadow-md rounded-lg py-10 px-5 my-6 flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)} >
        <div>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='mascota'>Nombre Mascota</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none' id='mascota' name='mascota' type='text' placeholder='Nombre de la mascota' autoFocus tabIndex='1' {...petForm.mascota} ref={ e => {
            petForm.mascota.ref(e);
            inputMascota.current = e;
          }}/>
          { errors?.mascota?.message && <MessageError msg={ errors.mascota.message } /> }
        </div>
        <div>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='propietario'>Nombre Propietario</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none' id='propietario' name='propietario' type='text' placeholder='Nombre del propietario' tabIndex='2' {...petForm.propietario} />
          { errors?.propietario?.message && <MessageError msg={ errors.propietario.message }/> }
        </div>
        <div>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='email'>Email</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none' id='email' name='email' type='email' placeholder='Email Contacto Propietario' tabIndex='3' {...petForm.email} />
          { errors?.email?.message && <MessageError msg={ errors.email.message }/> }
        </div>
        <div>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='alta'>Alta</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none' id='alta' name='alta' type='date' tabIndex='4' {...petForm.alta} />
          { errors?.alta?.message && <MessageError msg={ errors.alta.message } /> }
        </div>
        <div>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='sintomas'>Sintomas</label>
          <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none resize-none h-24 ' id='sintomas' name='sintomas' placeholder='Describe los sintomas' {...petForm.sintomas} />
          { errors?.sintomas?.message && <MessageError msg={ errors.sintomas.message } /> }
        </div>
        <button className='bg-indigo-600 text-white py-3 rounded-md uppercase font-bold hover:bg-indigo-700 transition-colors' type='submit'>{paciente.id ? 'Editar Paciente': 'Agregar paciente'}</button>
      </form>
    </div>
  );
}
 
export default Formulario;