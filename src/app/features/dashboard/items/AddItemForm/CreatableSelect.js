import React,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import { createCategory } from '../itemSlice';



export default (props) => {
 

const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.session.accessToken);
  const currentUser = useSelector((state) => state.session.currentUser);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(props.defaultOptions);
  const [value, setValue] = useState({
    label: '',
    value: 1,
  });

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
    // dispatch action to create new category
    // const newCategory = await dispatch(createCategory({category, accessToken}));
    console.log(newCategory);    
      const newOption = createOption(newCategory);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      // setValue(newOption);  
  };

  return (
    <CreatableSelect
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={props.onChange}
      onCreateOption={handleCreate}
      createOptionPosition="first"
      options={options}
      value={props.value}      
    />
  );
};