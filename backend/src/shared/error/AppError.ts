class AppError {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly data?: any;

  // eslint-disable-next-line default-param-last
  constructor(message: string, statusCode = 400, data?: any) {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }
}

export default AppError;
