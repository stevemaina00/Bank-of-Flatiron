import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

export default function AccountContainer() {
  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList />
      <h1>Hello</h1>
      
    </div>
  );
}

