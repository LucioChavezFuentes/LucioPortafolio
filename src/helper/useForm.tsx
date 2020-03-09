import {useState} from 'react';

function useForm<T>(callback) {
 
    const [inputs, setInputs] = useState<T>({} as T);
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
      }
      callback(inputs)
    }

    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs
    };
  }

export default useForm;
