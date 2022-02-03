import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

// Getting data from parent component
// filtering data according to the line_status
// Passing data to LineChart

export default function ChartItem({data,id,metrics}) {
  const curr_metric = metrics.filter(e => e.id === id)
  console.log(data.data,id,metrics,curr_metric)
  

  const filteredData = data.data.map((item) => {
    if (item.line_status > 0) {
      return {
        ...item,
        timestamp: new Date(item.timestamp).toLocaleDateString(),
        original_value:item.original_value*1.5,
        anomaly: item.original_value*1.5
      };
    }
    return {
      ...item,
      timestamp: new Date(item.timestamp).toLocaleDateString(),
      anomaly: null
    };
  });
  return (
    <div className="flex flex-col place-items-center m-auto">
      <div className="flex bg-gradient-to-b from-[#993366] via-[#8a307f] to-transparent mt-4 py-4 px-2 rounded-lg">
        {curr_metric && curr_metric[0].dimensions.map(e => {
          return(
            <>
            <p className="flex ml-3 mr-3 bg-[#79a7d3] text-white py-3 px-3 rounded-full">{`${e.name} : ${e.value}`}</p>
            </>
          )
        })}
      </div>
      <div className="">
      <LineChart width={3000} height={300} data={filteredData}>
        <Line
          type="monotone"
          dataKey="original_value"
          dot={false}
          stroke="blue"
        />
        <Line type="monotone" dataKey="anomaly" stroke="red" dot={false}/>
        <Line
          type="monotone"
          dataKey="forecasted_value"
          dot={false}
          stroke="blue"
          strokeDasharray="3 3"
        />
        <Line type="monotone" dataKey="min_band" dot={false} stroke="gray" />
        <Line type="monotone" dataKey="max_band" dot={false} stroke="gray" />
        <Legend verticalAlign="top" height={36}/>
        <XAxis dataKey="timestamp" />
        <YAxis type="number" domain={[0, 'auto']}/>
        <Tooltip />
      </LineChart>
      </div>
    </div>
  );
}
