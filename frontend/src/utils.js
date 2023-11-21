
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

export default {
    formatVND: formatVND,
}