import { useState } from "react";
import SearchPage from "./SearchPage";
import ProfilePage from "./ProfilePage";

function GitHubApp() {

    const [currentPage, setCurrentPage] = useState('searchPage');
    const [currentUser, setCurrentUser] = useState('');

    return (
        <>
            {currentPage === 'searchPage' && <SearchPage onChangeUser={setCurrentUser} onChangePage={setCurrentPage} />}

            {currentPage === 'profilePage' && <ProfilePage onChangePage={setCurrentPage}  currentUser={currentUser} />}
        </>
    )
}

export default GitHubApp;

