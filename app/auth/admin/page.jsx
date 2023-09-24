"use client";
import { useState } from "react";
import {
  categories,
  colors as dataColors,
  sizes as dataSizes,
} from "@/lib/data";
import styles from "./admin.module.scss";
import SelectComponent from "@/components/Auth/SelectComponent";
import InputComponent from "@/components/Auth/InputComponent";
import PageWrapper from "@/components/PageWrapper";
import axios from "axios";
import { server } from "@/lib/config";
import FeaturesComponent from "@/components/Auth/FeaturesComponent";
import Image from "next/image";
import Loading from "../../loading";
import notify from "@/components/Notification/notify";

export default function Admin() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState([]);
  const [features, setFeatures] = useState([{ index: 0, title: "", data: "" }]);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [quantity, setQuantity] = useState();
  const [oldPrice, setOldPrice] = useState();
  const [newPrice, setNewPrice] = useState();
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(false);
  const { success, danger } = notify();
  const discount =
    oldPrice &&
    newPrice &&
    Math.round(((oldPrice - newPrice) / oldPrice) * 100);

  const handleChange = (value, setLabel) => {
    if (value === "") return setLabel([]);
    value.trim();
    const values = value.split(/[،.\-\s]/);
    setLabel(values);
  };
  const handleFeatureChange = (index, field, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index][field] = value;
    setFeatures(updatedFeatures);
  };
  const handleUniqe = (value, label, setLabel) => {
    const isUnique = label.find((item) => item === value);
    if (!isUnique) return setLabel(() => [...label, value]);
  };

  const handleRemove = (value, field, setField) => {
    const filtered = field.filter((item) => item !== value);
    setField(filtered);
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files) {
      const uploadedFiles = Array.from(files);
      setUploadedImages(uploadedFiles);
      const imageURLs = uploadedFiles.map((file) => URL.createObjectURL(file));
      setImages(imageURLs);
    }
  };

  const handleForm = () => {
    const formData = new FormData();
    uploadedImages.forEach((file) => {
      formData.append("images", file);
    });
    return formData;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const handleUpload = async () => {
      const formData = handleForm();
      const uploadRes = await axios
        .post(`${server}/api/auth/admin/upload`, formData)
        .then((res) => res.data);
      return uploadRes;
    };
    const handleInsert = async (imgUrls) => {
      const data = {
        name,
        info: description,
        prices: [
          { newPrice: Number(newPrice), oldPrice: Number(oldPrice), discount },
        ],
        category,
        features,
        visited: 0,
        tags,
        avalibaleQuantity: quantity,
        imgs: imgUrls,
        colors,
        sizes,
      };
      const itemRes = await axios.post(`${server}/api/auth/admin`, {
        item: { ...data },
      });
      return itemRes;
    };

    try {
      const res = await handleUpload();
      res.status === 200 &&
        success("آپلود موفق", "تصاویر با موفقیت آپلود شدند");
      if (res) {
        const insertResponse = await handleInsert(res);
        insertResponse.status === 200 &&
          success("ثبت محصول", "محصول جدید با موفقیت اضافه شد");
      }
    } catch (error) {
      console.log(error);
      danger("خطا سرور", "خطا در ثبت اطلاعات");
    } finally {
      setLoading(false);
    }
  };
  const addField = () => {
    const lastIndex =
      features.length > 0 ? features[features.length - 1].index : 0;
    setFeatures((prevFeatures) => [
      ...prevFeatures,
      { index: lastIndex + 1, title: "", data: "" },
    ]);
  };
  const removeField = (i) => {
    const updatedFeatures = features.filter((item) => item.index !== i);
    setFeatures(updatedFeatures);
  };
  const inputs = [
    {
      label: "Name",
      id: "نام محصول",
      selected: name,
      placeholder: "تیشرت ساده برند زارا",
      handleChange: (value) => setName(value),
    },
    {
      label: "Description",
      id: "توضیحات",
      placeholder: "تیشرت ساده برند زارا با کیفیت عالی ساخت کشور ترکیه",
      selected: description,
      handleChange: (value) => setDescription(value),
    },
    {
      typeOf: "Features",
      features,
      handleFeatureChange,
      addField,
      removeField,
    },
    {
      label: "Old Price",
      id: "قیمت بدون تخفیف",
      placeholder: "120000",
      selected: oldPrice,
      type: "number",
      handleChange: (value) => setOldPrice(value),
    },
    {
      label: "New Price",
      id: "قیمت نهایی",
      placeholder: "100000",
      selected: newPrice,
      type: "number",
      handleChange: (value) => setNewPrice(value),
    },
    {
      label: "Quantity",
      id: "موجودی",
      placeholder: "5",
      selected: quantity,
      type: "number",
      handleChange: (value) => setQuantity(value),
    },
    {
      label: "Tags",
      id: "تگ ها",
      placeholder: "تیشرت ،ساده، برند، زارا",
      selected: tags,
      handleChange: (value) => handleChange(value, setTags),
      handleRemove: (value) => handleRemove(value, tags, setTags),
      multiply: true,
    },
    {
      label: "Images",
      id: "تصاویر",
      selected: images,
      type: "file",
      handleFileChange,
      handleRemove: (value) => handleRemove(value, images, setImages),
      multiply: true,
    },
    {
      id: "دسته بندی",
      typeOf: "select",
      label: "Category",
      data: categories,
      selectedData: category,
      handleRemove: (value) => handleRemove(value, category, setCategory),
      handleData: (value) => handleUniqe(value, category, setCategory),
    },
    {
      id: "سایز ها",
      typeOf: "select",
      label: "Sizes",
      data: dataSizes,
      selectedData: sizes,
      handleRemove: (value) => handleRemove(value, sizes, setSizes),
      handleData: (value) => handleUniqe(value, sizes, setSizes),
    },
    {
      id: "رنگ ها",
      typeOf: "select",
      label: "Colors",
      data: dataColors,
      selectedData: colors,
      handleRemove: (value) => handleRemove(value, colors, setColors),
      handleData: (value) => handleUniqe(value, colors, setColors),
    },
  ];

  return (
    <PageWrapper className={styles.Container}>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <div className={styles.Top}>
          <h3>ثبت محصول جدید</h3>
        </div>

        {inputs.map((input) => {
          if (input.typeOf === "Features")
            return <FeaturesComponent key={input.id} {...input} />;
          if (input.typeOf === "select")
            return <SelectComponent key={input.id} {...input} />;
          return <InputComponent key={input.id} {...input} />;
        })}

        <button disabled={loading} className={styles.submit} type="submit">
          {loading ? (
            <Loading height="30px" width="30px" color="white" />
          ) : (
            "ثبت محصول"
          )}
        </button>
      </form>
      <div className={styles.img}>
        <Image alt="" src={"/AddItem.jpg"} fill />
      </div>
    </PageWrapper>
  );
}
