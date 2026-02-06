
import { API_URL } from "app/config";

function formatVND(amount) {
    // Convert the input to a number
    const numberAmount = parseFloat(amount);

    // Check if the input is a valid number
    if (isNaN(numberAmount)) {
        return "Invalid amount";
    }

    // Use Number.toLocaleString to format the number with commas
    const formattedAmount = numberAmount.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return formattedAmount.replace(/,/g, '.');
}

function formatDate(dateStr) {
    let date = new Date(dateStr);

    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    let year = date.getFullYear();

    return day + '/' + month + '/' + year;
}

function resolveImage(path) {
    if (!path) return "https://placehold.co/600x400"; // Fallback
    if (path.startsWith("http://") || path.startsWith("https://")) {
        return path;
    }
    return `${API_URL}${path}`;
}

export default {
    formatVND: formatVND,
    formatDate: formatDate,
    resolveImage: resolveImage,
}
