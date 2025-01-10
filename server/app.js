import express from 'express';
const app = express();


const port = 3000;


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});



function getFormattedTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const suffix = hours >= 12 ? 'PM' : 'AM';

    // Перетворення годин із 24-годинного на 12-годинний формат
    hours = hours % 12 || 12; // Заміна 0 на 12 для 12-годинного формату

    // Форматування часу
    return `${hours}:${minutes.toString().padStart(2, '0')} ${suffix}`;
}
getFormattedTime()


app.get('/', (req, res) => {
    const currentTime = getFormattedTime();
    res.send(`Current time is: ${currentTime}`);
});


