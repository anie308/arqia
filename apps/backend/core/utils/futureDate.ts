export function getFutureDate(days: any) {
    // Get the current date and time
    const currentDate = new Date();

    // Calculate the date 30 days from today
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + days);

    // Format the future date to ISO 8601 format with timezone
    const formattedDate = futureDate.toISOString();

    // Adjust the format to include milliseconds and timezone
    const formattedDateWithTimezone = formattedDate.replace('Z', '+00:00');

    return formattedDateWithTimezone;
}