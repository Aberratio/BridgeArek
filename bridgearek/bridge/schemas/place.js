export default {
    name: 'place',
    title: 'Miejsce gry',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Nazwa',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'address',
        title: 'Adres',
        type: 'array',
        of: [
          {
            title: 'Block',
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [],
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }
  