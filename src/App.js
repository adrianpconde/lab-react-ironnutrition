import './App.css';
import foods from './foods.json';
import { Row, Divider } from 'antd';
import FoodBox from './components/food-box/FoodBox';
import { useState } from 'react';
import AddFoodForm from './components/add-food-form/AddFoodForm';

function App() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);
  const [foodList, setFoodList] = useState(foods);

  const handleSubmit = (event) => {
    event.preventDefault();
    foodList.push({ name, image, calories, servings });
    setFoodList([...foodList]);
  };

  return (
    <div className="App">
      <div className="container">
        <AddFoodForm
          name={name}
          setName={setName}
          image={image}
          setImage={setImage}
          calories={calories}
          setCalories={setCalories}
          servings={servings}
          setServings={setServings}
          handleSubmit={handleSubmit}
        />
        <Divider>Food List</Divider>
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {foodList.map((food) => (
            <FoodBox key={food.name} {...food} />
          ))}
        </Row>{' '}
      </div>
    </div>
  );
}

export default App;
