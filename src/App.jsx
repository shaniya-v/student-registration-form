import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    department: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, formData]);
    setFormData({ name: "", age: "", department: "", email: "", contact: "" });
  };

  return (
    <div className="container">
      <h2>Student Registration Form</h2>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
          <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
      </div>

      <h3>Registered Students</h3>
      <div className="student-list">
        {students.length === 0 ? <p>No students registered yet.</p> : 
          students.map((student, index) => (
            <div key={index} className="student-card">
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Age:</strong> {student.age}</p>
              <p><strong>Department:</strong> {student.department}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Contact:</strong> {student.contact}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
