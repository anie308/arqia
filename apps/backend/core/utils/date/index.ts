export const getNextDate = (frequency:string, fromDate = new Date()) => {
    const nextDate = new Date(fromDate);
    
    switch (frequency.toLowerCase()) {
        case "daily":
            nextDate.setDate(nextDate.getDate() + 1);
            break;
        case "weekly":
            nextDate.setDate(nextDate.getDate() + 7);
            break;
        case "biweekly":
            nextDate.setDate(nextDate.getDate() + 14);
            break;
        case "monthly":
            nextDate.setMonth(nextDate.getMonth() + 1);
            break;
        case "quarterly":
            nextDate.setMonth(nextDate.getMonth() + 3);
            break;
        case "yearly":
            nextDate.setFullYear(nextDate.getFullYear() + 1);
            break;
        default:
            throw new Error("Invalid frequency. Use: daily, weekly, biweekly, monthly, quarterly, or yearly.");
    }
    
    return nextDate;
};