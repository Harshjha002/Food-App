import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#F6E9B2] text-[#0A6847]">
      <h1 className="text-6xl font-bold text-red-600">Oops!!</h1>
      <h2 className="text-2xl mt-4">Something went wrong</h2>
      <h3 className="text-xl mt-2">{err.status}: {err.statusText}</h3>
    </div>
  );
};

export default Error;
