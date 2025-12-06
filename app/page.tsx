"use client"

import { useState } from "react";
import { Todoitem } from "./types/Todoitem";

const Page = () => {

  const[itemInput, setitemInput] = useState('');

  const[list, setList] = useState<Todoitem[]>([
    { label: 'Fazer dever de casa', checked: true },
    { label: 'Comprar o bolo', checked: false }
  ]);

  const handleAddButton = () => {
    if(itemInput.trim() === '') return;

    setList([
      ...list,
      { label: itemInput, checked: false}
    ]);
    setitemInput('');
  }

  const deleteItem = (index: number) => {
    setList(list.filter((item, key) => key !== index));

  }

  const tooggleItem = (index: number) => {
    let newList = [...list];
    for(let i in newList) {
      if(index === parseInt(i)) {
        newList[i].checked = !newList[i].checked;

      }
      setList(newList);
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-2xl"> 
    <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

    <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">
      <input 
        type="text" 
        placeholder="O que deseja fazer?"
        className="flex-1 border border-white p-3 text-2xl text-white rouded-md mr-3"
        value={itemInput}
        onChange={e => setitemInput(e.target.value)}
      />
      <button onClick={handleAddButton}>Adicionar</button>

    </div>

    <p className="my-4">{list.length} itens na lista</p>

    <ul>
      {list.map((item, index) =>
        <li key={index}>
        <input onClick={() => tooggleItem(index)} type="checkbox" checked={item.checked} className="w-6 h-6 mr-3"/>
        {item.label} - <button onClick={() => deleteItem(index)} className="hover:underline">[ deletar ]</button></li>
      )}

    </ul>
      

      
 
 

   

    </div>
  );
}

export default Page;