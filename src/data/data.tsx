import {
    randomCreatedDate,
  } from '@mui/x-data-grid-generator';

export const USERS = [{id: 1, name: "Anna Tan", role: "Member", joinDate:  randomCreatedDate()},
{id: 2, name: "Jamie Rozario", role: "Editor", joinDate: randomCreatedDate()},
{id: 3, name: "Ashton Pill", role: "Member", joinDate: randomCreatedDate()},
{id: 4, name: "Juliet Well", role: "Member", joinDate: randomCreatedDate()},
{id: 5, name: "Ronald Michael", role: "Admin", joinDate: randomCreatedDate()},
{id: 6, name: "Julie Rachel", role: "Editor", joinDate: randomCreatedDate()},
{id: 7, name: "Aaron Smith", role: "Member", joinDate: randomCreatedDate()},
{id: 8, name: "Sue Wills", role: "Member", joinDate: randomCreatedDate()},
{id: 9, name: "Ronny Mitchel", role: "Admin", joinDate: randomCreatedDate()},
{id: 10, name: "Janelle Boyle", role: "Editor", joinDate: randomCreatedDate()},
{id: 11, name: "Aydon Kelly", role: "Editor", joinDate: randomCreatedDate()},
{id: 12, name: "Tessa Smith", role: "Member", joinDate: randomCreatedDate()},
{id: 13, name: "Therese Michael", role: "Member", joinDate: randomCreatedDate()},
{id: 14, name: "Riley Bonson", role: "Editor", joinDate: randomCreatedDate()},
{id: 15, name: "Anston Small", role: "Member", joinDate: randomCreatedDate()},
{id: 16, name: "Willy Mills", role: "Member", joinDate: randomCreatedDate()},
{id: 17, name: "Benny Paul", role: "Member", joinDate: randomCreatedDate()}]

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
    {id: 2, title: "My Dear Secretary", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Action, author: "Agnese Orred", year_published: "1993", status: BOOK_STATUS.Available, last_borrower: "Aaron Smith"},
    {id: 3, title: "Ignition", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.ScienceFiction, author: "Josy Coomer", year_published: "1990", status: BOOK_STATUS.Available, last_borrower: "Juliet Well"},
    {id: 4, title: "Hellboy", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.History, author: "Amata Dubois", year_published: "1983", status: BOOK_STATUS.Available, last_borrower: "Ashton Pill"},
    {id: 5, title: "Acts of Worship", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.History, author: "Gisela Powton", year_published: "1978", status: BOOK_STATUS.Available, last_borrower: "Anna Tan"},
    {id: 6, title: "Mother Earth", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Travel, author: "Daryl Phebee", year_published: "1999", status: BOOK_STATUS.Borrowed, last_borrower: "Tessa Smith"},
    {id: 7, title: "Phantasm", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Fantasy, author: "Mayer Benam", year_published: "1989", status: BOOK_STATUS.Available, last_borrower: "Ashton Pill"},
    {id: 8, title: "Double Tide", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Poetry, author: "Nollie Fice", year_published: "1987", status: BOOK_STATUS.Borrowed, last_borrower: "Emyle Iamittii"},
    {id: 9, title: "Soap and Water", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Lifestyle, author: "Em Tysall", year_published: "1997", status: BOOK_STATUS.Borrowed, last_borrower: "Anna Tan"},
    {id: 10, title: "Whole Wide World", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Fiction, author: "Agnese Orred", year_published: "1993", status: BOOK_STATUS.Available, last_borrower: "Aaron Smith"},
    {id: 11, title: "America's Sweethearts", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.History, author: "Josy Coomer", year_published: "1990", status: BOOK_STATUS.Available, last_borrower: "Juliet Well"},
    {id: 12, title: "Blood Moon", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.History, author: "Amata Dubois", year_published: "1978", status: BOOK_STATUS.Available, last_borrower: "Ashton Pill"},
    {id: 13, title: "Identity", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.ScienceFiction, author: "Gisela Powton", year_published: "1973", status: BOOK_STATUS.Available, last_borrower: "Anna Tan"},
    {id: 14, title: "Innocent Lies", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Romance, author: "Daryl Phebee", year_published: "1989", status: BOOK_STATUS.Borrowed, last_borrower: "Emyle Iamittii"},
    {id: 15, title: "For Pete's Sake", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Lifestyle, author: "Mayer Benam", year_published: "1985", status: BOOK_STATUS.Available, last_borrower: "Ashton Pill"},
    {id: 16, title: "Alice", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Thriller, author: "Nollie Fice", year_published: "1982", status: BOOK_STATUS.Borrowed, last_borrower: "Tessa Smith"},
    {id: 17, title: "Border", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Adventure, author: "Em Tysall", year_published: "1990", status: BOOK_STATUS.Borrowed, last_borrower: "Anna Tan"},
    {id: 18, title: "Beneath the Harvest Sky", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Poetry, author: "Randa Machin", year_published: "1994", status: BOOK_STATUS.Available, last_borrower: "Riley Bonson"},
    {id: 19, title: "Under the Sand", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Fiction, author: "Lani Harber", year_published: "1989", status: BOOK_STATUS.Available, last_borrower: "Juliet Well"},
    {id: 20, title: "Violette", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Romance, author: "Wayne Cavil", year_published: "1989", status: BOOK_STATUS.Available, last_borrower: "Ashton Pill"},
    {id: 21, title: "Troubled Water", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.ScienceFiction, author: "Patty Lowres", year_published: "1988", status: BOOK_STATUS.Available, last_borrower: "Anna Tan"},
    {id: 22, title: "Halloween II", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Thriller, author: "Nollie Fice", year_published: "1985", status: BOOK_STATUS.Borrowed, last_borrower: "Riley Bonson"},
    {id: 23, title: "200 Cigarettes", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Lifestyle, author: "Geoffrey Clegg", year_published: "1999", status: BOOK_STATUS.Available, last_borrower: "Ashton Pill"},
    {id: 24, title: "Taking Chance", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.Adventure, author: "Gratia Tollet", year_published: "1979", status: BOOK_STATUS.Borrowed, last_borrower: "Sue Wills"},
    {id: 25, title: "Four Sons", description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", genre: GENRE.History, author: "Tamiko Rudwell", year_published: "1992", status: BOOK_STATUS.Borrowed, last_borrower: "Anna Tan"},
]



