import NewCounter from "./NewCounter";

export default function Counters(){
  return <div className="pt-28 pb-28 bg-black">
    <div className="grid grid-cols-3">
      <NewCounter value={355} text="TOTAL LAUNCHES"/>
      <NewCounter value={318} text="TOTAL LANDINGS"/>
      <NewCounter value={289} text="TOTAL REFLIGHTS"/>
    </div>
  </div>
}