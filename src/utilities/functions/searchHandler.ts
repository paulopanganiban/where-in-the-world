export interface SearchHandlerProps {
    searchTerm: string;
    setSearchTerm: (value: React.SetStateAction<string>) => void;
    data: any;
}
export const searchHandler = (searchTerm : string, setSearchTerm
    :(value: React.SetStateAction<string>) => void
    , data: any) => {
   console.log(searchTerm)
   
    // setSearchTerm(searchTerm);
    // if (searchTerm !== "") {
    //   const newContactList = contacts.filter((contact) => {
    //     return Object.values(contact)
    //       .join(" ")
    //       .toLowerCase()
    //       .includes(searchTerm.toLowerCase());
    //   });
    //   setSearchResults(newContactList);
    // } else {
    //   setSearchResults(contacts);
    // }
}