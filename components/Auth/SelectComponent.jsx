"use client";
import { useState, useEffect } from "react";
import styles from "@/app/auth/admin/admin.module.scss";
import InputComponent from "./InputComponent";
import { BiCaretDown } from "react-icons/bi";

export default function SelectComponent({
  id,
  data,
  label,
  handleData,
  handleRemove,
  selectedData,
}) {
  const [active, setActive] = useState(false);
  const [customColor, setCustomColor] = useState({
    index: 0,
    title: "",
    enTitle: "",
  });

  const mapData = data.map((item) => {
    return (
      <li
        key={item.index}
        onClick={(e) => {
          e.preventDefault();
          handleData(
            label === "Category" ? { name: item.label, id: item.index } : item
          );
        }}
      >
        {label === "Sizes" && (
          <>
            <label className={styles.IndexLabel}>{item.enTitle}</label>-
            <label className={styles.PersianLabel}>{item.title}</label>
          </>
        )}

        {label === "Category" && (
          <label className={styles.PersianLabel}>{item.label}</label>
        )}
        {label === "Colors" && (
          <>
            <i
              className={styles.ColorDiv}
              style={{ backgroundColor: item.enTitle }}
            />
            <label className={styles.PersianLabel}>{item.title}</label>
          </>
        )}
      </li>
    );
  });

  useEffect(() => {
    const handleClick = () => setActive(false);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      className={styles.Select}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button
        className={styles.SelectButton}
        type={"button"}
        onClick={(e) => {
          e.stopPropagation();
          setActive(!active);
        }}
      >
        <label>{id}:</label>
        انتخاب
        {label === "Sizes" && " سایز"}
        {label === "Colors" && " رنگ"}
        {label === "Category" && " دسته بندی"}
        <BiCaretDown />
      </button>

      {selectedData.length > 0 && (
        <ul className={styles.FieldArray}>
          {selectedData.map((value, i) => (
            <li key={i} onClick={() => handleRemove(value)}>
              {value.title ? value.title : value.name}
              {label === "Colors" && (
                <i
                  style={{
                    backgroundColor: value.enTitle,
                    padding: "0 .5rem",
                    margin: ".5rem",
                  }}
                />
              )}
            </li>
          ))}
        </ul>
      )}

      <div className={`${styles.HiddenContainer} ${active && styles.active}`}>
        {label === "Colors" && (
          <div className={styles.ColorPicker}>
            <InputComponent
              type="text"
              id="اسم رنگ"
              placeholder="کرم ، صورتی ، سبز"
              handleChange={(value) =>
                setCustomColor((prevState) => ({
                  ...prevState,
                  title: value,
                }))
              }
            />
            <div className={styles.Pick}>
              <InputComponent
                type="color"
                id="انتخاب رنگ"
                handleChange={(value) =>
                  setCustomColor((prevState) => ({
                    ...prevState,
                    enTitle: value,
                  }))
                }
              />

              <button
                className={styles.ColorButton}
                onClick={() => {
                  customColor && handleData(customColor);
                }}
                type="button"
              >
                ثبت رنگ
              </button>
            </div>
          </div>
        )}
        <ul>{mapData}</ul>
      </div>
    </div>
  );
}
