import React from "react";
interface Props {
  data: [];
}

const TestComponent = ({ data }: any) => {
    console.log(data)
//   console.log(data, "test");
//   console.log(data.map(item => item.name))
  return (
    <div>
      {/* {data &&
        data.map((item, index) => {
          return (<span key={index}>{item.name}</span>);
        })} */}
    </div>
  );
};

export default TestComponent;
