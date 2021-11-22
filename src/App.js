import React from 'react'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Section from './Components/Section/Section';

function App() {
  const array = ['Полиморфизм', 'Инкапсуляция', 'Наследование'];
 
  function getIndex(item=0){
    const arrContant =[
      'Полиморфизм — свойство системы, позволяющее использовать объекты с одинаковым интерфейсом без информации о типе и внутренней структуре объекта.',
      'Инкапсуляция — свойство системы, позволяющее объединить данные и методы, работающие с ними, в классе.',
      'Наследование — свойство системы, позволяющее описать новый класс на основе уже существующего с частично или полностью заимствованной функциональностью. Класс, от которого производится наследование, называется базовым, родительским или суперклассом.'
  ]   
    console.log(item);
    return arrContant[item]
  }
  return (
   <div>
     <Header getIndex={getIndex} array={array}/>
     <Section getIndex={getIndex} />
     <Footer />
   </div>
  );
};

export default App;