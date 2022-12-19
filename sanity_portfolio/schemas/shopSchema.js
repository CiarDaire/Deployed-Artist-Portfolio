export default {
    name: "products",
    title: "Products",
    type: "document",
    fields: [
      {
        name: 'productName',
        type: 'string',
        title: 'Product Name',
        description: 'Required'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: doc => `product-${doc.productName}`,
        },
        description: 'Required'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price of Product',
        description: 'Required'
      },
      {
        name: 'date',
        type: 'string',
        title: 'Date'
      },
      {
        name: 'materials',
        type: 'string',
        title: 'Materials'
      },
      {
        name: 'size',
        type: 'string',
        title: 'Size'
      },
      {
        name: 'productImage',
        type: 'image',
        title: 'Product Image',
      },
    ]
  }