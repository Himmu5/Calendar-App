import Calendar from "./Components/Calendar/Calendar"
import Form from "./Components/EventForm/Form"

function App() {

  return (
    <>
      <h1 className="text-center text-3xl my-4 ">Calendar 2023</h1>
      <Form />
      {
        [...Array(12).keys()].map((month , index)=>{
          return <Calendar key={index} year={2023} month={month} />
        })
      }
    </>
  )
}

export default App
