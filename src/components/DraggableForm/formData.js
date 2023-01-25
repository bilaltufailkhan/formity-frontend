const initialData = {
  inputs: {
    "input-1": {
      id: "input-1",
      type: "text",
      inputName: "first_name",
      placeholderText: "Enter First Name",
    },
    "input-2": {
      id: "input-2",
      type: "text",
      inputName: "last_name",
      placeholderText: "Enter Last Name",
    },
    "input-3": {
      id: "input-3",
      type: "text",
      inputName: "designation",
      placeholderText: "Enter Designation Name",
    },
    "input-4": {
      id: "input-4",
      type: "email",
      inputName: "email",
      placeholderText: "Enter Email Address",
    },
    "input-5": {
      id: "input-5",
      type: "text",
      inputName: "contact_number",
      placeholderText: "Enter Contact Number",
    },
  },
  forms: {
    "form-1": {
      id: "form-1",
      title: "Test Form",
      inputIds: ["input-1", "input-2", "input-3", "input-4", "input-5"],
    },
  },
  formOrder: ["form-1"],
};

export default initialData;
