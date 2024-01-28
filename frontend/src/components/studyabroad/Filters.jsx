import { data } from "./data";
import { decrement, increment } from "../redux-toolkit/filters";
import { useDispatch,useSelector } from "react-redux";
export const Filters = () => {
    const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();
  console.log(increment, decrement, count)
  return (
    <section>
      <div>
        <button onClick={() => dispatch()}>+</button>
        {data.map((item) => {
          return (
            <ol key={item.id} className="flex p-2 ml-3">
              <li>
                {item.id}. {item.university} - {item.location} - {item.career}{" "}
              </li>
            </ol>
          );
        })}
      </div>
      <div>
        <button>Ielts: 5</button>
        <button>Ielts: 6</button>
        <button>Ielts: 7</button>
        <button>Ielts: 8</button>
        <button>Ielts: 9</button>
      </div>
    </section>
  );
};
