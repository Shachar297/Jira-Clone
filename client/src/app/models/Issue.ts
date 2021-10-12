export class Issue {
  public constructor(
    public id: number,
    public summary: string,
    public status: string,
    public statusId?: number
  ) {
    if(this.id === undefined || this.id === null || this.id === 0) {
      this.id = 0;
    }

    if(this.summary === undefined || this.summary === null || this.summary === "") {
      this.summary = "";
    }

    if(this.status === undefined || this.status === null || this.status === "") {
      this.status = "";
    }

    if(this.statusId === undefined || this.statusId === null || this.statusId === 0) {
      this.statusId = 0;
    }
  }
}
