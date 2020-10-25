import CryptoJS from 'crypto-js';

export function encrypt(email, pass) {
	
	return CryptoJS.AES.encrypt(pass, email).toString();
}


export function userExists(props, email){
	return props.user.some((el) => el.Email === email)
}

export function passwordMatch(props, pass) {
		
	return props.user.some((el) => CryptoJS.AES.decrypt(el.Password, el.Email).toString(CryptoJS.enc.Utf8) === pass);
}



