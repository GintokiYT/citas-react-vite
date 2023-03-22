import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';
import { useEffect, useState } from 'react';

const App = () => {

  const localStoragePacientes = JSON.parse(localStorage.getItem('pacientes')) ?? [];

  const [ pacientes, setPacientes ] = useState(localStoragePacientes);
  const [ paciente, setPaciente ] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  return (  
    <div className='container mx-auto'>
      <Header />
      <div className='mt-6 flex flex-col md:flex-row gap-7'>
        <Formulario  
          pacientes={pacientes} 
          setPacientes={setPacientes} 
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes} 
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  );
}
 
export default App;