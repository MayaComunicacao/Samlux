import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { CompError, CompSuccess } from './Form';

const FormWork = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const onSubmit = async (data: FormData) => {
    if (loading) return;

    if (!file) return;

    setSuccess(false);
    reset();
    setLoading(true);

    const blobToBase64 = (Blob: Blob) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(Blob);

        reader.onload = () => {
          const dataUrl = reader.result;
          const base64 = dataUrl?.toString().split(',')[1];
          resolve(base64);
        };

        reader.onerror = (error) => reject(error);
      });
    };

    const base64 = await blobToBase64(file as Blob);

    console.log(base64);

    const result = await axios.post('/api/send_mail', {
      name: data.name,
      email: data.email,
      fone: data.fone,
      city: data.city,
      fileType: file.name.split('.').pop(),
      anexo: base64,
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

        <div className="flex">
          <label
            htmlFor="teste"
            className="bg-transparent border border-gray color-gray w-1/2 text-center h-[47px] py-[10px] px-4 cursor-pointer text-ellipsis overflow-hidden"
          >
            <input
              id="teste"
              type="file"
              className="hidden"
              onChange={(e) => {
                if (!e.target.files) return;
                setFile(e?.target?.files[0]);
              }}
            />
            {file ? file.name : 'Anexo'}
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

export default FormWork;

/** Trabalhe Conosco */
const schema = yup
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

type FormData = yup.InferType<typeof schema>;
