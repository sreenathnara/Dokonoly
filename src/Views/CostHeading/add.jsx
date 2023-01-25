import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCostHeading } from '../../redux/slices/costHeadingSlice';

export const Add = () => {
    const [costHeadingName, setCostHeadingName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const costHeadingSubmitHandler = (e) => {
        e.preventDefault();
        const data = { id: Math.ceil(Math.random() * 1000000 + 1), name: costHeadingName }
        dispatch(addCostHeading(data));
        setCostHeadingName("");
        navigate("/costheading")
    }
    return (
        <section >
            <form onSubmit={costHeadingSubmitHandler}>
                <label>CostHeading Name</label>
                <input type="text" value={costHeadingName} onChange={(e) => setCostHeadingName(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}
