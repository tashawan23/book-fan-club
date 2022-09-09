import { faker } from '@faker-js/faker'

export const USERS = [{id: 1, name: "Anna Tan", role: "Member", joinDate: "12/01/2021"},
{id: 2, name: "Jamie Rozario", role: "Editor", joinDate: "01/01/2021"},
{id: 3, name: "Ashton Pill", role: "Member", joinDate: "11/10/2021"},
{id: 4, name: "Juliet Well", role: "Member", joinDate: "02/04/2022"},
{id: 5, name: "Ronald Michael", role: "Admin", joinDate: "22/07/2021"},
{id: 6, name: "Julie Rachel", role: "Editor", joinDate: "01/01/2021"},
{id: 7, name: "Aaron Smith", role: "Member", joinDate: "11/10/2021"},
{id: 8, name: "Sue Wills", role: "Member", joinDate: "02/04/2022"},
{id: 9, name: "Ronny Mitchel", role: "Admin", joinDate: "22/07/2021"},
{id: 10, name: "Janelle Boyle", role: "Editor", joinDate: "26/02/2021"},
{id: 11, name: "Aydon Kelly", role: "Editor", joinDate: "19/01/2022"},
{id: 12, name: "Tessa Smith", role: "Member", joinDate: "05/04/2022"},
{id: 13, name: "Therese Michael", role: "Member", joinDate: "22/03/2021"},
{id: 14, name: "Riley Bonson", role: "Editor", joinDate: "19/09/2021"},
{id: 15, name: "Anston Small", role: "Member", joinDate: "26/03/2021"},
{id: 16, name: "Willy Mills", role: "Member", joinDate: "27/02/2022"},
{id: 17, name: "Benny Paul", role: "Member", joinDate: "13/11/2021"}]

enum GENRE {
    Romance = "Romance",
    Action = "Action",
    Adventure = "Adventure",
    Thriller = "Thriller",
    Fiction = "Fiction",
    History = "History",
    Travel = "Travel",
    Lifestyle = "Lifestyle",
    Fantasy = "Fantasy",
    ScienceFiction = "ScienceFiction",
    Poetry = "Poetry"
}

enum BOOK_STATUS {
    Borrowed = "Borrowed",
    Available = "Available"
}

export const BOOKS = [
    {id: 1, title: "My Dear Secretary", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Romance, author: "Agnese Orred", year_published: "1993", status: BOOK_STATUS.Available, last_borrower: "Emyle Iamittii"},
    {id: 2, title: "My Dear Secretary", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Romance, author: "Agnese Orred", year_published: "1993", status: BOOK_STATUS.Available, last_borrower: "Emyle Iamittii"},
    {id: 3, title: "Ignition", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.ScienceFiction, author: "Josy Coomer", year_published: "1990", status: BOOK_STATUS.Available, last_borrower: "Juliet Well"},
    {id: 4, title: "Hellboy", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.History, author: "Amata Dubois", year_published: "1983", status: BOOK_STATUS.Available, last_borrower: "Ashton Pill"},
    {id: 5, title: "Acts of Worship", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.History, author: "Gisela Powton", year_published: "1978", status: BOOK_STATUS.Available, last_borrower: "Anna Tan"},
    {id: 6, title: "Mother Earth", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Travel, author: "Daryl Phebee", year_published: "1999", status: BOOK_STATUS.Borrowed, last_borrower: "Emyle Iamittii"},
    {id: 7, title: "Phantasm", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Fantasy, author: "Mayer Benam", year_published: "1989", status: BOOK_STATUS.Available, last_borrower: "Ashton Pill"},
    {id: 8, title: "Double Tide", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Romance, author: "Nollie Fice", year_published: "1987", status: BOOK_STATUS.Borrowed, last_borrower: "Emyle Iamittii"},
    {id: 9, title: "Soap and Water", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Lifestyle, author: "Em Tysall", year_published: "1997", status: BOOK_STATUS.Borrowed, last_borrower: "Anna Tan"},
    {id: 10, title: "Whole Wide World", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Travel, author: "Agnese Orred", year_published: "1993", status: BOOK_STATUS.Available, last_borrower: "Emyle Iamittii"},
    {id: 11, title: "America's Sweethearts", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.History, author: "Josy Coomer", year_published: "1990", status: BOOK_STATUS.Available, last_borrower: "Juliet Well"},
    {id: 12, title: "Blood Moon", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.History, author: "Amata Dubois", year_published: "1978", status: BOOK_STATUS.Available, last_borrower: "Ashton Pill"},
    {id: 13, title: "Identity", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.ScienceFiction, author: "Gisela Powton", year_published: "1973", status: BOOK_STATUS.Available, last_borrower: "Anna Tan"},
    {id: 14, title: "Innocent Lies", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Romance, author: "Daryl Phebee", year_published: "1989", status: BOOK_STATUS.Borrowed, last_borrower: "Emyle Iamittii"},
    {id: 15, title: "For Pete's Sake", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Lifestyle, author: "Mayer Benam", year_published: "1985", status: BOOK_STATUS.Available, last_borrower: "Ashton Pill"},
    {id: 16, title: "Alice", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Thriller, author: "Nollie Fice", year_published: "1982", status: BOOK_STATUS.Borrowed, last_borrower: "Emyle Iamittii"},
    {id: 17, title: "Border", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Adventure, author: "Em Tysall", year_published: "1990", status: BOOK_STATUS.Borrowed, last_borrower: "Anna Tan"},
]
