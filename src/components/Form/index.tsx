import { ChangeEvent, FormEvent, useState } from "react";
import style from "./style.module.css";

interface Form {
  onAdd: (title: string) => void;
}

export default function Form({ onAdd }: Form) {
  const [input, setInput] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const validation = () => {
    let isValid = false;
    if (input.length < 2) {
      setErrorMsg("적어도 2자이상은 적어주세요.");
    } else if (input.length > 100) {
      setErrorMsg("100자 이내로 작성해주세요.");
    } else {
      isValid = true;
      setErrorMsg(null);
    }

    return isValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 2) {
      setErrorMsg(null);
    }
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validation();
    if (!isValid) return;

    onAdd(input);
    setInput("");
    setErrorMsg(null);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["input-field"]}>
        <input
          type="text"
          className={style["input-field__input"]}
          placeholder="할일을 적어주세요"
          value={input}
          onChange={handleChange}
        />
        <button type="submit" className={style["input-field__button"]}>
          작성
        </button>
      </div>
      {errorMsg && <div className={style.form__msg}>{errorMsg}</div>}
    </form>
  );
}
