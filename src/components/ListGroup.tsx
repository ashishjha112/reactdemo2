import { useState } from "react";

interface Props {
  Items: string[];
  Heading: string;
  //(Items:string) => void
  onSelectedItem: (item: string) => void;
}

function ListGroup({ Items, Heading, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // let Items = ["New york", "India", "Tokyo", "Australia"];

  let GetMessage = () => {
    return Items && Items.length === 0 && <p>no item found</p>;
  };

  //   const HandleClick = (event: MouseEvent) => {
  //     console.log(event);
  //   };

  return (
    <>
      <h1>{Heading}</h1>
      {GetMessage()}
      <ul className="list-group">
        {Items &&
          Items.map((item, index) => (
            <li
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectedItem(item);
              }}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  );
}

export default ListGroup;
