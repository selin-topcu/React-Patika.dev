import { useState } from "react";

function InputExample() {
  const [form, setForm] = useState({ name: "", surname: "" });
  const onChangeInput = (e) => {
    console.log(e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      Enter a name:
      <input name="name" value={form.name} onChange={onChangeInput} />
      <br />
      Enter a surname:
      <input name="surname" value={form.surname} onChange={onChangeInput} />
      <br />
      {form.name} {form.surname}
    </div>
  );
}

export default InputExample;
