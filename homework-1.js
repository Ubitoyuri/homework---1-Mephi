
const readline = require('node:readline/promises')

//1 Задание 

function ticketPrice(category){
    switch (category) {
        case 1:
            return Number(300);
            break;
        case 2:
            return Number(500);
            break;
        case 3:
            return Number(900);
            break;
        default:
            return Number(0);
            break;
    }
}

function maxTickets(budget, price){
    let numOftickets = 0;
    while(budget >= price){
        numOftickets++;
        budget = budget - price;
    }
    return numOftickets;
}

function printTicketResult(category, budget){
    const price = ticketPrice(category)
    if( price === 0){
        console.log(`неизвестная категория`);
    } else {
        const numOftickets = maxTickets(budget, price)
        console.log(`Категория ${category}, билет ${price} руб., бюджет ${budget} руб.: можно купить ${numOftickets} шт.`);
    }
    
}

//2 Задание

function deliveryPrice(distance, total){
    if(total >= 3000){
        return 0;
    }
    else if(distance <= 3){
        return 0;
    }
    else if(distance >= 4 && distance <= 10){
        return 200;
    }
    else if(distance > 10){
        return 200 + 25 * (distance - 10);
    }
}

function printDelivery(distance, total){
    const price = deliveryPrice(distance, total)
    console.log(`Расстояние ${distance} км, заказ ${total} руб.: доставка ${price} руб.`)
}

//3 задание
//В задании формулировка:  После ступени 10 строительство останавливается: напечатайте Дальше лестница не построена
//  и выйдите из цикла через break.
// А в примере вышли после 9 ступени. Сделал как в примере

function printSteps(height){
    let count = 1;
    for(let i = 1; i <= height; i++){
        if(i === 4){
            continue;
        }
        if(i >= 10){
            console.log(`Дальше лестница не построена`)
            break
        }
        console.log(`Ступень ${i}`)
        count ++;
    }
    console.log(`Всего построено ${count}`)
}

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

  console.log('Мастерская измерений')
  console.log('1 – билетная касса')
  console.log('2 – доставка заказов')
  console.log('3 – лестница')

  const action = Number(await rl.question('Ваш выбор: '))

  switch (action) {
    case 1: {
      const typeOfTicket = Number(await rl.question('Категория билета: '))
      const budget = Number(await rl.question('Бюджет: '))
      printTicketResult(typeOfTicket, budget)
      break
    }
    case 2: {
      const wayLong = Number(await rl.question('Расстояние: '))
      const orderPrice = Number(await rl.question('Сумма заказа: '))
      printDelivery(wayLong, orderPrice)
      break
    }
    case 3: {
      const width = Number(await rl.question('Высота лестницы: '))
      printSteps(width);
      break
    }
    default:
      console.log('такой задачи нет')
  }
  rl.close()
}

main()