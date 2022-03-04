import "./App.css";
import { ExpenseItem } from "./components/ExpenseItem";
import { expenses } from "./components/datasource/expenses";

function App() {
  return (
    <div>
      {expenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        );
      })}
    </div>
  );
}

export default App;
