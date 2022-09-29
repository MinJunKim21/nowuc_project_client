const chosenList = [
  { name: '침착맨', channelId: 'UCUj6rrhMTR9pipbAWBAMvUQ' },
  { name: '슈카', channelId: 'UCsJ6RuBiTVWRX156FVbeaGg' },
];

let Props = [];
const fetchingFunc = () => {
  for (let i = 0; i < chosenList.length; i++) {
    Props.push(i);
  }
};
fetchingFunc();

console.log(Props);
