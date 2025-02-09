// Function to capitalize the first letter of a word
function capitalizeFirstLetter(word: string): string {
    if (typeof word !== 'string' || word.length === 0) {
        return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Function to capitalize the first letter of every word in a string
function capitalizeEveryFirstLetter(str: string): string {
    return str.replace(/\b\w/g, (char: string) => {
        return char.toUpperCase();
    });
}

// Function to format an ISO date string to a human-readable date with words
function formatDateStringtoDateWords(isoString: string): string {
    const date = new Date(isoString);

    const days = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
        '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th',
        '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th',
        '29th', '30th', '31st'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    const day = days[date.getUTCDate() - 1]; // getUTCDate() returns 1-31
    const month = months[date.getUTCMonth()]; // getUTCMonth() returns 0-11
    const year = date.getUTCFullYear(); // getUTCFullYear() returns the full year

    return `${day} ${month}, ${year}`;
}

// Function to format an ISO date string to a human-readable time with words
function formatDateStringtoTimeWords(isoString: string): string {
    const date = new Date(isoString);

    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    // Convert 24-hour time to 12-hour time
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, set it to 12

    // Pad minutes with leading zeros if necessary
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();

    return `${hours}:${formattedMinutes}${ampm}`;
}

// Function to convert a string to camel case
function toCamelCase(str: string): string {
    // Remove non-alphanumeric characters (except spaces)
    str = str.replace(/[^a-zA-Z0-9 ]/g, '');

    // Split the string into words
    let words = str.split(' ');

    // Convert the first word to lowercase and the rest to title case
    let camelCase = words[0].toLowerCase() + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');

    return camelCase;
}

// Export functions
export {
    capitalizeFirstLetter,
    capitalizeEveryFirstLetter,
    formatDateStringtoDateWords,
    formatDateStringtoTimeWords,
    toCamelCase
}