import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

import { FormStyled } from "./SearchForm.styled";

const InititalValues = {
    movie: '',
}

export default function SearchForm({ onSubmit }) {
    const [query, setQuery] = useState('');

    const onChange = (e) => {
        const query = e.target.value;
        setQuery(query)
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (query.trim() === '') {
            toast.warn("ты пидарас", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
            return;
        };
        onSubmit(query)
        setQuery('')
    }

    return (
        <FormStyled onSubmit={onFormSubmit}>
            <input type='text' autoComplete="off" name="movie" onChange={onChange} value={query}/>
            <button type="submit">Search</button>
        </FormStyled>
    )
};