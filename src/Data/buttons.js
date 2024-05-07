import delivery from "../Assets/Images/fastDelivery.jpg";
import warranty from "../Assets/Images/warranty.jpg";
import support from "../Assets/Images/customerService.jpg";
import charging from "../Assets/Images/charging.jpg";

let buttons = {
    one: {
        img: delivery,
        heading: "Shipment guaranteed within 24 hours of purchase",
        p: "Complimentary next-day shipping in California; Free shipping across the US within 3-5 business days.",
    },
    two: {
        img: warranty,
        heading: "12-month warranty from the manufacturer",
        p: "The basic warranty is valid for a period of one year, with the option to extend it for up to four years.",
    },
    three: {
        img: support,
        heading: "Post-purchase assistance is one of our principles",
        p: "In case of any issues with your kickscooter, our specialists will reach out to you within 15 minutes.",
    },
    four: {
        img: charging,
        heading: "Enjoy a range of up to 40 miles on a single charge",
        p: "The KickScooter MAX offers a remarkable range of 40 miles, the longest available, and can tackle uphill slopes of up to 20 degrees. This means you can journey from the San Francisco Bay Area to Palo Alto on a single charge.",
    },
};

export default buttons;
