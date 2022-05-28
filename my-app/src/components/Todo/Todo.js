import { useState } from "react"
import { Catagories } from "../Categories"
import "./Todo.css"
function Todo (){
  const [tab,settab] = useState("Todo")
    return (
      <>
      <container style ={{"textAlign": "center"}}>
          <div className="sizedbox"></div>
          <h1 className="hello"> ToDo Application</h1>
          <div className="button-tag">
              <column><button className ="btn" onClick={()=>settab("Todo")}> Todolar</button></column>
              <column><button className ="btn" onClick={()=>settab("Catagories")} > Kategoriler</button></column>
          </div>
          <div className="sizedbox-s"></div>
        
          <div className="table">
           <div>
             {tab ==="Todo" ? <div className="todoDiv">  <div>
              <div className="block"><column><input className="" type="text" name="search" placeholder="Todo Açıklama" style={{ "border": "1px solid rgba(0, 0, 0, 0.2)"}}></input></column></div>
              <div className="block"><column><form className="forms">
  <select id="todo" name="todo">
  <option value="sc">Kategori Seçiniz</option>
  <option value="au">Eğitim</option>
  <option value="ca">Kültür</option>
  <option value="usa">Sanat</option>
  </select>
</form>
</column></div>
<div className="block">
  <column><form className="forms">
  <select id="todo" name="todo">
  <option value="sc">Status Seçiniz</option>
  <option value="au">Acil</option>
  <option value="ca">Öncelikli</option>
  <option value="usa">Relax</option>
  </select>
</form>
</column>
</div>
<button className ="btn-add">Ekle</button>
          </div><table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Todo</th>
      <th>Update</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Ödev</td>
      <td><button>update</button></td>
    </tr>
    
  </tbody>
</table></div> : <div><div className="block"><column><input className="" type="text" name="search" placeholder="Kategori Ekle"></input></column></div>
<button className ="btn-add">Ekle</button>
<div className="todoDiv">
<table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Kategoriler</th>
      <th>Statüs</th>
      <th>Kaydet</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Eğitim</td>
      <td><button  className ="btn-add">Statüsleri Gör</button></td>
      <td><button className ="btn-add">Kaydet</button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Kültür</td>
      <td><button className ="btn-add">Statüsleri Gör</button></td>
      <td><button className ="btn-add">Kaydet</button></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Sanat</td>
      <td><button className ="btn-add">Statüsleri Gör</button></td>
      <td><button className ="btn-add">Kaydet</button></td>
    </tr>
    
  </tbody>
</table></div></div>}
             </div> 
</div>
      </container>
      </>
      )
  }
 export default  Todo
  