import styles from "@/app/auth/admin/admin.module.scss";
import Image from "next/image";
export default function InputComponent({
  id,
  selected,
  label,
  discount,
  refProp,
  type,
  handleChange,
  handleFileChange,
  placeholder,
  multiply,
  handleRemove,
}) {
  return (
    <div className={styles.Field}>
      <div className={styles.InputContainer}>
        <label>
          {id}:
          {label === "New Price" &&
            discount &&
            discount < 100 &&
            discount > 0 && <i>{`(با ${discount}% تخفیف)`}</i>}
        </label>
        <input
          multiple={multiply}
          type={type ? type : "text"}
          ref={refProp}
          id={label}
          name={label}
          placeholder={placeholder && placeholder}
          onChange={
            label === "Images"
              ? handleFileChange
              : (e) => handleChange(e.target.value)
          }
        />
      </div>
      {label !== "Images" && multiply && selected.length > 0 && (
        <ul className={styles.FieldArray}>
          {selected.map((value, i) => (
            <li onClick={() => handleRemove && handleRemove(value)} key={i}>
              {value}
            </li>
          ))}
        </ul>
      )}
      {label === "Images" && selected.length > 0 && (
        <div className={styles.Images}>
          {selected.map((imageUrl, i) => {
            return (
              <Image
                onClick={() => handleRemove(imageUrl)}
                alt={i}
                key={i}
                src={imageUrl}
                width={40}
                height={40}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
