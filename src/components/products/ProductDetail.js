import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({categories, product, onSave, onChange,errors}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.Id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error={errors.productName}
      />
      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map(category=>({
          value:category.id,
          text:category.categoryName
        }))}
        onChange={onChange}
        error={errors.categoryId}
      />
      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      />
      <TextInput
        name="quantityPerunit"
        label="Quantity Per Unit"
        value={product.quantityPerunit}
        onChange={onChange}
        error={errors.quantityPerunit}
      />
      <TextInput
        name="unitInstock"
        label="Unit In Stock"
        value={product.unitInstock}
        onChange={onChange}
        error={errors.unitInstock}
      />
      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};

export default ProductDetail;
