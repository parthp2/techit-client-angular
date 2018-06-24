import { User } from "./User";

export class Ticket {
	constructor(
		public id?: string,
		public subject?: string,
		public details?: string,
		public startDate?: Date,
		public endDate?: Date,
		public lastUpdated?: Date,
		public location?: string,
		public updates?: Array<Update>,
		public completionDetails?: string,
		public progress?: string,
		public priority?: string,
		public unit?: string
	) {}
  }
  class Update{
	constructor(
		public modifier?: User,
		public updateDetails?: string,
		public modifiedDate?: Date
	) {}
  }