import React from 'react';
import propTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import SignInForm from './SignInForm';

function SignIn({ onToggle }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="sign-in border border-gray px-4 py-2">
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>
      <SignInForm
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
      />
      <p className="text-center mt-6 mb-4 text-gray-600">
        Don&apos;t have an account?
        {' '}
        <button
          type="button"
          onClick={onToggle}
          className="text-orange hover:text-amber-400 focus:outline-none"
        >
          Sign Up Here
        </button>
      </p>
    </div>
  );
}

SignIn.propTypes = {
  onToggle: propTypes.func.isRequired,
};

export default SignIn;
