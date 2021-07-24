const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order.name;
  const customerPhone = `Telefone: ${order.phoneNumber}`;
  const customerAddress = `R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;

  return `Olá ${deliveryPerson}, entrega para: ${customerName}, ${customerPhone}, ${customerAddress}.`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const customerName = order.name;
  const pizzaOrder = Object.keys(order.order.pizza).join(', ');
  const drinksOrder = order.order.drinks.coke.type;
  const customerOrder = `${pizzaOrder} e ${drinksOrder}`;
  const orderTotal = order.payment.total;

  return `Olá ${customerName}, o total do seu pedido de ${customerOrder} é R$ ${orderTotal},00.`
}

console.log(orderModifier(order));