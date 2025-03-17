import { Button, Card, Input, Rate, Tag } from "antd";
import "./App.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCoffeeStore } from "./modal/cofeeStore";
import { useEffect, useState } from "react";

function App() {
  const {
    getCoffeeList,
    coffeeList,
    addToCart,
    cart,
    clearCart,
    orderCoffee,
    address,
    setAddress,
  } = useCoffeeStore();
  const [text, setText] = useState<string | undefined>();
  const handleSearch = (text: string) => {
    getCoffeeList({ text });
    setText(text);
  };
  useEffect(() => {
    getCoffeeList();
  }, []);

  return (
    <div className="wrapper">
      <Input
        value={text}
        placeholder="поиск"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div style={{ display: "flex" }}>
        <div className="cardsContainer">
          {coffeeList &&
            coffeeList.map((coffee) => (
              <Card
                key={coffee.id}
                cover={<img src={coffee.image} alt={coffee.name} />}
                actions={[
                  <Button
                    icon={<ShoppingCartOutlined />}
                    onClick={() => addToCart(coffee)}
                  >
                    {coffee.price}
                  </Button>,
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
        </div>
        <aside className="cart">
          <h1>Заказ</h1>
          {cart && cart.length > 0 ? (
            <>
              {cart.map((item, index) => (
                <span key={index}>{item.name}</span>
              ))}
              <Input
                placeholder="адрес"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Button type="primary" onClick={orderCoffee} disabled={!address}>
                Сделать заказ
              </Button>
              <Button onClick={clearCart}>Очистить корзину</Button>
            </>
          ) : (
            <span>Добавьте напитки</span>
          )}
        </aside>
      </div>
    </div>
  );
}

export default App;
