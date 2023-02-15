import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdClose } from 'react-icons/md';
import * as yup from 'yup';
import { useBudget } from '../../context/context';
import { useModal } from '../../context/contextModal';
import { CompError, CompSuccess } from '../form/Form';

const FormFinalize = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormDataFinalizeForm>({
    resolver: yupResolver(schemaOfFinalizeForm)
  });

  const { budget, clear: clearBudget } = useBudget();
  const { state, setStatusModal } = useModal();

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormDataFinalizeForm) => {
    if (loading) return;
    if (budget.length === 0) return;

    setSuccess(false);
    reset();
    setLoading(true);

    const result = await axios
      .post('/api/send_mail', {
        name: data.name,
        email: data.email,
        fone: data.fone,
        products: budget,
        subject: 'Novo Orçamento',
        type: 'orcamento'
      })
      .catch(() => setLoading(false));

    if (result?.data === 'ok') {
      setSuccess(true);
      reset();
      clearBudget();
    }

    setLoading(false);
  };

  const onError = (data: any) => console.log(data);

  useEffect(() => {
    if (!state) setSuccess(false);
  }, [state]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) setSuccess(false);
  }, [errors]);

  if (!state || (budget.length === 0 && !success)) return null;

  return (
    <div className="flex items-center justify-center fixed w-full h-full z-50 bg-black/70 top-0 left-0 modalfinalize">
      <div className="block p-4 bg-white rounded-sm w-full max-w-[468px]">
        <div className="flex w-full items-center justify-end pb-4">
          <button onClick={() => setStatusModal(false)}>
            <MdClose size={24} className="text-gray" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="block h-full w-full"
        >
          <input
            type="text"
            {...register('name')}
            name="name"
            placeholder="Nome"
            style={errors.name?.message ? { marginBottom: '0' } : undefined}
          />
          <CompError msg={errors?.name?.message} />

          <input
            type="text"
            {...register('email')}
            name="email"
            placeholder="E-mail"
            style={errors.email?.message ? { marginBottom: '0' } : undefined}
          />
          <CompError msg={errors?.email?.message} />

          <input
            type="text"
            {...register('fone')}
            name="fone"
            placeholder="Telefone"
            style={errors.fone?.message ? { marginBottom: '0' } : undefined}
          />
          <CompError msg={errors?.fone?.message} />

          <input type="submit" value="Enviar" style={{ marginBottom: 0 }} />
        </form>

        <div className="pt-4">{success && <CompSuccess />}</div>
      </div>
    </div>
  );
};

export default FormFinalize;

const schemaOfFinalizeForm = yup
  .object({
    name: yup.string().required('Campo requerido.'),
    email: yup.string().email().required('Campo requerido.'),
    fone: yup
      .string()
      .min(3, 'Mínimo de 3 caracteres')
      .required('campo requerido.')
  })
  .required();

type FormDataFinalizeForm = yup.InferType<typeof schemaOfFinalizeForm>;
