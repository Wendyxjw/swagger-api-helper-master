export interface ApiResponse {
	code?: number;
	type?: string;
	message?: string;
}
export interface Category {
	id?: number;
	name?: string;
}
export interface Pet {
	id?: number;
	category?: Category;
	name: string; // example: "doggie"
	photoUrls: Array<string>;
	tags?: Array<Tag>;
	status?: 'available' | 'pending' | 'sold'; // pet status in the store
}
export interface Tag {
	id?: number;
	name?: string;
}
export interface Order {
	id?: number;
	petId?: number;
	quantity?: number;
	shipDate?: string;
	status?: 'placed' | 'approved' | 'delivered'; // Order Status
	complete?: boolean;
}
export interface User {
	id?: number;
	username?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	password?: string;
	phone?: string;
	userStatus?: number; // User Status
}