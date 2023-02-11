import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { CompError, CompSuccess } from './Form';

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormDataContactForm>({
    resolver: yupResolver(schemaOfContactForm)
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormDataContactForm) => {
    if (loading) return;

    setSuccess(false);
    reset();
    setLoading(true);

    const result = await axios
      .post('/api/send_mail', {
        name: data.name,
        email: data.email,
        fone: data.fone,
        city: data.city,
        subject: 'Novo lead: Contato',
        type: 'contato'
      })
      .catch(() => setLoading(false));

    if (result?.data === 'ok') {
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
      <form onSubmit={handleSubmit(onSubmit)} className="pt-8">
        <input
          type="text"
          {...register('name')}
          name="name"
          placeholder="Nome"
          style={errors.name?.message ? { marginBottom: '0' } : undefined}
        />
        <CompError msg={errors.name?.message} />

        <input
          type="text"
          {...register('email')}
          name="email"
          placeholder="E-mail"
          style={errors.email?.message ? { marginBottom: '0' } : undefined}
        />
        <CompError msg={errors.email?.message} />

        <input
          type="text"
          {...register('fone')}
          name="fone"
          placeholder="Telefone"
          style={errors.fone?.message ? { marginBottom: '0' } : undefined}
        />
        <CompError msg={errors.fone?.message} />

        <input
          type="text"
          {...register('city')}
          name="city"
          placeholder="Cidade"
          style={errors.city?.message ? { marginBottom: '0' } : undefined}
        />
        <CompError msg={errors.city?.message} />

        <input
          type="submit"
          className={`w-full bg-green text-white px-4 ${
            loading && 'pointer-events-none cursor-default'
          }`}
          value={`${loading ? 'Enviando...' : 'Falar com o time'}`}
        />
      </form>

      {success && <CompSuccess />}
    </>
  );
};

export default FormContact;

/** Contato */
const schemaOfContactForm = yup
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
      .required('campo requerido.')
  })
  .required();

type FormDataContactForm = yup.InferType<typeof schemaOfContactForm>;
