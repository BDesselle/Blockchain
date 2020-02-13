import React, { useState } from "react";

interface Props {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

const Id: React.FC<Props> = ({ id, setId }) => {
  const [value, setValue] = useState<string>("");

  const changeId: (e: React.FormEvent<HTMLFormElement>) => void = e => {
    e.preventDefault();
    setId(value);
  };

  return (
    <div className="wallet-id-container">
      <form onSubmit={e => changeId(e)}>
        <input placeholder="Enter id..." className="wallet-id-input" value={value} onChange={e => setValue(e.target.value)} />
        <button className="wallet-id-button" type="submit">Change Id</button>
      </form>
    </div>
  );
};

export default Id;
