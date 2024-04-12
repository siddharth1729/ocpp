// Logger.ts
/**
 * Defines the available log levels for the application.
 * 
 * - `INFO`: Indicates an informational message.
 * - `WARN`: Indicates a warning message.
 * - `ERROR`: Indicates an error message.
 */
export enum LogLevel {
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
}

/**
 * Provides a simple logging utility with different log levels.
 */
export class Logger {
    /**
     * Logs a message with the specified log level.
     *
     * @param level - The log level to use for the message.
     * @param message - The message to log.
     */
    static log(level: LogLevel, message: string): void {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] [${level}] ${message}`);
    }

    /**
     * Logs an informational message.
     * 
     * @param message - The message to log.
     */
    static info(message: string): void {
        this.log(LogLevel.INFO, message);
    }

    /**
     * Logs a warning message.
     *
     * @param message - The message to log.
     */
    static warn(message: string): void {
        this.log(LogLevel.WARN, message);
    }

    /**
     * Logs an error message.
     *
     * @param message - The error message to log.
     */
    static error(message: string): void {
        this.log(LogLevel.ERROR, message);
    }
}
