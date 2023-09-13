import { useRef, useState, FocusEvent } from 'react';

const useHandleBlur = () => {
  const inputTextRef = useRef<HTMLInputElement>(null);
  const inputDateRef = useRef<HTMLInputElement>(null);
  const [validatedTextInput, setValidatedTextInput] = useState<boolean>(true);
  const [validatedDateInput, setValidatedDateInput] = useState<boolean>(true);

  const isEnglishOrNumber = (text: string) => /^[a-zA-Z0-9]*$/.test(text);

  const handleSearchTextBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (inputTextRef.current) {
      const inputTextValue = inputTextRef.current.value.trim();
      const isValid = inputTextValue === '' || !isEnglishOrNumber(inputTextValue);
      if (isValid) return setValidatedTextInput(false);
      else return setValidatedTextInput(true);
    }
  };
  const handleSearchDateBlur = (event: FocusEvent<HTMLInputElement>) => {
		if (inputDateRef.current) {
			const inputDateValue = inputDateRef.current.value.trim() === '';
      if (inputDateValue) return setValidatedDateInput(false);
      else return setValidatedDateInput(true);
    }
	};
	
	return {inputTextRef,inputDateRef,validatedTextInput, validatedDateInput,handleSearchTextBlur,handleSearchDateBlur}
};

export default useHandleBlur;
