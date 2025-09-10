import React, { useState } from "react";
import "./UserForm.css";

interface FormData {
  name: string;
  email: string;
  age: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    age: "",
  });

  const [error, setError] = useState<string>("");
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.email.includes("@")) {
      setError("Email không hợp lệ");
      return;
    }

    if (Number(formData.age) < 0) {
      setError("Tuổi không được âm");
      return;
    }

    setSubmittedData(formData);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", age: "" });
    setSubmittedData(null);
    setError("");
  };

  return (
    <div className="form-container">
      <h2>Form nhập thông tin người dùng</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Họ và tên:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Tuổi:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        {error && <p className="error">{error}</p>}

        <div className="btn-group">
          <button type="submit" className="btn submit">
            Gửi
          </button>
          <button type="button" className="btn reset" onClick={handleReset}>
            Xóa tất cả
          </button>
        </div>
      </form>

      {submittedData && (
        <div className="result">
          <h3>Thông tin người dùng:</h3>
          <p>Họ và tên: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Tuổi: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
