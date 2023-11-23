import { useState } from "react";

export const useApiStatus = () => {
    const [status, setStatus] = useState({
        isError: false,
        errorMessage: "",
        isSubmit: false,
    });

    return { status, setStatus };
}