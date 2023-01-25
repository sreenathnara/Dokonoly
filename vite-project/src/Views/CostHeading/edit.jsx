import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editCostHeading } from '../../redux/slices/costHeadingSlice';
import { useParams } from "react-router-dom";


export const Edit = () => {
    let  {id}  = useParams();
    const costHeadingData=useSelector(state=> state.costHeading.costHeadings)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [editUser, seteditUser] = useState({
        id:id,
        name:""
    })
    useEffect(()=>{
        costHeadingData.map((data)=>{
             if (data.id = id){
                seteditUser((prev)=>{
                    return{
                        ...prev,
                        name:data.name
                    }
                })
             }
        })
    },[costHeadingData])
    console.log(editUser)
    //console.log(id)

    const editHandleChange =e=>{
        seteditUser((prev)=>{
            console.log(prev)
            return{
                ...prev,
                name:e.target.value
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { id: id, name: editUser.name }
        console.log(data)
        dispatch(editCostHeading(data));
        seteditUser("");
        navigate("/costheading")
    }
    return (
        <section >
            <form onSubmit={handleSubmit}>
                <label>Edit CostHeading Name</label>
                <input type="text" value={editUser.name} onChange={editHandleChange} />
                <button type='submit' >Submit</button>
            </form>
        </section>
    )
}
