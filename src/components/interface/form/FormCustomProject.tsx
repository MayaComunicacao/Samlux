import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { CompError, CompSuccess } from './Form';

const FormCustomProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormDataCustomForm>({
    resolver: yupResolver(schemaOfCustomForm)
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormDataCustomForm) => {
    if (loading) return;

    setSuccess(false);
    reset();
    setLoading(true);

    const result = await axios.post('/api/send_mail', {
      name: data.name,
      email: data.email,
      fone: data.fone,
      city: data.city,
      msg: data.msg,
      subject: 'Novo lead: Projeto Personalizado',
      type: 'projeto_personalizado'
    });

    if (result.data === 'ok') {
      setSuccess(true);
      reset();
    }

    setLoading(false);
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) setSuccess(false);
  }, [errors]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="pt-4">
        <input
          type="text"
          {...register('name')}
          style={errors.name?.message ? { marginBottom: '0' } : undefined}
          name="name"
          placeholder="Nome"
        />
        <CompError msg={errors.name?.message} />

        <input
          type="email"
          {...register('email')}
          name="email"
          style={errors.email?.message ? { marginBottom: '0' } : undefined}
          placeholder="E-mail"
        />
        <CompError msg={errors.email?.message} />

        <input
          type="tel"
          {...register('fone')}
          name="fone"
          style={errors.fone?.message ? { marginBottom: '0' } : undefined}
          placeholder="Telefone"
        />
        <CompError msg={errors.fone?.message} />

        <input
          type="text"
          {...register('city')}
          name="city"
          style={errors.city?.message ? { marginBottom: '0' } : undefined}
          placeholder="Cidade"
        />
        <CompError msg={errors.city?.message} />

        <textarea
          {...register('msg')}
          placeholder="Mensagem"
          name="msg"
          style={errors.msg?.message ? { marginBottom: '0' } : undefined}
        ></textarea>
        <CompError msg={errors.msg?.message} />

        {/* <div className="w-full bg-green text-white px-4">
        <RiWhatsappFill size={30} />
        <Link href="https://api.whatsapp.com/send?phone=5517900000000">
          <a className="ml-2 text-lg">Falar com um especialista</a>
        </Link>
      </div> */}

        <input
          type="submit"
          className={`w-full bg-green text-white px-4 ${
            loading && 'pointer-events-none cursor-default'
          }`}
          value={`${loading ? 'Enviando...' : 'Falar com um especialista'}`}
        />
      </form>

      {success && <CompSuccess />}
    </>
  );
};

export default FormCustomProject;

/** Projeto Personalizado */
const schemaOfCustomForm = yup
  .object({
    name: yup.string().required('Campo requerido.'),
    email: yup.string().email().required('Campo requerido.'),
    fone: yup
      .string()
      .min(3, 'Mínimo de 3 caracteres')
      .required('campo requerido.'),
    city: yup
      .string()
      .min(3, 'Mínimo de 3 caracteres')
      .required('campo requerido.'),
    msg: yup
      .string()
      .min(3, 'Mínimo de 3 caracteres')
      .max(380)
      .required('campo requerido.')
  })
  .required();

type FormDataCustomForm = yup.InferType<typeof schemaOfCustomForm>;
