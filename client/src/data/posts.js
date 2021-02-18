import oj from '../img/story/oj.jpeg';
import claudinelonget from '../img/story/claudinelonget.jpg';
import raecarruth from '../img/story/raecarruth.jpg';
import sid from '../img/story/sid.jpg';
import snoop from '../img/story/snoop.jpg';

const dateOne = new Date();
const dateTwo = new Date(dateOne.getTime() - 5 * 60);
const dateThree = new Date(dateTwo.getTime() - 15 *60);
const dateFour = new Date(dateThree.getTime() - 18 * 60);
const dateFive = new Date(dateFour.getTime() - 25 *60)

const posts = [
    {
        id: 1,
        profilePic: oj,
        message: 'glove doesnt fit',
        timestamp: dateOne,
        username: 'oj',
        image: null
    },
    {
        id: 2,
        profilePic: claudinelonget,
        message: 'cheaters get murdered',
        timestamp: dateTwo,
        username: 'claudine',
        image: null
    },
    {
        id: 3,
        profilePic: raecarruth ,
        message: 'killed the bitch',
        timestamp: dateThree,
        username: 'raecarruth',
        image: null
    },
    {
        id: 4,
        profilePic: sid,
        message: 'got caught slippin',
        timestamp: dateFour,
        username: 'sid',
        image: null
    },
    {
        id: 5,
        profilePic: snoop,
        message: 'snitches get stiches',
        timestamp: dateFive,
        username: 'snoop',
        image: null
    }
];

export default posts;