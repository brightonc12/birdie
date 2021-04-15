export class AppError extends Error {
    public message: string;
    public status: number;
    constructor(message, status) {
        super(message)
        this.message = `${status}`.startsWith('4') ? 'FAILED' : 'SERVER_ERROR'
        this.status = status
        // this.isOperational = true
        Error.captureStackTrace(this, this.constructor)
    }
}

