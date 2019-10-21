export const getTime = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    let minutes = date.getMinutes();

    if(minutes.toString().length === 1){
        minutes = '0' + minutes;
    }

    if(day.toString() <= 9){
        day = '0' + day;
    }

    if(month.toString() <= 9){
        month = '0' + month;
    }

    const time = `${year}-${month}-${day}, ${hour}:${minutes}`;

    return time;
}
