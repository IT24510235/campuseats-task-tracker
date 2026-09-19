// CampusEats Task Tracker - Clean & Secure Implementation
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }

  const subtotal = price * quantity;

  return customerType === "vip" 
    ? subtotal * (1 - VIP_DISCOUNT) 
    : subtotal;
}

// Secrets/API keys must be loaded from environment variables, never hardcoded.
module.exports = { calculateTotal };