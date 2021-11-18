export default class ErrorRepository {
  constructor() {
    this.errorList = new Map();
    this.errorList.set(200, 'OK');
    this.errorList.set(201, 'Created');
    this.errorList.set(400, 'Bad Request');
    this.errorList.set(404, 'Not Found');
    this.errorList.set(500, 'Internal Server Error');
  }

  translate(code) {
    const v = this.errorList.get(code);
    return v === undefined ? 'Unknown error' : v;
  }
}
