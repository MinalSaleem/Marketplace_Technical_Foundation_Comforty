export default {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Customer Name',
      },
      {
        name: 'phone',
        type: 'number',
        title: 'Phone Number:',
      },
      {
        name: 'address',
        type: 'string',
        title: 'Customer Address',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
    ],
  };