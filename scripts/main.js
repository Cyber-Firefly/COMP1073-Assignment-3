class Pizza {
  constructor(customerName, size, toppings, sauces) {
    this.customerName = customerName;
    this.size = size;
    this.toppings = toppings;
    this.sauces = sauces;
  }

  describe() {
    return `${this.customerName} ordered a ${
      this.size
    } pizza with ${this.toppings.join(", ")} and ${this.sauces.join(", ")}.`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const showStudentInfoBtn = document.getElementById("showStudentInfoBtn");
  const studentInfo = document.getElementById("studentInfo");
  showStudentInfoBtn.addEventListener("click", () => {
    studentInfo.innerHTML = "<p>Student Number: 200327450 - Name: John Gu</p>";
  });

  orderButton.addEventListener("click", () => {
    const customerName = document.getElementById("customerName").value.trim();
    const size = document.getElementById("size").value;
    const toppings = Array.from(
      document.querySelectorAll('input[name="toppings"]:checked')
    ).map((el) => el.value);
    const sauces = Array.from(
      document.querySelectorAll('input[name="sauces"]:checked')
    ).map((el) => el.value);

    let missingFields = [];

    if (!customerName) {
      missingFields.push("customer name");
    }
    if (!size) {
      missingFields.push("pizza size");
    }
    if (toppings.length === 0) {
      missingFields.push("toppings");
    }
    if (sauces.length === 0) {
      missingFields.push("sauces");
    }

    if (missingFields.length > 0) {
      alert(
        "Please fill in the following required fields: " +
          missingFields.join(", ") +
          "."
      );
      return;
    }

    const pizza = new Pizza(customerName, size, toppings, sauces);
    document.getElementById("orderSummary").innerText = pizza.describe();
  });
});
