import { useState } from "react";
export default function Form1() {
  const [email, setEmail] = useState<string>("");
  const hangdleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email: ", email);
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={hangdleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
