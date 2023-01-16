/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const AddItemForm = ({ register, formState: { errors } }) => (
  <>
    <div className="mt-5">
      <label className="text-sm" htmlFor="name">Name</label>
      <br />
      <input
        type="text"
        name="name"
        className="border my-input w-full text-sm rounded-xl p-3"
        placeholder="Enter a name"
        {...register('name', { required: true })}
      />
      {errors.name && <span>This field is required</span>}
    </div>
    <div className="mt-[2.5vh]">
      <label className="text-sm" htmlFor="note">Note (optional)</label>
      <br />
      <textarea
        className="border my-input w-full text-sm rounded-xl p-3"
        // type="textarea"
        rows="4"
        name="note"
        placeholder="Enter a note"
        {...register('note')}
      />
    </div>
    <div className="mt-[2.5vh]">
      <label className="text-sm" htmlFor="imageUrl">Image (optional)</label>
      <br />
      <input
        className="border my-input w-full text-sm rounded-xl p-3"
        type="url"
        placeholder="Enter a url"
        {...register('image')}
      />
    </div>
  </>
);

AddItemForm.defaultProps = {
  formState: {
    errors: {
      name: '',
    },
  },
};

AddItemForm.propTypes = {
  register: PropTypes.func.isRequired,
  formState: PropTypes.shape({
    errors: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

export default AddItemForm;
