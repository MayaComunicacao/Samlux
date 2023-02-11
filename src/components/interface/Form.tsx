import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { RiWhatsappFill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

export const FormsContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormDataContactForm>({
    resolver: yupResolver(schemaOfCustomForm)
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormDataContactForm) => {
    if (loading) return;

    setSuccess(false);
    reset();
    setLoading(true);

    const result = await axios.post('/api/send_mail', {
      name: data.name,
      email: data.email,
      fone: data.fone,
      city: data.city,
      subject: 'Novo lead: Contato',
      type: 'contato'
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
          type="email"
          {...register('email')}
          name="email"
          placeholder="E-mail"
          style={errors.email?.message ? { marginBottom: '0' } : undefined}
        />
        <CompError msg={errors.email?.message} />

        <input
          type="tel"
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

export const FormsWork = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormDataWorkForm>({
    resolver: yupResolver(schemaOfCustomForm)
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitWork = async (data: FormDataWorkForm) => {
    if (loading) return;

    setSuccess(false);
    reset();
    setLoading(true);

    const result = await axios.post('/api/send_mail', {
      name: data.name,
      email: data.email,
      fone: data.fone,
      city: data.city,
      subject: 'Novo lead: Trabalhe Conosco',
      type: 'trabalhe_conosco'
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
      <form onSubmit={handleSubmit(onSubmitWork)} className="pt-8">
        <input
          type="text"
          {...register('name')}
          name="name"
          placeholder="Nome"
          style={errors.name?.message ? { marginBottom: '0' } : undefined}
        />
        <CompError msg={errors.name?.message} />

        <input
          type="email"
          {...register('email')}
          name="email"
          placeholder="E-mail"
          style={errors.email?.message ? { marginBottom: '0' } : undefined}
        />
        <CompError msg={errors.email?.message} />

        <input
          type="tel"
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

        <div className="flex">
          <label
            htmlFor="teste"
            className="bg-transparent border border-gray color-gray w-1/2 text-center h-[47px] py-[10px] px-4 cursor-pointer"
          >
            <input id="teste" {...register} type="file" className="hidden" />
            Anexo
          </label>

          <input
            type="submit"
            className={`w-full bg-green text-white px-4 ml-3 ${
              loading && 'pointer-events-none cursor-default'
            }`}
            value={`${loading ? 'Enviando...' : 'Quero fazer parte do time'}`}
          />
        </div>
      </form>

      {success && <CompSuccess />}
    </>
  );
};

export const FormsCustom = () => {
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

const CompSuccess = () => {
  return (
    <span className="flex items-center justify-center text-white text-sm py-2 w-full bg-green rounded-sm">
      Dados enviados com sucesso.
    </span>
  );
};

const CompError = ({ msg }: { msg: string | undefined }) => {
  if (!msg) return null;

  return <span className="block text-xs pt-1 text-red-500 mb-4">{msg}</span>;
};

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

/** Trabalhe Conosco */
const schemaOfWorkForm = yup
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

type FormDataWorkForm = yup.InferType<typeof schemaOfWorkForm>;
