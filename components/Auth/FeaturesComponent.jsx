import React, { ChangeEvent } from "react";
import styles from "@/app/auth/admin/admin.module.scss";

export default function FeaturesComponent({
  features,
  handleFeatureChange,
  addField,
  removeField,
}) {
  return (
    <div className={styles.Field}>
      <div className={styles.Features}>
        <label className={styles.label}>ویژگی ها :</label>
        {features.map((feature, i) => (
          <div key={i} className={styles.feature}>
            <input
              type="text"
              className={styles.titleInput}
              placeholder="نام ویژگی"
              onChange={(e) => handleFeatureChange(i, "title", e.target.value)}
            />
            :
            <input
              type="text"
              className={styles.dataInput}
              placeholder="عنوان ویژگی"
              onChange={(e) => handleFeatureChange(i, "data", e.target.value)}
            />
            {i === features.length - 1 ? (
              <button type="button" onClick={addField}>
                +
              </button>
            ) : (
              <button
                type="button"
                className={styles.Remove}
                onClick={() => removeField(i)}
              >
                -
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
