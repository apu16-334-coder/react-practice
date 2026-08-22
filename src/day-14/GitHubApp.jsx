import { useState } from "react";
import SearchPage from "./SearchPage";
import ProfilePage from "./ProfilePage";

function GitHubApp() {
    const [searchData, setSearchData] = useState({
        query: '',
        isQueryEmpty: null
    });

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState('searchPage');
    const [currentUser, setCurrentUser] = useState('');

    return (
        <>
            {currentPage === 'searchPage' && <SearchPage searchData={searchData} onChangeSearchData={setSearchData} users={users} onChangeUsers={setUsers} onChangeCurrentUser={setCurrentUser} onChangePage={setCurrentPage} />}

            {currentPage === 'profilePage' && <ProfilePage onChangePage={setCurrentPage}  currentUser={currentUser} />}
        </>
    )
}

export default GitHubApp;

