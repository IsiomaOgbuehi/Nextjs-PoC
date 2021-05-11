import React, {useState, useEffect} from 'react';
import { FilterSideNav } from './filter-side-nav';
import { ProductDisplay } from './products-display';
import { ProductListingHeader } from './product-listing-header';
import Spinner from 'react-bootstrap/Spinner';
import { FilterCategory } from '../../util/filter-category';
import { FilterPrice } from '../../util/filter-price';

export function ProductListingInnerLayout({categories, priceRanges, products}) {

    const [sortType, setSortType] = useState('');
    const [sortValue, setSortValue] = useState('');
    const handleSorting = (type) => {
        // setSortType(type);
        const sortBy = document.querySelector('.sortType').value;
        // setSortValue(sortBy);

        if (type === 'asc' && sortBy === 'alphabet') {
            const sorted = allFiltered.sort(compareAsc);
            setAllFiltered(sorted);
            refreshSortData();
        }
        if (type === 'desc' && sortBy === 'alphabet') {
            const sorted = allFiltered.sort(compareDesc);
            setAllFiltered(sorted);
            refreshSortData();
        }

        if (type === 'asc' && sortBy === 'price') {
            const sorted = allFiltered.sort(comparePriceAsc);
            setAllFiltered(sorted)
            refreshSortData();
        }
        if (type === 'desc' && sortBy === 'price') {
            const sorted = allFiltered.sort(comparePriceDesc);
            setAllFiltered(sorted)
            refreshSortData();
        }


    }

    const refreshSortData = () => {
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct =  indexOfLastProduct - productsPerPage;
        setCurrentProducts(allFiltered.slice(indexOfFirstProduct, indexOfLastProduct));
        setPageCount(Math.ceil(allFiltered.length / 6));
    }

    function compareAsc(a, b) {
        const bandA = a.data.name.toUpperCase();
        const bandB = b.data.name.toUpperCase();

        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    }
    function compareDesc(a, b) {
        const bandA = a.data.name.toUpperCase();
        const bandB = b.data.name.toUpperCase();

        let comparison = 0;
        if (bandB > bandA) {
            comparison = 1;
        } else if (bandB < bandA) {
            comparison = -1;
        }
        return comparison;
    }

    function comparePriceAsc(a, b) {
        const bandA = a.data.price;
        const bandB = b.data.price;

        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    }

    function comparePriceDesc(a, b) {
        const bandA = a.data.price;
        const bandB = b.data.price;

        let comparison = 0;
        if (bandB > bandA) {
            comparison = 1;
        } else if (bandB < bandA) {
            comparison = -1;
        }
        return comparison;
    }





    //PAGINATION
    const [currentPage, setCurrentPage] = useState(0);
    const [productsPerPage, setProductsPerPage] = useState(6);
    const [pageCount, setPageCount] = useState(Math.ceil(products.length / productsPerPage));

    // Get current product
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct =  indexOfLastProduct - productsPerPage;
    const [allFiltered, setAllFiltered] = useState(products);
    const [currentProducts, setCurrentProducts] = useState(products.slice(indexOfFirstProduct, indexOfLastProduct));

    //Price Range
    const [priceRange, setPriceRange] = useState('');
    const [noPriceSort, setNoPriceSort] = useState(false);


    const handlePageClick = (e) => {
        const selectedPage = e.selected + 1;


        const indexOfLastProduct = selectedPage * productsPerPage;
        const indexOfFirstProduct =  indexOfLastProduct - productsPerPage;

        setCurrentPage(selectedPage);

        const currentProducts = allFiltered.slice(indexOfFirstProduct, indexOfLastProduct);
        setCurrentProducts(currentProducts);

    }


    // FILTER - GET CATEGORIES
    const [categoryFilters, setCategoryFilters] = useState([]);
    const [pricesFilters, setPricesFilters] = useState([]);


    const [categorySortArray, setCategorySortArray] = useState([]);
    const [noCategorySort, setNoCategorySort] = useState(false);

    const handleCategoryCheck = (e) => {
        const search = e.target.value;

        if (categorySortArray.includes(search)) {

            let index = categorySortArray.indexOf(search);
            // console.log(index)
            setCategorySortArray(oldArray => oldArray.filter((val, i) => i !== index));
            setNoCategorySort(true);
            // console.log(categorySortArray);
        } else {
            setCategorySortArray((oldArray) => [...oldArray, search]);
            // console.log(categorySortArray);
        }

    }

    const filterByCategory = async () => {
        const arr = await FilterCategory(products, categorySortArray, priceRange);

        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct =  indexOfLastProduct - productsPerPage;
        setCurrentProducts(arr.slice(indexOfFirstProduct, indexOfLastProduct));
        setPageCount(Math.ceil(arr.length / 6));
        setAllFiltered(arr);
        // setCurrentPage(0);
    }

    useEffect(async () => {
        if(categorySortArray.length > 0) {
            filterByCategory();
            // setCurrentPage(0)
            setProductsPerPage(6);
            // console.log('RUNNIG1');
        }
        if(noCategorySort && categorySortArray.length === 0) {
            filterByCategory();
        }
    }, [categorySortArray, noCategorySort])

    const getCategories = async() => {
        return products.map(res => res.data.category).filter((val, ind, arr) => arr.indexOf(val) == ind);
    }


    // FILTER - GET PRICES
    const getPricesFilter = async() => {
        const uniquePrices = products.map(res => res.data.price).filter((val, ind, arr) => arr.indexOf(val) == ind);
        const minPrice = Math.round(Math.min(...uniquePrices));
        const maxPrice = Math.round(Math.max(...uniquePrices));

        const range = [];
        range.push({"min": 0, "max": Math.round(minPrice)})

        let check = 50;
        let minCheck = minPrice;

        for (let i=minPrice; i<=maxPrice; i = i + 3) {
            if (check % i == 0) {
                range.push({"min": minCheck, "max": i});
                minCheck = i;
                check += check;

            }
            if (i + 3 >= maxPrice){
                range.push({"min": minCheck, "max": maxPrice})
            }
        }
        return range;
    }

    useEffect(async () => {
        const priceFilter = await getPricesFilter();
        setPricesFilters(priceFilter);

        const categoryFilter = await getCategories();
        setCategoryFilters(categoryFilter);
    },[]);

    const priceFilterHandler = (e) => {
        const priceRange = JSON.parse(e.target.value);

        document.querySelectorAll('.chbx').forEach( el => { if (el !== e.target) el.checked = false});
        if(!e.target.checked){
            console.log('UNCHECKED')
            setPriceRange('')
        } else{
                setPriceRange(priceRange);
            setNoPriceSort(true)
        }
    }

    const filterByPrice = async () => {
        const arr = await FilterPrice(products, categorySortArray, priceRange);
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct =  indexOfLastProduct - productsPerPage;
        setCurrentProducts(arr.slice(indexOfFirstProduct, indexOfLastProduct));
        setPageCount(Math.ceil(arr.length / 6));
        setAllFiltered(arr);
    }

    useEffect(async () => {
        if(priceRange !== '') {
            filterByPrice();
            // setCurrentPage(0)
            setProductsPerPage(6);
        }
        if (priceRange === '' && noPriceSort){
            filterByPrice()
        }
    }, [priceRange]);

    return(
        <>
          <ProductListingHeader categories={categoryFilters} prices={pricesFilters} handleSorting={handleSorting} handleCategoryCheck={handleCategoryCheck} priceFilterHandler={priceFilterHandler} />
          <div className="container pe-0 ps-0 mt-3">
              <div className="row">
                  <FilterSideNav categoryFilters={categoryFilters} pricesFilters={pricesFilters} handleCategoryCheck={handleCategoryCheck} priceFilterHandler={priceFilterHandler} />
                  {
                      products ? <ProductDisplay products={currentProducts} handlePageClick={handlePageClick} currentPage={currentPage} pageCount={pageCount} /> : <Spinner animation="border" />
                  }
          </div>
        </div>
      </>
    );
}