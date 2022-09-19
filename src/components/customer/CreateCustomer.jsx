import { useEffect } from "react";

export default function CreateCustomer({ name, logo, agent }) {
  class Customer{
    constructor(name, logo, agent){
      this.name = name;
      this.logo = logo;
      this.agent = agent;
    }
  }
  //Assuming we have some company data
  const someCustomer = new Customer(name, logo, agent);
  useEffect(
    () => {
      //Some logic and functions to add company to db including assignment of the agent

      return () => {
        // Something to act as a cleanup
        console.log(`Creating the customer ${name} successful`);
      };
    }, // We want it to run this once
    []
  );

  return null;
}
