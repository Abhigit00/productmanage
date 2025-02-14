 import React, { useState } from "react";
import './Details.css';
import axios from 'axios';

const Details = () => {
  const [form, setForm] = useState({ id: "", title: "", subtitle: "", price: "" });

  const handleChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://productmanage-rmh2.onrender.com/api/post', form);
      alert("Details added successfully!");
      setForm({ id: "", title: "", subtitle: "", price: "" }); // Reset form after submission
    } catch (error) {
      console.error("Error adding details:", error.response?.data || error.message);
      alert('Error in adding details: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="details-container">
      <h1>Product Details</h1>
      <form onSubmit={handleSubmit} className="details-form">
        <label>ID:</label>
        <input type="text" name="id" placeholder="ID" value={form.id} onChange={handleChange} />

        <label>Title:</label>
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} />

        <label>Subtitle:</label>
        <input type="text" name="subtitle" placeholder="Subtitle" value={form.subtitle} onChange={handleChange} />

        <label>Price:</label>
        <input type="text" name="price" placeholder="Price" value={form.price} onChange={handleChange} />

        <button className="create" type="submit">Create</button>
      </form>
    </div>
  );
};

export default Details;
