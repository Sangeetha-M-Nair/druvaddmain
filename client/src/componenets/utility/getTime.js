export default function getDays(date){
    let days = (new Date() - new Date(date))/(1000*60*60*24);
    return days;   
}
