import React, { useState } from "react";
import './Details.css'
import axios from 'axios';

const Details = () => {
  const [form,setForm] = useState({id:"",title:"",subtitle:"",price:""})

  const handlesubmit = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post('https://productmanage-rmh2.onrender.com/api/post',form)
      alert("details added")

    } catch (error) {
      console.log(error)
      alert('error in adding details')
    }
  }
  return (
    <div>
      <h1>Product-Details</h1>
      <form action="" onSubmit={handlesubmit}
>
        <input type="text" placeholder="ID"   value={form.id}
          onChange={(e) => setForm({ ...form, id: e.target.value })} />

        <input type="text" placeholder="TITLE"   value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}/>

        <input type="text" placeholder="SUBTITLE"   value={form.subtitle}
          onChange={(e) => setForm({ ...form, subtitle: e.target.value })}/>

        <input type="text" placeholder="PRICE"   value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}/>

        <button className="create" type="submit">Create</button>
      </form>
    </div>
  );
};

export default Details;
