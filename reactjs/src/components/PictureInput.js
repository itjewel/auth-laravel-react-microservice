export default ({ form }) => (
    <input
      name='cat_image'
      type="file"
      accept="image/*"
      onChange={e => form.setFieldValue('cat_image', e.target.files[0])}
    />
  );