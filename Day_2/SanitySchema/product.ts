export default {
  name: 'product',
  type: 'document',
  title: 'product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      description:'Type of the product:',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'detail',
      type: 'text',
      title: 'Detail',
    },
  ],
};