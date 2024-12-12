import toast from "react-hot-toast";

const getStoredBooks = () => {
    const storeBookStr = localStorage.getItem('read-book');
    if (storeBookStr) {
        const storeBook = JSON.parse(storeBookStr);
        return storeBook;
    } else {
        return []
    }
}
const addBookAsRead = (id) => {
    const storedBook = getStoredBooks();
    if (storedBook.includes(id)) {
        toast.error("Book Already Exists")
    } else {
        storedBook.push(id);
        const storeBookStr = JSON.stringify(storedBook);
        localStorage.setItem('read-book', storeBookStr);
        toast.success("Book Successfully Added")
    }
}

const getWishList = () => {
    const wishListStr = localStorage.getItem('wish-list');
    if (wishListStr) {
        const addWishList = JSON.parse(wishListStr);
        return addWishList;
    } else {
        return [];
    }
}
const addWistList = (id) => {
    const addWishlist = getWishList();
    if (addWishlist.includes(id)) {
        toast.error("Already Exists in Wish List");
        console.log("already exists")
    } else {
        addWishlist.push(id);
        const addWithListStr = JSON.stringify(addWishlist);
        localStorage.setItem('wish-list', addWithListStr);
        toast.success("Successfully added to your Wish List")
    }
}
export { addBookAsRead, getStoredBooks, getWishList, addWistList };