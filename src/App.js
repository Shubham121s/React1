import logo from './logo.svg';
import './App.css';
import Item from './Com/Item';
import ItemDate from './Com/ItemDate';

function App() {
  const response=[
   {
    itemName:"nirma",
    itemDate:"04",
    itemMonth:"january",
    itemYear:"2000"
   },

   {
    itemName:"surf excel",
    itemDate:"041",
    itemMonth:"june",
    itemYear:"2001"
   },

   {
    itemName:"555",
    itemDate:"44",
    itemMonth:"july",
    itemYear:"2002"
   },

  ];
  return (
    <div>
      <Item name={response[0].itemName}>hello g kya aapka code run kiya</Item>
      <ItemDate day={response[0].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

      


    <div className="App"> shubham</div>
    </div>
    
      
      
    
  );
}

export default App;
