import SearchBar from "./SearchBar.jsx";
import ProductTable from "./ProductTable.jsx";


function FilterableProductTable({products}){
    return(
        <>
            <SearchBar/>
            <ProductTable products={products}/>
        </>
    );
}

export default FilterableProductTable;