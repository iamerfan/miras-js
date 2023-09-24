import styles from "../Auth/Auth.module.scss";
import { useState, useRef } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";

export default function FormInput({
  title,
  type,
  name,
  placeholder = title,
  handleValue,
  disabled,
  value,
}) {
  const [showPass, setShowPass] = useState(false);
  const labelRef = useRef();
  return (
    <div className={styles.FormContainer}>
      <p ref={labelRef} className={value ? styles.active : ""}>
        {title}
      </p>
      <div className={styles.FormInput}>
        <input
          type={showPass ? "text" : type ? type : name}
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          value={value}
          onFocus={() => labelRef.current.classList.add(styles.active)}
          onBlur={() =>
            !value && labelRef.current.classList.remove(styles.active)
          }
          onChange={(e) => handleValue && handleValue(e.target.value)}
        />
        {(type === "password" || name === "password") && (
          <button
            type="button"
            className={styles.PasswordBtn}
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <HiEyeSlash /> : <HiEye />}
          </button>
        )}
      </div>
    </div>
  );
}
