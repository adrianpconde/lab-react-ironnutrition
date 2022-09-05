import './App.css';
import foods from './foods.json';
import { Row, Divider} from 'antd';
import FoodBox from './components/food-box/FoodBox';

function App() {
  return (
    <div className="App">
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((food) => (
          <FoodBox key={food.name} {...food} />
        ))}
      </Row>{' '}
    </div>
  );
}

export default App;
