import React from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export const CompSuccess = () => {
  return (
    <span className="flex items-center justify-center text-white text-sm py-2 w-full bg-green rounded-sm">
      Dados enviados com sucesso.
    </span>
  );
};

export const CompError = ({
  msg
}: {
  msg:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}) => {
  if (!msg) return null;
  if (typeof msg !== 'string') return null;

  return <span className="block text-xs pt-1 text-red-500 mb-4">{msg}</span>;
};
