import React, { useState } from 'react';
import PropType from 'prop-types';
import { useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';

export default function Select({ defaultOptions, onChange, value }) {
  const currentUser = useSelector((state) => state.session.currentUser);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);

  const createOption = (data) => ({
    label: data.name,
    value: data.id,
    isNew: true,
  });

  const handleCreate = async (inputValue) => {
    const newCategory = {
      name: inputValue,
      user_id: currentUser.id,
    };
    setIsLoading(true);

    const newOption = createOption(newCategory);
    setIsLoading(false);
    setOptions((prev) => [...prev, newOption]);
  };

  return (
    <CreatableSelect
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={onChange}
      onCreateOption={handleCreate}
      createOptionPosition="first"
      options={options}
      value={value}
    />
  );
}

Select.defaultProps = {
  defaultOptions: [],
  value: {},
  onChange: () => {},
};

Select.propTypes = {
  defaultOptions: PropType.arrayOf(
    PropType.shape({
      label: PropType.string.isRequired,
      value: PropType.number.isRequired,
      isNew: PropType.bool.isRequired,
    }),
  ),
  onChange: PropType.func,
  value: PropType.shape({
    label: PropType.string,
    value: PropType.number,
    isNew: PropType.bool,
  }),
};
