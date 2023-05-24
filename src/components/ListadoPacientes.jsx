import Paciente from "./Paciente"
import { useEffect } from "react";

function ListadoPacientes({ pacientes, setPaciente }) {

  return (

    <div className="md:w-1/2 lg:w3/5 md:hk-screen overflow-y-scroll">
      {pacientes.length > 0 ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
          </p>
          {pacientes.map(paciente =>
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
            />
          )}
        </>

      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Comienza agregando pacientes {''}
            <span className='text-indigo-600 font-bold'>y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </div>


  )
}

export default ListadoPacientes