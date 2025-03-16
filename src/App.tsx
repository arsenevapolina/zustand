import { Button, Card, Input, Rate, Tag } from "antd";
import "./App.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCoffeeStore } from "./modal/cofeeStore";
import { useEffect, useState } from "react";
import { useCounterStore } from "./modal/counterStore";

function App() {
  // const { getCoffeeList, coffeeList } = useCoffeeStore();
  // const [text, setText] = useState<string | undefined>();
  // const handleSearch = (text: string) => {
  //   getCoffeeList({ text });
  //   setText(text)
  // };
  // useEffect(() => {
  //   getCoffeeList();
  // }, []);
  const { counter, decrement, increment, persisedCounter } = useCounterStore();
  return (
    <div className="wrapper">
      <Button onClick={increment}>+</Button>
      <span>{counter}</span>
      <span>{persisedCounter}</span>
      <Button onClick={decrement}>-</Button>
      {/* <Input 
      value={text}
      placeholder="поиск" onChange={(e) => handleSearch(e.target.value)} />
      <div className="cardsContainer">
        {coffeeList &&
          coffeeList.map((coffee) => (
            <Card
              key={coffee.id}
              cover={<img src={coffee.image} alt={coffee.name} />}
              actions={[
                <Button icon={<ShoppingCartOutlined />}>{coffee.price}</Button>,
              ]}
            >
              <Card.Meta title={coffee.name} description={coffee.subTitle} />
              <Tag color="purple" style={{ marginTop: 12 }}>
                {coffee.type}
              </Tag>
              <Rate
                defaultValue={coffee.rating}
                disabled
                allowHalf
                style={{ marginTop: 12 }}
              />
            </Card>
          ))}
      </div> */}
    </div>
  );
}

export default App;
