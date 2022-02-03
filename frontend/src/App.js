import React,{useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ChartItem from "./Components/ChartItem";
import { getMetricItemData, getMetrics } from "./Redux/actionCreator";

export default function App() {

    const dispatch = useDispatch();
     const allMetrics = useSelector(state => state.metrics.metrics);
     const allFilteredItems = useSelector(state => state.metricItems.item)

     const [category, setCategory] = useState("");
     const [items, setItems] = useState([]); 

    useEffect(() => {
       dispatch(getMetrics())
    }, []);

    console.log(allMetrics)

    var categories = [];

    allMetrics && allMetrics.forEach(e => categories.push(e.measure))
    console.log(categories)

    const removeDuplicates = (arr) => {
        var uniques = [...new Set(arr)]
        categories = uniques
    }
    removeDuplicates(categories)
    console.log(categories);
    console.log(category);

    const handleChange = (e) => {
        setCategory(e.target.value);
        dispatch(getMetricItemData(e.target.value))
        allFilteredItems && setItems(allFilteredItems)
    }
    console.log(items)
    
    return(
        <div className="min-h-screen min-w-full overflow-x-hidden bg-black to-white m-auto place-items-center">
            <div className="place-items-center flex m-auto flex-col">
            <h1 className="text-5xl bg-[#500472] font-bold text-[#79cbb8] px-4 py-4 rounded-md mb-10 mt-4">Data Visualization</h1>
            <div className="bg-gradient-to-b from-yellow-800 via-yellow-700 to-zinc-900 rounded-lg m-auto place-items-center px-20 py-6" >
                <div className="text-white font-semibold"><h3>Select Type of Quantity to view</h3></div>
                <div className="mt-3"><select name="type" style={{outline:"none",borderRadius:"8px"}} id="measure" onChange={handleChange} value={category}>
                    <option value=""></option>
                    {categories && categories.map((e,i) => {
                        return (<option value={e} key={i}>{e}</option>)
                    })}
                </select></div>
            </div>
            </div>
            <div className=" overflow-x-scroll">
                <h2 style={{marginLeft:"45%",marginTop:"1%"}}>{category}</h2>
                {items && items.map(data => {
                    return (
                        <ChartItem data={data} key={data.id} id={data.id} metrics={allMetrics}/>
                    )
                })}
            </div>
        </div>
    )
}