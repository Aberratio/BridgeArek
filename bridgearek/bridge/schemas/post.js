export default {
  name: 'post',
  title: 'Wyniki',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Data Turnieju',
      type: 'date',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Obrazek',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'place',
      title: 'Miejsce Gry',
      type: 'reference',
      to: {type: 'place'},
    },
    {
      name: 'body',
      title: 'Wyniki',
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
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
