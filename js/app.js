// Defined three arrays to store information about a list of items
let item_names = ["pen", "pencil", "marker"];
let item_price =[ 50, 25, 1]
let in_stock = [true, false, true];
// Got the first item name and price from the arrays by accessing the first element usign the index number
let first_item_name = item_names[0];
let fist_item_price = item_price[0];
// Add a new item, price, and availability to the end of the arrays using the push() method
item_names.push( "note book" );
item_price.push( "$4" );
in_stock.push( true );
// Removed the last item, price, and availability from each array using the pop() method and store their values in new variables
let last_item_name = item_names.pop();
let last_item_price = item_price.pop();
let last_item_stock = in_stock.pop();