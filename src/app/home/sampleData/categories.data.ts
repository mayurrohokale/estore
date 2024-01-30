import { Category } from "../types/category.type";

export const categories:Category[]=[
    {
        id:1,
        category:'Men',
    },
    {
        id: 2,
        category:'Women',
    },
    {
        id:3,
        category:'Kids',
    },
    {
        id:4,
        category:"Casual Wear",
    },
    {
        id:5,
        category:'Party Wear',
    },
    {
        id:6,
        category:'Foot wear',
    },
    {
        id:7,
        category:'Accessories',
        parent_category_id:3,
    },
];