import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    return [
        {
            name: "Beaver Creek",
            artist: "Aso, Middle School, Aviino",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color: ["##238F77", "##FAA94D"],
            audio: "http://localhost:3000/assets/songs/Beaver_Creek.mp3"
        },
        {
            name: "Daylight",
            artist: "Aso, Middle School",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["##238F77", "##FAA94D"],
            audio: "http://localhost:3000/assets/songs/Daylight.mp3"
        },
        {
            name: "Keep Going",
            artist: "Aso, Middle School",
            cover: "https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["##238F77", "##FAA94D"],
            audio: "http://localhost:3000/assets/songs/Keep_Going.mp3"
        },
        {
            name: "Nightfall",
            artist: "Sworn",
            cover: "https://chillhop.com/wp-content/uploads/2023/04/a32d2ec47ba20c985c2b2425fd24d277a8f36d3e-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#272429", "#E4BE8D"],
            audio: "http://localhost:3000/assets/songs/Nightfall.mp3"
        },
        {
            name: "Reflection",
            artist: "Ian Ewing, Strehlow",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#BA4A46", "#FDF0DD"],
            audio: "http://localhost:3000/assets/songs/Reflection.mp3"
        },
        {
            name: "Under the City Stars",
            artist: "Aso, Middle School, Aviino",
            cover: "https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["##238F77", "##FAA94D"],
            audio: "http://localhost:3000/assets/songs/Under_the_City_Stars.mp3"
        },
    ]
}

export default chillHop;