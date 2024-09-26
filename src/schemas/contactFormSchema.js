
// src/schemas/contactFormSchema.js
const contactFormSchema = {
  title: "Contact Form",
  fields: [
    {
      type: "text",
      label: "Name",
      name: "name",
      required: true
    },
    {
      type: "email",
      label: "Email",
      name: "email",
      required: true
    },
    {
      type: "textarea",
      label: "Message",
      name: "message",
      required: true
    },
    {
      type: "checkbox",
      label: "Subscribe to newsletter",
      name: "subscribe"
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      options: ["USA", "Canada", "UK"],
      required: true
    }
  ]
};

export default contactFormSchema;
