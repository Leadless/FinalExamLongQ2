function validate() {
	if(document.wishlist.name.value.length < 3){
		alert("Hey, name must at least have 3 alphabets/numeric digits or above!")
		return false;
	}

	if(document.wishlist.address.value.length < 3){
		alert("Hey, address must at least have 3 alphabets/numeric digits or above!")
		return false;
	}

	if(document.wishlist.wishes.value.length < 1){
		alert("Hey, wishes must at leave have 1 alphabets/numeric digits or above!")
		return false;
	}

	return true;
}