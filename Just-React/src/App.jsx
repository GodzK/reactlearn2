import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [note, setNote] = useState({
    content: "",
    author: "",
  });
  //เก็บdataเป็นobject

  //เอาdataมาเเปะในonchange funtionนี้เป็นfunctionตัวกลาง
  function onNoteValueChange(event) {
    const { name, value } = event.target; //สกัดตัวเเปร event.target จากnameกับvalueที่เพิ่งสร้าง
    setNote((prevnote) => {
      return {
        ...prevnote, //เอาcontentเเละauthorที่เราสร้างมาเยะเเยะหุบเหลือเเค่...prevnote
        [name]: value,
      };
    });




  }

  return (
    <section className="app-section">
      <div className="app-container">
        <h3>Jookroo</h3>
        <p>
          
          <textarea 
          rows = "3"
            type="text"
            placeholder="ความในใจ"
            value={note.content}
            name="content"
            onChange={onNoteValueChange} //ส่งข้อมูลชื่อOnnote valueไปในfunction
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="ลงชื่อ"
            name="author"
            value={note.author}
            onChange={onNoteValueChange}
          />
        </p>
      </div>
    </section>
  );
}

export default App;
