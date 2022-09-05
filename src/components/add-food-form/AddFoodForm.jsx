import { Divider, Input } from 'antd';

function AddFoodForm({
  name,
  setName,
  image,
  setImage,
  calories,
  setCalories,
  servings,
  setServings,
  handleSubmit,
}) {
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input
          value={name}
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label>Image</label>
        <Input
          value={image}
          type="text"
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />

        <label>Calories</label>
        <Input
          value={calories}
          type="number"
          onChange={(event) => {
            setCalories(event.target.value);
          }}
        />

        <label>Servings</label>
        <Input
          value={servings}
          type="number"
          onChange={(event) => {
            setServings(event.target.value);
          }}
        />

        <button type="submit" className="btn btn-secondary mt-3">
          Create
        </button>
      </form>
    </div>
  );
}

export default AddFoodForm;
