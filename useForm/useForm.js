import { useState } from 'react';

export const useForm = (initialFormnState = {}) => {
	const [formState, setFormState] = useState(initialFormnState);

	const handleInputChange = ({ target }) => {
		setFormState({
			...formState,
			[target.name]: target.value,
		});
	};

    const handleClearForm = () => {
        setFormState(initialFormnState);
    };

	return {
		formState,
		handleInputChange,
        handleClearForm,
	};
};
