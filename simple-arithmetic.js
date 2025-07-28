function playSimpleArithmetic(){
  let num1 = Math.floor(Math.random()*10);
  let num2 = Math.floor(Math.random()*10);
  const operatorList = ['+', '-', '*', '/'];
  let randomOperator = operatorList[Math.floor(Math.random()* operatorList.length)];

  switch (randomOperator) {
    case '+':
      let userAnswer1 = prompt(num1 +  ' + ' + num2);
      if(+userAnswer1 === num1 + num2){
        alert('Ответ правильный');
      }else{
        alert('Ответ неверный');
      }
      break;

      case '-':
      let userAnswer2 = prompt(num1 +  ' - ' + num2);
      if(+userAnswer2 === num1 - num2){
        alert('Ответ правильный');
      }else{
        alert('Ответ неверный');
      }
      break;

      case '*':
      let userAnswer3 = prompt(num1 +  ' * ' + num2);
      if(+userAnswer3 === num1 * num2){
        alert('Ответ правильный');
      }else{
        alert('Ответ неверный');
      }
      break;

      case '/':
      let userAnswer4 = prompt(num1 +  ' / ' + num2);
      if(+userAnswer4 === num1 / num2){
        alert('Ответ правильный');
      }else{
        alert('Ответ неверный');
      }
      break;
  
    default:
      break;
  }  
}