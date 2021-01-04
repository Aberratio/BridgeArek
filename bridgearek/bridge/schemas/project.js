export default {
    name: "project",
    title: "Ogłoszenia",
    type: "document",
    fields: [
        {
            name: "title",
            title: 'Tytuł',
            type: "string",
        },
        {
            name: "date",
            title: 'Data publikacji ogłoszenia',
            type: "datetime",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            }
        }
    ],
}