import React from "react";
import { Props } from ".";
import Image from "next/image";
import Card from '../components/card'
interface ListProps extends Props {
    
  noDataFoundText: string;
}
const TestComponent = ({ data, noDataFoundText }: ListProps) => {
  const renderDataList = data.map(
    ({ name: { common }, flags: { svg } }, index) => (
    //   <li key={index}>
    //     {common}
    //     <img alt={common} src={svg} width={300} height={300} />
        <Card key={index} countryName={common} svg={svg}/>
    //   </li>
    )
  );

  return (
    <div>
      <ul>
        {renderDataList.length > 0 ? (
          renderDataList
        ) : (
          <span>{noDataFoundText}</span>
        )}
      </ul>
    </div>
  );
};

export default TestComponent;
