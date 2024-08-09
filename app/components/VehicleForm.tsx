'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/navigation';

interface FormData {
  nombre: string;
  apellido: string;
  dni: string;
  telefono: string;
  email: string;
  vehiculo: string;
}

const VehicleForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    dni: '',
    telefono: '',
    email: '',
    vehiculo: '',
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const message = `¡Hola! Quiero un Plan de Ahorro. \nNombre: ${formData.nombre}\nApellido: ${formData.apellido}\nDNI: ${formData.dni}\nTeléfono: ${formData.telefono}\nVehículo: ${formData.vehiculo}`;
    const phoneNumber = '5491122502345'; // Reemplaza con tu número de WhatsApp en formato internacional, sin el '+'.
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Abre la ventana de WhatsApp inmediatamente
    window.open(whatsappUrl, '_blank');

    // Enviar email en segundo plano
    const emailParams: Record<string, string> = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      dni: formData.dni,
      telefono: formData.telefono,
      email: formData.email,
      vehiculo: formData.vehiculo,
    };

    try {
      await emailjs.send('service_653h3e1', 'template_0aoa3g9', emailParams, 'fQf_Pyn1kiMZsgd14');
      alert('Formulario enviado con éxito por correo.');

      // Redirigir a la página de confirmación
      router.push('/vehicleformconfirmation');

    } catch (error: unknown) {
      if (error instanceof Error) {
        alert('Error al enviar el formulario por correo: ' + error.message);
      } else {
        alert('Error desconocido al enviar el formulario por correo.');
      }
    }
  };

  return (
    <div className='bg-slate-50 mt-16 pt-32 md:pt-20 mb-2' id='planesdeahorroform'>
      <h2 className='m-2 text-center text-yellow-500 font-bold text-[25px] lg:text-[40px]'>SUSCRIBITE A TU PLAN DE AHORRO</h2>
      <h3 className='text-center font-semibold m-2'>
        Envianos un Whatsapp completando el formulario con tus datos y el vehículo que estás buscando.<br/>
        Se te asignará un vendedor para que te contacte.
      </h3>
      <form className="max-w-[900px] mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className="mb-4 w-full mx-2">
          <label className="block text-gray-700">Nombre*:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 max-w-[300px]"
            required
          />
        </div>
        <div className="mb-4 w-full mx-2">
          <label className="block text-gray-700">Apellido*:</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 max-w-[300px]"
            required
          />
        </div>
        <div className="mb-4 w-full mx-2">
          <label className="block text-gray-700">DNI*:</label>
          <input
            type="text"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 max-w-[300px]"
            required
          />
        </div>
        <div className="mb-4 w-full mx-2">
          <label className="block text-gray-700">Teléfono*:</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 max-w-[300px]"
            required
          />
        </div>
        <div className="mb-4 w-full mx-2">
          <label className="block text-gray-700">Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 max-w-[300px]"
          />
        </div>
        <div className="mb-4 w-full mx-2">
          <label className="block text-gray-700">Modelo de Vehículo*:</label>
          <select
            name="vehiculo"
            value={formData.vehiculo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 max-w-[300px]"
            required
          >
            <option value="">Seleccionar...</option>
            <option value="TrackerLTAT">Tracker LTAT</option>
            <option value="TrackerMTAT">Tracker MTAT</option>
            <option value="S10">S10</option>
            <option value="Onix">Onix</option>
          </select>
        </div>
        <div className="mb-4 w-full mx-2 md:col-span-2 text-center self-baseline">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="autorizacion"
              onChange={handleChange}
              className="form-checkbox"
              required
            />
            <span className="ml-2 text-gray-700 max-w-[450px] self-baseline">Autorizo a ORGANIZACION SACH a almacenar mis datos y enviarme información sobre los Planes de Ahorro.*</span>
          </label>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-yellow-500 text-white p-2 rounded mt-4 w-96"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>


  );
};

export default VehicleForm;
