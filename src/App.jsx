import React from 'react';
import Form from './Components/Form'
import contactFormSchema from './schemas/contactFormSchema'; // Ensure this import path is correct

function App() {
  return (
    <div className="App">
      <Form schema={contactFormSchema} />
    </div>
  );
}

export default App;
