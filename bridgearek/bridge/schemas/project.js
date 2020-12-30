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
            name: "place",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            title: "Miejsce gry",
            type: "string",
            options: {
                list: [
                    {
                        value: "personal", title: "Personal"
                    },
                    {
                        value: "client", title: "Client"
                    },
                    {
                        value: "school", title: "School"
                    },
                ],
            },
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