import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SelectLabels from './Selectlabel.js';
// const Searchbar=()=>{
//     return (
//         <form action="/" method="get">
//         <label htmlFor="header-search">
//             {/* <span className="visually-hidden">Search blog posts</span> */}
//         </label>
//             <input
//                 type="text"
//                 id="header-search"
//                 placeholder="Search Book"
//                 name="s" 
//             />
//             <button type="submit">Search</button>
//         </form>
//     )
// }

// export default Searchbar
function Searchbar({onClick, onChange}) {
    return (
        <>
            <div className="input-group">
                <SelectLabels id="selectsearch"/>
                <input
                    type="search"
                    className="form-control_rounded"
                    placeholder="책 정보 입력"
                    onChange={onChange}
                    width="614px"
                />
                <button type="button" id="search_btn" onClick={onClick}>
                    <SearchRoundedIcon/>
                </button>
            </div>
        </>
    )
}

export default Searchbar