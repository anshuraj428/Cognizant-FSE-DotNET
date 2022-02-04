function OrderCake(str) {
	//fill the code
	const weightInGrams = str.slice(0, 4);
	const weightInKgs = weightInGrams / 1000;
	const cakeName = str.slice(4, str.length - 3);
    const orderID = str.slice(str.length - 3);
    
    const payableAmount = weightInKgs * 450;
    
    return `Your order for ${Math.round(weightInKgs)} kg ${cakeName} cake has been taken. You are requested to pay Rs. ${Math.round(payableAmount)} on the order no ${orderID}`;
}

console.log(OrderCake('5848ButterBlast485'));
