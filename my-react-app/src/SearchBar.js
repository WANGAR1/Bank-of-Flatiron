import React from "react"

function SearchBar() {
    return (
     <div class="search-container">
       <form >
          <input type="text" placeholder="Search your Recent Transactions" name="search"/>
        <button type="submit">
          <span role="img">🔍</span>
        </button>
       </form>
     </div>  
        
    )
}
export default SearchBar