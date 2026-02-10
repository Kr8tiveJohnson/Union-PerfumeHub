const vendor = JSON.parse(localStorage.getItem("loggedVendor"));
const orders = JSON.parse(localStorage.getItem("orders")) || [];

const myOrders = orders.filter(o => o.vendor === vendor.businessName);

document.getElementById("vendorOrders").innerHTML = myOrders.map(o => `
  <div class="order-card">
    <p><strong>${o.product.name}</strong></p>
    <p>Customer: ${o.customerName}</p>
    <p>Phone: ${o.phone}</p>
    <p>Status: ${o.status}</p>
  </div>
`).join("");
