import { useState } from "react";

type ErrorMap = { [field: string]: string | string[] };

export const useErrors = (initialErrors: any = {}) => {
    const [errors, setErrors] = useState<ErrorMap>(initialErrors);
    const [hasErrors, setHasErrors] = useState(true);

    const setError = (field: string, errorMessage: string | string[]) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: errorMessage,
        }));
    };

    const resetErrors = (errors: ErrorMap) => {
        setErrors(errors);
    }

    const clearError = (field: string) => {
        setErrors((prevErrors) => {
            const updatedErrors = { ...prevErrors };
            delete updatedErrors[field];
            return updatedErrors;
        });
    };
    return { errors, hasErrors, resetErrors, setHasErrors, setError, clearError };
};