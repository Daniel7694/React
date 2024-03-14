import ProductCategoryRow from "./ProductCategoryRow.jsx";
import ProductRow from "./ProductRow.jsx";

function ProductTable({products}){
    const row = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.category !== lastCategory){
            row.push(
                <ProductCategoryRow
                    category={ product.category}
                    key={product.category}
                />
            );
        }
        row.push(
            <ProductRow
                product={product}
                key={product.name}
            />
        );
        return(
            <>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {row}
                    </tbody>
                </table>
            </>
        );
        }

    )
}
export default ProductTable;