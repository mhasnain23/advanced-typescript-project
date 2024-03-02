const getUser = document.querySelector('#user') as HTMLInputElement;
const formSubmit = document.querySelector('.form') as HTMLFormElement;
const main_container = document.querySelector('.main-container') as HTMLDivElement;

//so lets define the contract of an object

interface UserData {
    id: number;
    login: string;
    avatar_url: string;
    location: string;
    url: string;
}