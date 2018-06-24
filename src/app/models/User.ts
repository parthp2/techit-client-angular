export class User {
	constructor(
		public _id?: string,
		public firstName?: string,
		public lastName?: string,
		public username?: string,
		public enabled?: boolean,
		public email?: string,
		public post?: string,
		public phone?: string,
		public department?: string,
		public unit?: string
	){}
}
